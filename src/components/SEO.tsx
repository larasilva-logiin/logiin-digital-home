import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

const SEO = ({ title, description, ogTitle, ogDescription }: SEOProps) => {
  const ogT = ogTitle ?? title;
  const ogD = ogDescription ?? description;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogT} />
      <meta property="og:description" content={ogD} />
      <meta name="twitter:title" content={ogT} />
      <meta name="twitter:description" content={ogD} />
    </Helmet>
  );
};

export default SEO;