import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import ProfilePic from '../components/ProfilePic'
import Typography from '@mui/material/Typography';
import BottomContent from '../components/BottomContent';
import Divider from '@mui/material/Divider'

import ContactForm1 from '../components/ContactForm1'





export default function Contact() {

    // const propertyTypes =['residential', 'commercial', 'HOA', 'Construction', 'Other']
   
    // const [propertyType, setPropertyType] = useState('')

    // const handlePropertyChoice = (event) => {
    //   setPropertyType(event.target.value);
    // };
    return (
        <Box mt={{xs:4, sm: 6, md:10}} >
                <Container maxWidth="md">
                <Typography color="text.primary" elevation={3}   variant="h5">
                    Find out if your home or business has a termite infestation. Call us for a FREE inspection.
                    </Typography>
                    <Typography color="text.primary" sx={{my:3}} variant="h5">
                    WE WELCOME: Residential | Commercial | Property Management| Homeowners Associations | Senior Homes | Construction Companies
                    </Typography>

                    <ContactForm1/>
    
        <Divider sx={{my:4}} />
        <ProfilePic/>
        <BottomContent/>
        </Container>
    </Box>
    )
}
