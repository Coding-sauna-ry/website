const config = {
  siteMetadata: {
    title: `Coding sauna`,
    siteUrl: `https://codingsauna.fi`,
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-datocms",
    //   options: {
    //     apiToken: "",
    //   },
    // },
    "gatsby-plugin-postcss",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

module.exports = config;
