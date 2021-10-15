import React, {useState} from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { StaticImage } from 'gatsby-plugin-image'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Contact() {

    const propertyTypes =['residential', 'commercial', 'HOA', 'Construction', 'Other']
   
    const [propertyType, setPropertyType] = useState('')

    const handlePropertyChoice = (event) => {
      setPropertyType(event.target.value);
    };
    return (
        <Box sx={{height:'90vh'}}>
                <Container maxWidth="md">
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
                    <div>
                        Contact Page
                    </div>
                </Container>
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
    </Box>
    )
}
