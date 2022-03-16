import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { GatsbyImage } from 'gatsby-plugin-image'
import {Link} from 'gatsby'

export default function CustomCard(props) {
  const maxWidth= props.maxWidth || 245
    return (
        <Card 
        sx={{ 
          // maxWidth: maxWidth, 
          maxWidth: {xs: '300px', sm: maxWidth},
          backgroundColor: '#0d0d0ec2'
         }} 
         >
      <CardActionArea component={Link} to={props.slug} >
         
          <GatsbyImage  image={props.thumbImage} alt={props.title} />
      
        <CardContent  >
          <Typography gutterBottom variant="h5" component="div" color="text.main">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.excerpt}
          </Typography>
          <Typography variant="body1" color="text.secondary" mt={1}>Time To Read: {props.timeToRead}min</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}
