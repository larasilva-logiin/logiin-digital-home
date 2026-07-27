import { Helmet } from "react-helmet-async";
import { absoluteUrl } from "@/config/site";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  /** Route path (e.g. "/", "/blog", "/blog/slug"). Used for canonical + og:url. */
  path?: string;
}

const SEO = ({ title, description, ogTitle, ogDescription, path }: SEOProps) => {
  const ogT = ogTitle ?? title;
  const ogD = ogDescription ?? description;
  const url = path ? absoluteUrl(path) : undefined;
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
    </Helmet>
  );
};

export default SEO;