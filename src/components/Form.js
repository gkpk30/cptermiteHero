import React ,{useState} from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function Form() {
    
    const propertyTypes =['residential', 'commercial', 'HOA', 'Construction', 'Other']
   
    const [propertyType, setPropertyType] = useState('')
   
    const handlePropertyChoice = (event) => {
      setPropertyType(event.target.value);
    };

    
  
  return (
      
            <Paper>
            <Box
          component="form"
          
          noValidate
          autoComplete="off"
      >
          <TextField
              required
              fullWidth
              id="outlined-basic"
              label="Name"
              variant="outlined" />
          <TextField
              required
              fullWidth
              id="outlined-basic"
              label="Zip Code"
              variant="outlined" />

      </Box>
      <Box sx={{ minWidth: 120, maxWidth: 500, m: 1 }}>
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
                      ))}

                  </Select>
              </FormControl>
          </Box>
          </Paper> 
  );
}