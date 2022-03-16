import React, {UseEffect, UseState} from 'react'
// import {GatsbyImage} from 'gatsby-plugin-image/gatsby-image'
import {graphql} from 'gatsby'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import CustomCard from '../components/Card'
import BottomContent from '../components/BottomContent'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '../components/Link'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';




export default function TreatmentDetails({data}) {


    const {html} = data.markdownRemark
    // console.log(html)
    const {title} = data.markdownRemark.frontmatter
    const treatments = data.allMarkdownRemark.nodes 
    const slugName= data.allMarkdownRemark.nodes[0].frontmatter.slug
    
    
    return (
      <Box mt={{xs:4, sm: 6, md:10}}  mb={3}>
        <Container maxWidth="md">
        <Breadcrumbs aria-label="breadcrumb" color="text.lightBlue">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', fontSize: '.88rem' }}
          color="text.lightBlue"
          to="/"

        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          HOME
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', fontSize: '.88rem' }}
          color="text.lightBlue"
          to="/treatments"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          SERVICES
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center', fontSize: '.88rem' }}
          color="text.lightBlue"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {title}
        </Typography>
      </Breadcrumbs>
            {/* <Typography variant='caption text' component='h2' mb={6} color="text.lightBlue" fontWeight='500'  > {title} </Typography> */}
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
        </Box>
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

