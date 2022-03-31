import React,  {useState, useEffect}  from 'react'
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
import Fade from '@mui/material/Fade';




export default function TreatmentDetails({data}) {

  const [shouldShow, setShouldShow] = useState(false)
  useEffect(() => setShouldShow(true),[])
    const {html} = data.markdownRemark
    // console.log(html)
    const {title} = data.markdownRemark.frontmatter
    const treatments = data.allMarkdownRemark.nodes 
    const slugName= data.allMarkdownRemark.nodes[0].frontmatter.slug
    
    
    return (
      <Fade in={shouldShow} style={{ transitionDelay: shouldShow ? '250ms' : '0ms' }}>
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
                  
                  <Divider sx={{mt: 4}}/>

                  <BottomContent/>


                  <Box mt={{xs:10, sm: 12, md:16, lg: 22}}>
                      <Typography variant='caption text' component='h4' mb={6} color="text.yellow" fontWeight='500'  > 
                        Termite Control Options 
                      </Typography>
                      <Typography 
                            variant='h4' 
                            component='h2' 
                            fontWeight='500' 
                            letterSpacing='-.02em' 
                            sx={{maxWidth: {md: '70%'}}}
                            >
                              We use the best equipment and products available today. We offer a variety of localized treatment options.
                              
                      </Typography>
                      <Typography variant='body1' color="text.primary" mt={3} gutterBottom >
                      Successful termite management requires early detection, special skills and knowledge, including a working knowledge of building construction.
                      </Typography>
                        <Grid container mt={6}  spacing={2} justifyContent='center'   direction='row'>
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
            </Container>
            </Box>
        </Fade>
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

