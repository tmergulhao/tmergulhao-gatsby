module.exports = {
  siteMetadata: {
    title: 'tmergulhao',
    subtitle: "Tiago Mergulhão's website and portfolio",
    description: 'Projects, tips, tricks and conventions about interaction design and programming',
    keywords: 'design, interaction, programming, swift, d3, sketch app, figma, plugin, ios, development',
    twitterHandle: 'tmergulhao',
    author: `@tmergulhao`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-typescript',
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
  ],
}
