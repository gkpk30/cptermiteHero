import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'
import InfoGlass from '../components/InfoGlass'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function notFound() {
    return (

        <Container maxWidth="md" >
           <Box mt={{xs:4, sm: 6, md:10}} minHeight="100vh">
               <InfoGlass/>
               <StaticImage src= "../images/website_logo_transparent_600X400.png" alt="captain termite control logo"  eager="true" placeholder="TRACED_SVG" 
                                    // objectFit="cover" 
                                    layout='fullWidth' 
                                    style={{
                                            
                                            width: '35%',  
                                            zIndex: '1', 
                                        }}  
                                />
               <Typography variant='caption text' component='h2' mb={6} color="text.lightBlue" fontWeight='500'>
                    404
               </Typography>
               <Typography variant="h4" component="h1" gutterBottom fontWeight='500'>
                    Sorry, Looks like we sent you the wrong way. Let us help you find your way back
               </Typography>
               <Box my={8}>
                    <Stack direction="row"   spacing={2}>
                        <Button component={Link} to="/treatments" variant="contained" sx={{borderRadius: 4}} color='primary' endIcon={<ArrowForwardIosIcon/>}>Learn More</Button>
                        <Button component={Link} to="/contact"variant="contained" sx={{borderRadius: 4,}} color='third' endIcon={<ArrowForwardIosIcon/>}>Contact Us</Button>
                    </Stack>
                </Box>

           </Box>
        </Container>
    )
}
