import React from 'react'
import { graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import CustomCard from '../../components/Card'





export default function Index({data}) {
    console.log(data)
    const treatments = data.allMarkdownRemark.nodes 

    console.log('Treatments: ', treatments)
    // console.log('Excerpts: ', treatments.excerptAst.children[2].children[0].value)
    console.table(treatments)
    // console.log('excerpts:', treatments.excerptAst.children[2].children[0].value)
    // console.log('excerpts:', treatments.excerptAst)

   
    return (
        
            <Box  mb={3}>
                <Box maxWidth="100%"  mb={4}>
                    <StaticImage 
                      // style={{width:'100%', height:'100%'}}  
                      src="../../images/house.png" 
                      alt="Free Estimate, Treatment Options, Warranty and Annual Inspection" 
                      layout='fullWidth' 
                    />
                </Box>
             
                <Container  maxWidth="lg" >
                  <Typography variant='h4' component='h1'>
                        We have you covered at Captain Termite Control
                  </Typography>
                  <Typography variant="h5" component="h2">We want your Home or Business to grow</Typography>
               

                    
                    <Box mt={4}>
                        <Grid container  spacing={2} justifyContent='center'   direction='row'>
                            {treatments.map(treatment=> (
                                <Grid item key={treatment.id}>
                                    <CustomCard treatment={treatment}
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
                    
                </Container>
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
//               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
//             }
//           }
//         }
//         excerpt(pruneLength: 115, format: HTML)
//         timeToRead
//         id
//       }
//     }
//   }
// `

export const query = graphql`
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
`
// export const query = graphql`
//   {
//     allMarkdownRemark {
//       nodes {
//         frontmatter {
//           slug
//           title
//           thumb {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, height: 210)
//               resize(fit: COVER)
//             }
//           }
//         }
//         timeToRead
//         id
//         excerptAst(truncate: false)
//       }
//     }
//   }
// `

