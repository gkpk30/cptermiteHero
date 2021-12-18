import * as React from 'react';
import ProfilePic from '../components/ProfilePic'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import Timeline from '../components/Timeline';

// const ProfilePic = ()=> (

//   <>
//     <Box width="90%" height="400px" position="relative" margin='auto'>
//           <StaticImage src='../images/warranty.png' alt="warranty for two years" placeholder="blurred"   
//             style={{
//               zIndex:'2', 
//               position:"absolute",
//               right:'0',
//               top:'-10%',
//               width:'40%',
//             }}
//           />
//         <StaticImage src= "../images/housecaplarge_mb.png"  alt="captain termite"  eager="true" placeholder="blurred" objectPosition="left"  objectFit="cover" 
//             style={{
//               height:'100%', 
//               width: '100%', 
//               zIndex:'1',
//               position: 'absolute',
//           }} 
//         />
//         </Box>
//         <Box width="90%" margin='auto' >
//           <Typography variant="body2">
//             Our owner is a veteran of the United States Navy and is proud to support all vetarans.  If you are a veteran or have a United States service member in your family you will receive a $100 discount on Captain Termite Control services.
//           </Typography>
//         </Box>
//       </>

// )

export default function About() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }} >
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
    </Container>
  );
}
