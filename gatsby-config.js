module.exports = {
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-react-helmet`,
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    `gatsby-plugin-mui-emotion`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {resolve: `gatsby-source-filesystem`,
    options: {
      name: `projects`,
      path: `${__dirname}/src/projects/`,
      }, 
    },

  ],
  siteMetadata: {
    title: 'Captain Termite Control | Los Angeles Termite Control Company',
    description: "Captain Termite Control INC. is a family owned and operated company providing effective and preventative termite treatments in Los Angeles, California. Our mission is to provide the highest level of service at affordable prices. Whether it's your home or business we can protect your investment by ridding your property of unwanted termites.",
    googleSiteVerification: "M6oHkqrPTAoH48Kxdx1CPoMdT_FENFQhwqrvac6BQj0",
    keywords: "Termite Inspection, Free Inspection, Termites, Los Angeles County, Orange County"
  },
  flags: {
    PARALLEL_QUERY_RUNNING: true
  }
};
