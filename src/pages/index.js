import * as React from 'react';
import HeroSection from '../components/HeroSection';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../components/ProTip';
// import Link from '../components/Link';
import Copyright from '../components/Copyright';
import Paper from '@mui/material/Paper';
import CustomCard from '../components/Card'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import QuiltedImageList from '../components/QuiltedImageList'


export default function Index() {
  return (
 
    <>
      <HeroSection/>
      {/* <Container maxWidth="md">
        <Paper sx={{backgroundColor:"primary.main", height:'auto', p:2}}>
          <Container>
            <Typography color="text.main" elevation={3}   variant="h5">
            Find out if your home or business has a termite infestation. Call us for a FREE inspection.
            </Typography>
            <Typography color="text.main" sx={{my:3}}>
            WE WELCOME: Residential | Commercial | Property Management| Homeowners Associations | Senior Homes | Construction Companies
            </Typography>
          
        <QuiltedImageList/>
        </Container>
        </Paper>
      </Container> */}
      
    </>
  );
}
