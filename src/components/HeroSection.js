import React, {useState, useEffect }from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import {Link} from 'gatsby'
// import {makeStyles} from '@mui/styles'
import Paper from '@mui/material/Paper'
// import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Social from './Social'
import Icon from '@mui/material/Icon';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Hidden from '@mui/material/Hidden'
import Zoom from '@mui/material/Zoom';
import InfoGlass from './InfoGlass'
import { StaticImage } from 'gatsby-plugin-image'


const heroSection ={
                height: '95vh',
                // height: '1000px',
                
                position: 'relative',
                // maxHeight: {
                //     xs: '90%', // theme.breakpoints.up('xs')
                //     sm: '80%', // theme.breakpoints.up('sm')
                //     md: '60%', // theme.breakpoints.up('md')
                //     lg: '50%', // theme.breakpoints.up('lg')
                //     xl: '40%', // theme.breakpoints.up('xl')
                // }
                // backgroundImage: "url(../../imageMesh.jpg)",
                // backgroundSize: 'cover',
                // backgroundPosition: 'top'
}
const heroContainer = {
    height: '100%',
}

export default function HeroSection() {
    
    const [shouldShow, setShouldShow] = useState(false)
    useEffect(() => setShouldShow(true),[])

   

    return (
        <Paper 
        sx={heroSection}
        square={true} 
        >
            <StaticImage src= "../images/imageMesh.jpg" alt=""  eager="true" placeholder="blurred" 
                // objectFit="cover" 
                layout='fullWidth' 
                style={{
                        height:'100%', 
                        width: '100%', 
                        position:"absolute", 
                        zIndex: '1', 
                    }}  
            />
            <Container maxWidth="md"sx={heroContainer} >
                <Grid 
                        container 
                        alignItems="center" 
                        justifyContent="space-between"
                        sx={{height:'100%', position: 'relative', zIndex: '100'}}
                        >
                   <Grid item xs={12}  >
                    <InfoGlass/>
                   </Grid>
                    <Zoom in={shouldShow}>
                        <Grid item sm={8} xs={12}>
                            <Typography fontWeight="700" component="h1" variant="h3" sx={{lineHeight: '1'}} >
                                Effective Termite Control Solutions
                            </Typography>
                            <Typography mt={2} fontWeight="500" variant="h5" sx={{fontStyle: 'italic', lineHeight: '1.25'}}  >
                                We believe in fundamental honesty. It's the keystone of our business.
                            </Typography>
                            <Box my={8}>
                                <Stack direction="row"   spacing={2}>
                                    <Button component={Link} to="/about" variant="contained" sx={{borderRadius: 4}} color='primary' endIcon={<ArrowForwardIosIcon/>}>Learn More</Button>
                                    <Button component={Link} to="/contact"variant="contained" sx={{borderRadius: 4,}} color='third' endIcon={<ArrowForwardIosIcon/>}>Contact Us</Button>
                                </Stack>
                            </Box>
                        </Grid>
                    </Zoom>
                    {/* <Hidden smDown> */}
                        
                            <Grid item>
                                <Social/>
                            </Grid>
                       
                    {/* </Hidden> */}
                   
                </Grid>
                
            </Container>
        </Paper>
    )
}


