import React from 'react'
import { graphql, useStaticQuery} from "gatsby"
import * as styles from '../styles/header.module.css'
import Link from '../components/Link';
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { StaticImage } from 'gatsby-plugin-image'
import { padding } from '@mui/system';
import Button from '@mui/material/Button'


const imageStyle= {
  opacity: '.5',
}

function Content() {
  
    
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
        <Box sx={{ flexGrow: 1 }} sx={{width: '571px', height: 'auto'}} >
          <Grid container spacing={2}>
              <Grid item xs={3}>
                <Typography variant="h6" px={1}>Treatments</Typography>
                <Divider sx={{mb:1}}/>
              {treatmentLinks.map((link, index, array) => 
                                                    <Box key={link.frontmatter.title} >
                                                        {index < (array.length - 1) &&
                                                        <Box  >
                                                            <MenuItem sx={{fontSize:'.68rem'}} style={{padding: '0px 16px'}} component={Link} to={`/treatments/${link.frontmatter.slug}`}>
                                                                {link.frontmatter.title}
                                                            
                                                            </MenuItem>
                                                            <Divider sx={{my: 1}}/>
                                                        </Box>
                                                        }
                                                        {index === (array.length - 1) &&
                                                             <Box >
                                                             <MenuItem sx={{fontSize:'.68rem'}} style={{padding: '0px 16px 8px'}}  component={Link} to={`/treatments/${link.frontmatter.slug}`}>
                                                                 {link.frontmatter.title}
                                                             </MenuItem>
                                                         </Box> 
                                                        }
                                                        
                                                        
                                                       
                                                    </Box>
                                                )}
              </Grid>
              <Grid item xs={3}>
               <Typography variant="h6">Termites</Typography>
               <Divider/>
               <ListItemButton component={Link} to={'/termiteinfo'}>Drywood </ListItemButton>
               <ListItemButton component={Link}to={'/termiteinfo'}>Subterranean </ListItemButton>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Do you have Termites?</Typography>  
                <Divider/> 
                <Box position='relative'   >
                  <StaticImage 
                          src= "../images/plain-house.jpg"  
                          alt="captain termite"  
                          eager="true" 
                          placeholder="blurred" 
                          layout='constrained'
                          width={347}
                          height={290}
                          backgroundColor='#3e2730'
                          // style={{opacity:'.4'}} styles outer wrapper  gatsby-image-wrapper
                          //imgClassName = {imageStyle} //comes back as class = {object Object}
                            //imgClassName = {'opacity: .4'} //comes back as a class = 'opacity: .4'
                          imgClassName = {styles.img} //works but had to use !important
                            //className ={styles.img} appliess to wrapper
                          //imgStyle={{opacity:'.4'}} //inline style on img element ? doesn't work
                          //imgStyle={styles.img} //inline style doesn;t work
                          //opacity = {.4}

                          // mix-blend-mode: multiply; 
                                                     
                                              
                      />
                  <Box style={{position: 'absolute', top: '115px', left: '25px', zIndex: 2, }}>
                    <Button component={Link} to={'/about'} variant="outlined" color="third" size="large"  >Why Us</Button>
                  </Box>
                </Box>  
              </Grid>
            </Grid>
        </Box>
    )
}




export default function TreatmentDropDownMenuLinks() { 
  return(
    
      <Content/>
    
  )
}
