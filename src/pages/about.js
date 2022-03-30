import React,  {useState, useEffect}  from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import ProfilePic from '../components/ProfilePic'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import Timeline from '../components/Timeline';
import BottomContent from '../components/BottomContent';
import Fade from '@mui/material/Fade';
import CallToAction from '../components/CallToAction'

export default function About() {
  const [shouldShow, setShouldShow] = useState(false)
    useEffect(() => setShouldShow(true),[])

  return (
    <Fade in={shouldShow} style={{ transitionDelay: shouldShow ? '250ms' : '0ms' }}>
      
      {/* <div style={{display:'grid'}}>
          <StaticImage 
              style={{
                  gridArea:"1/1",
              }}
              layout="fullWidth"
              src={"../images/imageMesh.jpg" }
              alt=""  
              eager="true" 
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              />

          <div
              style={{
                  gridArea:"1/1",
                  position: "relative",
                  placeItems: "center",
                  display: "grid",   
              }}
          > */}
            {/* place content here */}
            <Container maxWidth="md">
        <Box mt={{xs:4, sm: 6, md:10}} >
         
        <Typography variant='caption text' component='h2' mb={6} color="text.lightBlue" fontWeight='500'  > Our Company </Typography>
          <Box sx={{maxWidth: {md:"70%"}}} >
            <Typography variant="h4" component="h1" gutterBottom fontWeight='500'>
            Providing the highest level of service at affordable prices 
            </Typography>
            <Typography variant="body1" gutterBottom>
            Whether it's your home or business we can protect your investment by ridding your property of unwanted termites.
            </Typography>
          </Box>
          
          <Box display="flex"  sx={{flexDirection: { xs: 'column', sm: 'row'}, mt: {xs:6, sm: 10, md:12}}}>
            <Box flex='3'>
                <Typography variant="h5" component="h2" gutterBottom color="text.lightBlue" fontWeight='500' mt={10}>
                  Family owned and operated
                </Typography>
                <Typography variant="body1">
                 We have over 25 years of experience providing effective and preventative termite treatments in Los Angeles, California. We believe in fundamental honesty. It's the keystone of our business.
                </Typography>
            </Box>
            <Box flex='4' sx={{ pt:{xs: 5, sm :6, md: 7}}}>
              <ProfilePic/>
            </Box>
          </Box>
    
        </Box>
          <Box mt={{xs:10, sm: 12, md:16, lg: 22}}  mb={8}>
            <Timeline/>
            <ProTip />
            <BottomContent/>
          </Box>
        
      </Container>
          {/* </div>
      </div> */}
    </Fade>
  )
}
