import test from "node:test";
import assert from "node:assert/strict";
import { createBasePathTools } from "./base-path.mjs";

function fakeRoot(hrefs) {
  const anchors = hrefs.map(href => ({
    href,
    getAttribute(name) { return name === "href" ? this.href : null; },
    setAttribute(name, value) { if (name === "href") this.href = value; }
  }));
  return {
    anchors,
    querySelectorAll(selector) {
      assert.equal(selector, 'a[href^="/"]');
      return anchors.filter(anchor => anchor.href.startsWith("/"));
    }
  };
}

test("GitHub Pages docs subpath is detected only inside /docs.rtf", () => {
  assert.equal(createBasePathTools("ocodejs.co", "/docs.rtf/").basePath, "/docs.rtf");
  assert.equal(createBasePathTools("ocodejs.co", "/docs.rtf/kham-pha").basePath, "/docs.rtf");
  assert.equal(createBasePathTools("ocodejs.co", "/studio.html").basePath, "");
  assert.equal(createBasePathTools("preview.pages.dev", "/").basePath, "");
});

test("client navigation preserves the docs base path", () => {
  const { appPath } = createBasePathTools("ocodejs.co", "/docs.rtf/");
  assert.equal(appPath("/"), "/docs.rtf/");
  assert.equal(appPath("/kham-pha"), "/docs.rtf/kham-pha");
  assert.equal(appPath("studio.html"), "/docs.rtf/studio.html");
});

test("base path rewrites dynamically generated course-card anchors", () => {
  const { applyBaseLinks } = createBasePathTools("ocodejs.co", "/docs.rtf/kham-pha");
  const root = fakeRoot(["/khoa-hoc/js-core", "/studio.html", "/docs.rtf/khoa-hoc/already-prefixed", "https://example.com"]);
  applyBaseLinks(root);
  assert.deepEqual(root.anchors.map(anchor => anchor.href), [
    "/docs.rtf/khoa-hoc/js-core",
    "/docs.rtf/studio.html",
    "/docs.rtf/khoa-hoc/already-prefixed",
    "https://example.com"
  ]);
});

test("root deployment on ocodejs.co does not force docs subpath", () => {
  const { basePath, appPath } = createBasePathTools("ocodejs.co", "/studio.html");
  assert.equal(basePath, "");
  assert.equal(appPath("/"), "/");
  const root = fakeRoot(["/studio.html"]);
  createBasePathTools("ocodejs.co", "/studio.html").applyBaseLinks(root);
  assert.equal(root.anchors[0].href, "/studio.html");
});

test("Cloudflare Preview remains rooted and does not rewrite links", () => {
  const { basePath, appPath, applyBaseLinks } = createBasePathTools("fix-preview.pages.dev", "/kham-pha");
  assert.equal(basePath, "");
  assert.equal(appPath("/kham-pha"), "/kham-pha");
  const root = fakeRoot(["/studio.html"]);
  applyBaseLinks(root);
  assert.equal(root.anchors[0].href, "/studio.html");
});
