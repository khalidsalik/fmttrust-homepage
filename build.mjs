import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const output = resolve(root, "dist");
const files = [
  "index.html",
  "styles.css",
  "app.js",
  "_headers",
  "_redirects",
  "robots.txt",
  "CNAME",
  "sitemap.xml",
  "assets/fmt-logo.png",
  "assets/fmt-donor-portal-share.png",
  "assets/fmt-homepage-share.png",
  "assets/fmt-homepage-share-v2.jpg",
  "assets/islamic-future-portal.png",
  "assets/seettu-kulukkal.svg",
  "assets/vaaris-urimai.svg"
];

if (dirname(output) !== root) {
  throw new Error("Refusing to clean an output directory outside the project.");
}

await rm(output, { recursive: true, force: true });

for (const file of files) {
  const source = resolve(root, file);
  const destination = resolve(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await cp(source, destination);
}

console.log(`Built ${files.length} public files in ${output}`);
