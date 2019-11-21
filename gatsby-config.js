module.exports = {
  siteMetadata: {
    title: "Adrien Denat - Freelance Frontend Engineer - London",
    description:
      "Freelance Frontend Developer based in London. JavaScript, React, Redux, GraphQL, TypeScript, ...",
    siteUrl: "https://adriendenat.com",
    banner: "/open-graph.jpg",
    twitter: "adriendenat",
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-44112811-3",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adrien Denat`,
        short_name: `A.Denat`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#FF302B`,
        display: `minimal-ui`,
        icon: `static/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
  ],
};
