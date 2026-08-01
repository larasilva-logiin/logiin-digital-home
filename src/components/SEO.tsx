import { Helmet } from "react-helmet-async";
import { absoluteUrl } from "@/config/site";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  /** Route path (e.g. "/", "/blog", "/blog/slug"). Used for canonical + og:url. */
  path?: string;
  /** Trilha de navegação para marcação BreadcrumbList (schema.org). */
  breadcrumbs?: { name: string; path: string }[];
}

const SEO = ({ title, description, ogTitle, ogDescription, path, breadcrumbs }: SEOProps) => {
  const ogT = ogTitle ?? title;
  const ogD = ogDescription ?? description;
  const url = path ? absoluteUrl(path) : undefined;
  const breadcrumbLd =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((b, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: b.name,
            item: absoluteUrl(b.path),
          })),
        }
      : null;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogT} />
      <meta property="og:description" content={ogD} />
      <meta name="twitter:title" content={ogT} />
      <meta name="twitter:description" content={ogD} />
      {url && <link rel="canonical" href={url} />}
      {url && <meta property="og:url" content={url} />}
      {breadcrumbLd && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;