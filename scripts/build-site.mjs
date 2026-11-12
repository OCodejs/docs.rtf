import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const output = resolve(root, "dist");
const required = ["index.html", "studio.html"];

for (const file of required) {
  const source = await readFile(resolve(root, file), "utf8");
  if (!/^<!doctype html>/i.test(source.trimStart())) {
    throw new Error(`${file} must begin with a valid HTML doctype`);
  }
  if (!/<html[^>]+lang=["']vi["']/i.test(source)) {
    throw new Error(`${file} must declare Vietnamese document language`);
  }
  if (!/<meta[^>]+name=["']viewport["']/i.test(source)) {
    throw new Error(`${file} is missing its responsive viewport metadata`);
  }
  if (!/<title>[^<]+<\/title>/i.test(source)) {
    throw new Error(`${file} is missing a page title`);
  }
  if (!/border-radius\s*:\s*0/i.test(source)) {
    throw new Error(`${file} must preserve square-corner controls`);
  }
  if (file === "index.html" && (!source.includes("const BASE_PATH=") || !source.includes("function applyBaseLinks("))) {
    throw new Error("index.html must support the GitHub Pages /docs.rtf subpath");
  }
  if (file === "studio.html" && !source.includes('location.hostname==="ocodejs.co"')) {
    throw new Error("studio.html must support the GitHub Pages /docs.rtf subpath");
  }
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of required) await cp(resolve(root, file), resolve(output, file));
// Cloudflare Pages automatically serves index.html for unmatched routes when
// no top-level 404.html is present. GitHub Pages gets its own 404 fallback
// in the Pages workflow after this build command.
await writeFile(resolve(output, "_headers"), "/*\n  X-Robots-Tag: noindex, nofollow\n");
await writeFile(
  resolve(output, "deployment.json"),
  JSON.stringify({ service: "ocodejs-learning", deployment: "preview", static: true }, null, 2) + "\n"
);
console.log("Validated and built OCODEJS Learning preview:", required.join(", "));
