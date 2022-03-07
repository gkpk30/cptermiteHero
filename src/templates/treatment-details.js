import React from 'react'
// import {GatsbyImage} from 'gatsby-plugin-image/gatsby-image'
import {graphql} from 'gatsby'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import CustomCard from '../components/Card'
import BottomContent from '../components/BottomContent'



export default function TreatmentDetails({data}) {
    const {html} = data.markdownRemark
    console.log(html)
    // const {title} = data.markdownRemark.frontmatter
    const treatments = data.allMarkdownRemark.nodes 
    const slugName= data.allMarkdownRemark.nodes[0].frontmatter.slug
    console.log('slugName: ', slugName)

    return (
        <Container maxWidth="md">
        
            <Typography component="span" dangerouslySetInnerHTML={{__html:html}}/>
            
            <Divider/>

            <BottomContent/>


            <Box mt={4}>
                    <Typography variant='h4' component='h1'>
                        We have you covered at Captain Termite Control
                  </Typography>
                  <Typography variant="h5" component="h3">Check out more services we have to offer</Typography>
                        
                        <Grid sx={{mt:4}} container  spacing={2} justifyContent='center'   direction='row'>
                            {treatments.map(treatment=> (
                                <Grid item key={treatment.id}>
                                    <CustomCard treatment={treatment}
                                        maxWidth={245}
                                        title={treatment.frontmatter.title}
                                        slug={'../' + treatment.frontmatter.slug}
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
    )
}

// export const query = graphql`
//     query TreatmentDetails($slug: String) {
//        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
//             html
//             frontmatter{
//                 title
//                 slug
//             }
//         }
//     }
    

// `

export const query = graphql`
query TreatmentDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        slug
      }
    }
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
          thumb {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 345
                height: 210
              )
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

