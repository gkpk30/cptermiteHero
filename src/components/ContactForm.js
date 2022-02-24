import React from 'react';
import { useForm } from 'react-hook-form';
import * as styles from '../styles/contactForm.module.css'
import Paper from '@mui/material/paper'

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
        <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
        <select {...register("Property Type", { required: true })}>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="HOA">HOA</option>
          <option value="Construction">Construction</option>
        </select>
        <p>What Can We Help You with?</p>
        <input {...register("purpose", { required: true })} type="radio" value="Free Estimate" />
        <input {...register("purpose", { required: true })} type="radio" value="Question About Account" />

        <input type="submit" />
      </form>
   
  );
}