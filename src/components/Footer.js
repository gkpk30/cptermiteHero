import React from 'react'
import { graphql, useStaticQuery} from "gatsby"
import Container from '@mui/material/Container'
import Copyright from './Copyright'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Link from '../components/Link';
import Typography from '@mui/material/Typography'
import Social from './Social'

export default function Footer() {
       
    const data = useStaticQuery(graphql`
        {
          allMarkdownRemark {
            nodes {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      `)

  const treatmentLinks = data.allMarkdownRemark.nodes
    return (
        <Box sx={{backgroundColor:"primary.main", color: 'text.secondary', minHeight: '5vh'}}  >
            <Container maxWidth="lg" sx={{paddingTop: 6}}>
                <Box display="flex" justifyContent='space-between'   sx={{flexDirection:{xs: 'column ', md: 'row'}, gap: 3}}>
                    
                    <Box flex='4' sx={{paddingRight: 5}} >
                        <Typography color='text.main' >Captain Termite Control</Typography>
                        <Typography mt={2} > Providing the highest level of service at affordable prices
                            Whether it's your home or business we can protect your investment by ridding your property of unwanted termites.
                        </Typography>

                        <Social isFooter = 'row' color="third"/>
                    </Box>
                    <Box flex= '6' display="flex"  flexWrap="wrap" 
                        sx={{ gap: 4}}
                       
                    >
                        <Box flex='2'>
                        <Link to='/treatments'><Typography color='text.main'  >Treatments</Typography></Link>
                            <ul style={{listStyle: 'none', paddingLeft: '0'}}>
                                {treatmentLinks.map((link) => {
                                    return(
                                        <li key={link.frontmatter.title}>
                                            <Link to={`/treatments/${link.frontmatter.slug}`} sx={{color: 'text.secondary', fontWeight: 'medium', fontSize:'.72rem'}}>
                                                {link.frontmatter.title}
                                            </Link>
                                        </li>
                                        )  
                                })}
                            </ul>
                    
                        </Box>
                        <Box flex='2'>
                        <Link to="/termiteinfo" ><Typography color='text.main' > Termite Info</Typography></Link>
                        
                        <ul style={{listStyle: 'none', paddingLeft: '0'}}>
                            <li>
                                <Link to="/termiteinfo" sx={{color: 'text.secondary', fontWeight: 'medium', fontSize:'.72rem'}}>
                                
                                            Drywood
                                    
                                </Link>
                            </li>
                            <li>
                                <Link to="/termiteinfo" sx={{color: 'text.secondary', fontWeight: 'medium', fontSize:'.72rem'}}>
                                
                                            Subterranean
                                    
                                </Link>
                            </li>
                            
                        </ul>
                        </Box>
                        <Box flex='2'>
                            <Link to="/contact"><Typography color='text.main'  >Contact Us</Typography></Link>
                                <ul style={{listStyle: 'none', paddingLeft: '0'}}>
                                    <li style={{marginBottom: '4px'}}>
                                        <Link  to="/contact" sx={{color: 'text.secondary', fontWeight: 'medium', fontSize:'.72rem'}} >
                                            
                                                Contact Our Team
                                            
                                        </Link>
                                    </li>
                                    <li>
                                        <Typography gutterBottom sx={{color: 'text.secondary', fontWeight: 'medium', fontSize:'.72rem'}}>
                                            818-822-6782
                                        </Typography>
                                        
                                    </li>
                                    <li>
                                        <Typography gutterBottom sx={{color: 'text.secondary', fontWeight: 'medium', fontSize:'.72rem'}}>
                                            CaptainTermiteControlInc@gmail.com
                                        </Typography>
                                    </li>
                                </ul>
                        
                        </Box>
                    </Box>
                </Box>
                <Divider  sx={{borderColor: 'text.secondary', my:4}}/>
                <Copyright siteName = {'salient dynamics'}/>
           </Container>
        </Box>
    )
}


