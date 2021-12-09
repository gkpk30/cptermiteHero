import React, {useState} from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ProfilePic from '../components/ProfilePic'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import BottomContent from '../components/BottomContent';
import Divider from '@mui/material/Divider'

export default function Contact() {

    const propertyTypes =['residential', 'commercial', 'HOA', 'Construction', 'Other']
   
    const [propertyType, setPropertyType] = useState('')

    const handlePropertyChoice = (event) => {
      setPropertyType(event.target.value);
    };
    return (
        <Box >
                <Container maxWidth="md">
                <Typography color="text.primary" elevation={3}   variant="h5">
                    Find out if your home or business has a termite infestation. Call us for a FREE inspection.
                    </Typography>
                    <Typography color="text.primary" sx={{my:3}} variant="h5">
                    WE WELCOME: Residential | Commercial | Property Management| Homeowners Associations | Senior Homes | Construction Companies
                    </Typography>
                    <Box
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
                helperText="Incorrect entry." 
            />
            <TextField 
                required 
                fullWidth  
                id="outlined-basic" 
                label="Zip Code" 
                variant="outlined" 
                helperText="Incorrect entry." 
            />
            
            </Box>
                    
               
                <Box sx={{ minWidth: 120, maxWidth:500, margin:'auto' }}>
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
        </Box>
        <Divider sx={{my:4}} />
        <ProfilePic/>
        <BottomContent/>
        </Container>
    </Box>
    )
}
