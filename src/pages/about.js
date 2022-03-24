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

export default function About() {
  const [shouldShow, setShouldShow] = useState(false)
    useEffect(() => setShouldShow(true),[])

  return (
    <Fade in={shouldShow} style={{ transitionDelay: shouldShow ? '250ms' : '0ms' }}>
      <div style={{display:'grid'}}>
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
          >
            {/* place content here */}
            <Container maxWidth="md">
        <Box mt={{xs:4, sm: 6, md:10}} >
        <Typography variant='caption text' component='h2' mb={6} color="text.lightBlue" fontWeight='500'  > Our Company </Typography>
          <Typography variant="h4" component="h1" gutterBottom>
          Our Mission is to provide the highest level of service at affordable prices
          </Typography>
          <Typography variant="body1">
            Whether it's your home or business we can protect your investment by ridding your property of unwanted termites.
          </Typography>
          <Typography variant="body1">
          Captain Termite Control INC. is a family owned and operated company. We have over 25 years of experience providing effective and preventative termite treatments in Los Angeles, California. We believe in fundamental honesty. It's the keystone of our business.
          </Typography>
          <Link to="/" 
            >
                Go to the main page
            </Link>
          <ProTip />
          <Copyright />
        </Box>

        <ProfilePic/>
        
        
        
        <Timeline/>
        <BottomContent/>
      </Container>
          </div>
      </div>
    </Fade>
  )
}
