import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';

export default function notFound() {
    return (

        <Container maxWidth="md" >
           <Box mt={{xs:4, sm: 6, md:10}} height="100vh">
               <Typography variant='caption text' component='h2' mb={6} color="text.lightBlue" fontWeight='500'>
                    404
               </Typography>
               <Typography variant="h4" component="h1" gutterBottom fontWeight='500'>
                    Sorry, Looks like we sent you the wrong way. Let us help you find your way back
               </Typography>

           </Box>
        </Container>
    )
}
