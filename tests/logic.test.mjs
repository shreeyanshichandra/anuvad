// Tests for the app's pure logic, with no install: run with  node --test
// The app is one HTML file, so each function is read out of it by name.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

function grab(name) {
  const start = html.indexOf(`function ${name}(`);
  assert.notEqual(start, -1, `${name} not found in index.html`);
  let i = html.indexOf("{", html.indexOf(")", start)), depth = 0;
  for (let j = i; j < html.length; j++) {
    if (html[j] === "{") depth++;
    if (html[j] === "}" && --depth === 0) return new Function(`${html.slice(start, j + 1)}; return ${name};`)();
  }
  throw new Error(`${name} has no end`);
}

test("safeUrl keeps only web and mail links", () => {
  const safeUrl = grab("safeUrl");
  for (const ok of ["https://example.com/a?b=1", "http://example.com", "mailto:a@example.com", "  HTTPS://EXAMPLE.COM"]) assert.equal(safeUrl(ok), true, ok);
  for (const bad of ["javascript:alert(1)", "JaVaScRiPt:alert(1)", " javascript:alert(1)", "java&#115;cript:alert(1)", "data:text/html,x", "vbscript:x", "//evil.example", "/local", ""]) assert.equal(safeUrl(bad), false, bad);
});

test("shareLimit adds up to the total limit", () => {
  const shareLimit = grab("shareLimit");
  const total = (m) => [...m.values()].reduce((a, b) => a + b, 0);
  const near = (m, n) => assert.ok(Math.abs(total(m) - n) <= m.size, `${total(m)} should be close to ${n}`);
  near(shareLimit(50, new Map([[1, 10], [2, 10], [3, 10], [4, 10], [5, 10], [6, 10]])), 50);
  near(shareLimit(300, new Map(Array.from({ length: 31 }, (_, i) => [i + 1, 100 + i * 20]))), 300);
  const uneven = shareLimit(300, new Map([[1, 900], [2, 100]]));
  assert.ok(uneven.get(1) > uneven.get(2), "the page with more text gets more words");
  for (const v of shareLimit(3, new Map([[1, 1], [2, 1], [3, 1], [4, 1], [5, 1]])).values()) assert.ok(v >= 1, "every page gets at least one word");
});

test("splitText keeps all the text and stays near the size", () => {
  const splitText = grab("splitText");
  assert.deepEqual(splitText(""), []);
  assert.deepEqual(splitText("short"), ["short"]);
  const text = Array.from({ length: 40 }, (_, i) => `Paragraph ${i} ` + "word ".repeat(50).trim()).join("\n\n");
  const parts = splitText(text, 1000);
  assert.ok(parts.length > 1);
  assert.ok(parts.every((p) => p.length <= 1000 + 400), "parts stay near the size");
  assert.equal(parts.join("\n\n"), text, "nothing is lost or reordered");
  const huge = splitText("a. ".repeat(3000), 1000);
  assert.ok(huge.every((p) => p.length <= 1000), "one huge paragraph is cut too");
});

test("the page keeps its security policy and library checks", () => {
  assert.match(html, /http-equiv="Content-Security-Policy"/);
  assert.match(html, /default-src 'none'/);
  const external = [...html.matchAll(/<script src="(https:[^"]+)"([^>]*)>/g)];
  assert.ok(external.length >= 2);
  for (const [, src, attrs] of external) assert.match(attrs, /integrity="sha384-/, src);
});
