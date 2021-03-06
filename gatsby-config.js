module.exports = {
  siteMetadata: {
    title: "Blog Site",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogs",
        path: `${__dirname}/src/blogs`,
      },
      __key: "pages",
    },
  ],
};
