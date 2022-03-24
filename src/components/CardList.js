import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { GatsbyImage } from 'gatsby-plugin-image'


export default function CardList() {
    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            title
            thumb {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, height: 210, width: 345)
              }
            }
          }
          timeToRead
          id
          excerptAst(pruneLength: 100)
        }
      }
    }
  `)
    console.log(data)
    const treatments = data.allMarkdownRemark.nodes 

    console.log('Treatments from Cardlist.js: ', treatments)

    return(
        <Box mt={{xs:4, sm: 6, md:10, lg: 22}}>
                          <Grid container  spacing={2} justifyContent='space-evenly'   direction='row'>
                              {treatments.map(treatment=> (
                                  <Grid item key={treatment.id}>
                                      <CustomCard treatment={treatment}
                                          maxWidth={245}
                                          title={treatment.frontmatter.title}
                                          slug={treatment.frontmatter.slug}
                                          excerpt={treatment.excerptAst.children[2].children[0].value}
                                          timeToRead={treatment.timeToRead}
                                          thumbnail={treatment.thumb}
                                          thumbImage={treatment.frontmatter.thumb.childImageSharp.gatsbyImageData}
                                      />
                                  </Grid>
                              ))}    
                          </Grid>
                      </Box>
    )
}


// export const query = graphql`
//   {
//     allMarkdownRemark {
//       nodes {
//         frontmatter {
//           slug
//           title
//           thumb {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, height: 210, width: 345)
//             }
//           }
//         }
//         timeToRead
//         id
//         excerptAst(pruneLength: 100)
//       }
//     }
//   }
// `