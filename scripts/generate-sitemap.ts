// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
import { readFileSync, writeFileSync } from "fs"
import { resolve } from "path"

const BASE_URL = "https://logiin.com.br"

interface SitemapEntry {
  path: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: string
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/solucoes", changefreq: "monthly", priority: "0.9" },
  { path: "/quem-somos", changefreq: "yearly", priority: "0.6" },
  { path: "/contato", changefreq: "yearly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
]

const servicesFile = readFileSync(resolve("src/data/services.ts"), "utf8")
const routeRe = /route:\s*["']([^"']+)["']/g
let r: RegExpExecArray | null
while ((r = routeRe.exec(servicesFile))) {
  entries.push({
    path: r[1],
    changefreq: "monthly",
    priority: r[1] === "/cameras-de-seguranca-manaus" ? "0.95" : "0.85",
  })
}

const blogFile = readFileSync(resolve("src/data/blog.ts"), "utf8")
const re = /slug:\s*["']([^"']+)["']/g
let m: RegExpExecArray | null
while ((m = re.exec(blogFile))) {
  entries.push({ path: `/blog/${m[1]}`, changefreq: "monthly", priority: "0.6" })
}

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ].filter(Boolean).join("\n"),
  ),
  `</urlset>`,
].join("\n")

writeFileSync(resolve("public/sitemap.xml"), xml)
console.log(`sitemap.xml written (${entries.length} entries)`)
