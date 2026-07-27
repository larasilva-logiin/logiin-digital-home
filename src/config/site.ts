// Base absolute URL of the site. Change here when the final domain is defined,
// or override at build time with VITE_SITE_URL.
export const SITE_URL: string =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  "https://logiin.com.br";

export const absoluteUrl = (path: string = "/"): string => {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
};