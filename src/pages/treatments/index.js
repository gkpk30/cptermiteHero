import React from 'react'
import { graphql, Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CallToAction from '../../components/CallToAction';
import CustomCard from '../../components/Card'
import BottomContent from '../../components/BottomContent'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';





export default function Index({data}) {
    console.log(data)
    const treatments = data.allMarkdownRemark.nodes 

    console.log('Treatments: ', treatments)
    // console.log('Excerpts: ', treatments.excerptAst.children[2].children[0].value)
    console.table(treatments)
    // console.log('excerpts:', treatments.excerptAst.children[2].children[0].value)
    // console.log('excerpts:', treatments.excerptAst)

   
    return (
        
            <Box mt={{xs:4, sm: 6, md:10}}  mb={3}>
              {/* ***********************This box below is an optional banner**************************** */}
                {/* <Box maxWidth="100%"  mb={4}>
                    <StaticImage 
                      // style={{width:'100%', height:'100%'}}  
                      src="../../images/house.png" 
                      alt="Free Estimate, Treatment Options, Warranty and Annual Inspection" 
                      layout='fullWidth' 
                    />
                </Box> */}
                {/* *********************************************************************************** */}
             
                <Container  maxWidth="md" >
                  <CallToAction 
                    pageTitle='Treatment and Services'
                    main='We have you covered at Captain Termite Control'
                    subText='We believe in alternative treatments that fit your lifestyle and that are cost effective. Most structures that have infestations can be controlled without the use of highly toxic chemicals.'
                    button1='About Us'
                    button2= 'Contact Us'
                  />
                  
               

                    
                    <Box my={6}>
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

                    <BottomContent/>
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

