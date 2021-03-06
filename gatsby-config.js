module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    author: {
      name: `Paridhi Bakshi`,
      summary: `who lives and works in Impetus Indore.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://competent-khorana-42a506.netlify.app/`,
    social: {
      twitter: `ParidhiBakshi`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'https://jsonplaceholder.typicode.com/posts',
          'https://jsonplaceholder.typicode.com/users',
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  ],
}
