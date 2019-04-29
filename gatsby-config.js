module.exports = {
  siteMetadata: {
    title: "Travers Pinkerton",
    description: "Web Dev and then some",
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
          name: 'pages',
          path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      }
    }
  ],
}
