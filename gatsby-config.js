if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
module.exports = {
  siteMetadata: {
    title: 'tmergulhao',
    subtitle: "Tiago Mergulhão's website and portfolio",
    description: 'Projects, tips, tricks and conventions about interaction design and programming',
    keywords: 'design, interaction, programming, swift, d3, sketch app, figma, plugin, ios, development',
    twitterHandle: 'tmergulhao'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#E5E5E5',
        theme_color: '#1EAED6',
        display: 'minimal-ui',
        icon: 'static/favicon.png',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.spaceId,
        accessToken: process.env.accessToken,
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
