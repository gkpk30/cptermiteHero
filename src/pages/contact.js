import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import ProfilePic from '../components/ProfilePic'
import Typography from '@mui/material/Typography';
import BottomContent from '../components/BottomContent';
import Divider from '@mui/material/Divider'
// import Form from '../components/Form'
// import ContactForm from '../components/ContactForm'
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

                    {/* <Form/> */}

                    {/* <ContactForm/> */}

                    <ContactForm1/>

                    
                    
                    {/* <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField 
                required 
                fullWidth  
                id="outlined-basic" 
                label="Name" 
                variant="outlined" 
                // helperText="Incorrect entry." 
            />
            <TextField 
                required 
                fullWidth  
                id="outlined-basic" 
                label="Zip Code" 
                variant="outlined" 
                // helperText="Incorrect entry." 
            />
            
            </Box> */}
                    
               
                {/* <Box  sx={{ minWidth: 120, maxWidth:500, m:1 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Your Property Type</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={propertyType}
            label="Your Property Type"
            onChange={handlePropertyChoice}
            >
                {propertyTypes.map((type) => (
                    <MenuItem key={type} value={type}>{type}</MenuItem>
                ))
                }
            
            </Select>
        </FormControl>
        </Box> */}
        <Divider sx={{my:4}} />
        <ProfilePic/>
        <BottomContent/>
        </Container>
    </Box>
    )
}
