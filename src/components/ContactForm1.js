import React, {useState} from 'react';
import {useForm,useFieldArray, Controller } from "react-hook-form"
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

  

    const propertyTypes =['Residential', 'Commercial', 'HOA', 'In Construction', 'Other']
    const [propertyType, setPropertyType] = useState('')
    
   
    const handlePropertyChoice = (event) => {
      setPropertyType(event.target.value);
    };

    const [successMessage, setSuccessMessage] = useState(<Typography id='contact-message' mb={2} gutterBottom color="textSecondary" variant="body2" component="p" >We will keep your information private. Our team will get back to you within 24 hours.</Typography>);
  // setSuccessMessage(<Typography id='contact-message' mb={2} gutterBottom color="textSecondary" variant="body2" component="p" >We will keep your information private. Our team will get back to you within 24 hours.</Typography>);


    const { register, control, handleSubmit, reset, formState, formState: { isSubmitSuccessful} } = useForm({
      defaultValues: { 
        Name: "", 
        Phone: "", 
        Email: "",
        propertyType: "",
        Message: ""

      }
    });
    const [submittedData, setSubmittedData] = React.useState({});
    // const onSubmit = data => console.log(data, propertyType);
    // console.log(errors);

    const onSubmit = (data) => {
      setSubmittedData(data);
      fetch("https://formsubmit.co/ajax/671ed65e8b3f25f7416b378a329663b3 ", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            // name: "FormSubmit",
            // message: "I'm from Devro LABS"
            name: data.Name,
            email:data.Email,
            Phone: data.Phone,
            Property: propertyType,
            Message: data.Message

        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(errors => console.log(errors));
    }

    React.useEffect(() => {
      if (formState.isSubmitSuccessful){
        reset({Name: "", 
        Phone: "", 
        Email: "",
        PropertyType: setPropertyType(''),
        Message: ""})
        setSuccessMessage(<Typography mb={2} gutterBottom color="success.main" variant="h6" component="p" >THANK YOU! We Received Your Request. Our team will get back to you within 24 hours. </Typography>)
      }

    }, [formState, submittedData, reset]);

    


  return (
  
  <Box>
      <Paper elevation={3} sx={{p:3, maxWidth: '600px', margin: 'auto'}} >
        <Typography variant="h5" >Contact Us</Typography>
        <Box>{successMessage}</Box>
        
       
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
                {...register("Phone", {required: true, minLength: 6, maxLength: 12})}
               
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
                {...register("Message", {required: true, maxLength: 200})}
                
            />
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </Stack>
        </form>
      </Paper>

  </Box>
  )
}
