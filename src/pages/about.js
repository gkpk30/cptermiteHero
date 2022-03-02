import * as React from 'react';
import ProfilePic from '../components/ProfilePic'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import Timeline from '../components/Timeline';
import BottomContent from '../components/BottomContent';



export default function About() {
  return (
    <Container maxWidth="md">
      <Box mt={{xs:4, sm: 6, md:10}} >
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
  );
}
