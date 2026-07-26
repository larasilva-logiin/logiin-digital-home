import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
  ".xml": "application/xml",
};

function serve() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      try {
        const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
        let filePath = path.join(distDir, urlPath);
        if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
          filePath = path.join(filePath, "index.html");
        }
        if (!fs.existsSync(filePath)) {
          // SPA fallback
          filePath = path.join(distDir, "index.html");
        }
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
        fs.createReadStream(filePath).pipe(res);
      } catch (e) {
        res.writeHead(500);
        res.end(String(e));
      }
    });
    server.listen(0, "127.0.0.1", () => {
      const port = server.address().port;
      resolve({ server, port });
    });
  });
}

function collectRoutes() {
  const routes = new Set(["/", "/solucoes", "/quem-somos", "/blog", "/contato"]);
  try {
    const blogFile = fs.readFileSync(
      path.resolve(__dirname, "..", "src", "data", "blog.ts"),
      "utf8",
    );
    const re = /slug:\s*["']([^"']+)["']/g;
    let m;
    while ((m = re.exec(blogFile))) routes.add(`/blog/${m[1]}`);
  } catch {}
  return [...routes];
}

async function main() {
  if (!fs.existsSync(path.join(distDir, "index.html"))) {
    console.error("dist/index.html not found — run `vite build` first.");
    process.exit(1);
  }
  const routes = collectRoutes();
  const { server, port } = await serve();
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`[prerender] serving dist at ${baseUrl}`);
  console.log(`[prerender] routes: ${routes.join(", ")}`);

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });

  for (const route of routes) {
    const page = await context.newPage();
    const url = baseUrl + route;
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
      // Give React a beat to finish any final effects.
      await page.waitForTimeout(300);
      const html = await page.content();
      const outDir =
        route === "/" ? distDir : path.join(distDir, route.replace(/^\//, ""));
      fs.mkdirSync(outDir, { recursive: true });
      const outFile = path.join(outDir, "index.html");
      fs.writeFileSync(outFile, html, "utf8");
      console.log(`[prerender] ✓ ${route} -> ${path.relative(distDir, outFile)}`);
    } catch (err) {
      console.error(`[prerender] ✗ ${route}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});