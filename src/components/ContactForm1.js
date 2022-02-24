import React, {useState} from 'react';
import {useForm} from "react-hook-form"
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function ContactForm1() {

    const propertyTypes =['Residential', 'Commercial', 'HOA', 'Construction', 'Other']
    const [propertyType, setPropertyType] = useState('')
    
   
    const handlePropertyChoice = (event) => {
      setPropertyType(event.target.value);
    };


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    // console.log(errors);
  return (
  
  <Box>
      <Paper sx={{p:3, maxWidth: '600px', margin: 'auto'}} >
        <Typography variant="h5" >Contact Us</Typography>
        <Typography mb={2} gutterBottom color="textSecondary" variant="body2" component="p" >We will keep your information private. Our team will get back to you within 24 hours.</Typography>
        <form onSubmit={handleSubmit(onSubmit)} >
            <Stack spacing={3}>
                <TextField
                required
                label="Name"
                placeholder="Name"
                helperText=""
                {...register("Name", {required: true, maxLength: 80})}
               
                />
                <TextField
                required
                type="email"
                label="email"
                placeholder="Your email address optional"
                {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
               
                />
                <TextField
                type="phone"
                label="phone number"
                placeholder="Phone Number"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                {...register("Phone number", {required: true, minLength: 6, maxLength: 12})}
               
                />
                
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Your Property Type</InputLabel>
                  <Select
                      required
                      value={propertyType}
                      label="Your Property Type"
                      onChange={handlePropertyChoice}
                  >
                      {propertyTypes.map((type) => (
                          <MenuItem key={type} value={type}>{type}</MenuItem>
                      ))}

                  </Select>
              </FormControl>

                <TextField
                label="How Can We Help You?"
                multiline
                rows={4}
                placeholder="How Can We Help You?"
                {...register("Message", {required: false, maxLength: 200})}
                
            />
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </Stack>
        </form>
      </Paper>

  </Box>
  )
}
