import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Facebook from "./Facebook";
import Twitter from "./Twitter";

const SEO = ({
  title: titleProp,
  desc: descriptionProp,
  banner: bannerProp,
  pathname,
  htmlAttributes,
  bodyAttributes,
  children,
}) => {
  const { site } = useStaticQuery(query);

  const {
    buildTime,
    siteMetadata: { title, description, siteUrl, banner, twitter },
  } = site;
  const defaultBanner = banner;

  const siteTitle = title;
  const defaultDescription = description;

  const seo = {
    title: titleProp ? `${titleProp} | ${siteTitle}` : siteTitle,
    description: descriptionProp || defaultDescription,
    image: banner || defaultBanner,
    url: `${siteUrl}${pathname || ""}`,
  };

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    url: siteUrl,
    inLanguage: "en",
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: siteTitle,
    copyrightYear: "2019",
    creator: {
      "@type": "Person",
      name: siteTitle,
    },
    datePublished: "2019-11-05T10:30:00+01:00",
    dateModified: buildTime,
    image: {
      "@type": "ImageObject",
      url: defaultBanner,
    },
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <html lang="en" {...htmlAttributes} />
        <body {...bodyAttributes} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgWebPage)}
        </script>
        {children}
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type="website"
        url={seo.url}
        locale="en"
        name={siteTitle}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={twitter}
      />
    </>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  htmlAttributes: PropTypes.object,
  bodyAttributes: PropTypes.object,
  children: PropTypes.node,
};

SEO.defaultProps = {
  title: null,
  desc: null,
  banner: null,
  pathname: "",
};

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        title
        description
        siteUrl
        banner
        twitter
      }
    }
  }
`;
