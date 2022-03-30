import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import ProfilePic from '../components/ProfilePic'
import Typography from '@mui/material/Typography';
import BottomContent from '../components/BottomContent';
import Divider from '@mui/material/Divider'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Stack from '@mui/material/Stack';
import Fade from '@mui/material/Fade';

import ContactForm1 from '../components/ContactForm1'





export default function Contact() {

    // const propertyTypes =['residential', 'commercial', 'HOA', 'Construction', 'Other']
   
    // const [propertyType, setPropertyType] = useState('')

    // const handlePropertyChoice = (event) => {
    //   setPropertyType(event.target.value);
    // };

    const [shouldShow, setShouldShow] = useState(false)
    useEffect(() => setShouldShow(true),[])

    return (
        <Fade in={shouldShow} style={{ transitionDelay: shouldShow ? '250ms' : '0ms' }}>
            <Box mt={{xs:4, sm: 6, md:10}} >
                    <Container maxWidth="md">
                        <Typography color="text.primary" elevation={3} component="h1" textAlign="center"   variant="h4" fontWeight='500' >Contact our team</Typography>
                        <Box 
                            mt={{xs:4, sm: 6, md:10}} 
                            display='flex'  
                            sx={{
                                flexDirection: {xs: 'column-reverse ', sm: 'row'}
                                
                            }} 
                            justifyContent="space-between" 
                            >
                            <Box sx={{flex: '3'}}>
                                <ContactForm1 />
                            </Box>

                            <Stack spacing={3} sx={{flex: '2'}} mb={2} pt={{xs:4, sm: 6, md:20}} pl={{xs:0, sm: 2, md: 4}}>
                                <Typography color="text.main"  component="h3" variant="h5" >With Captain Termite Control:</Typography>
                                <Box  pl={2}
                                    sx={{
                                        '>div': {pt: 2}
                                    }}
                                >
                                    <Box display="flex"   sx={{flexDirection:'row', flexWrap: 'no-wrap'}} >
                                        <CheckCircleIcon color="icon" fontSize="small" />
                                        <Typography color="text.main" pl={1}  >You can call us for a FREE inspection</Typography>
                                    </Box>
                                    <Box display="flex"   sx={{flexDirection:'row', flexWrap: 'no-wrap'}} >
                                        <CheckCircleIcon color="icon" fontSize="small" />
                                        <Typography color="text.main" pl={1} >Receive annual inspections and warranties</Typography>
                                    </Box>
                                    <Box display="flex"   sx={{flexDirection:'row', flexWrap: 'no-wrap'}} >
                                        <CheckCircleIcon color="icon" fontSize="small" />
                                        <Typography color="text.main" pl={1} >We welcome Residential, Commercial Property Management, Homeowners Associations, Senior Homes and Construction Companies</Typography>
                                    </Box>
                                </Box>
                                
                            </Stack>
                            
                        </Box>
                    
            <Divider sx={{my:4}} />
            
            <BottomContent/>
            </Container>
        </Box>
    </Fade>
    )
}
