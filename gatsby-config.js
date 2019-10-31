module.exports = {
  siteMetadata: {
    title: `Adrien Denat, front-end developer freelance`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
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
  ],
};
