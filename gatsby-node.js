const path = require(`path`)

exports.createPages = async ({graphql, actions}) => {

    const {data} = await graphql(`
    query Treatments {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `)
      data.allMarkdownRemark.nodes.forEach(node => {
          actions.createPage({
              path: '/treatments/' + node.frontmatter.slug,
              component: path.resolve('./src/templates/treatment-details.js'),
              context: {slug: node.frontmatter.slug}
          })
      })

}

