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
import InfoGraph from '../../components/InfoGraph'
import Chart_Pie from '../../components/Chart_Pie'







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
             
                <Container  maxWidth="lg" >
                  <CallToAction 
                    pageTitle='Treatment and Services'
                    // main='We have you covered at Captain Termite Control'
                    main = 'Inspection, Prevention and Control'
                    subText='We believe in alternative treatments that fit your lifestyle and that are cost effective. Most structures that have infestations can be controlled without the use of highly toxic chemicals.'
                    button1='About Us'
                    button2= 'Contact Us'
                    chart = 'infoChart'
                  />
                  
              
                
                <Container maxWidth="md"  >
                  <Box display="flex" gap={2} mt={{xs:6, sm: 8, md:12, lg: 22}}  mb={8} sx={{
                            
                            flexDirection: {xs: 'column ', sm: 'row'},
                            justifyContent: 'space-between'
                            
                        }} 
                        >
                    <Box sx={{flex:'4'}}>
                        <Typography variant='caption text' component='h4' mb={6} color="text.orange" fontWeight='500'  > 
                          For Homeowners 
                        </Typography>
                        <Typography variant='h4' 
                              component='h2' 
                              fontWeight='500' 
                              letterSpacing='-.02em' 
                              >
                                We use the best equipment and products available today. We offer a variety of localized treatment options.
                                
                        </Typography>
                        <Typography variant='body1' color="text.primary" mt={3}>
                        Successful termite management requires early detection, special skills and knowledge, including a working knowledge of building construction.
                        </Typography>
                    </Box >
                    
                    <Box sx={{flex:'3',  pt: 8}} >
                      <Box 
                        // sx={{display: {xs: 'none', sm: 'block'}}}
                       >
                       <Box maxWidth="100%"  mb={4}>
                        <StaticImage 
                          style={{width:'100%', height:'100%'}}  
                          src="../../images/house.png" 
                          alt="Free Estimate, Treatment Options, Warranty and Annual Inspection" 
                          layout='fullWidth' 
                        />
                        </Box>
                      
                        <Chart_Pie/>
                      </Box>
                      
                    </Box>

                  </Box >
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

                      <BottomContent/>
                    </Container>
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

