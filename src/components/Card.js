import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage } from 'gatsby-plugin-image'
import {Link} from 'gatsby'

export default function CustomCard(props) {
  const maxWidth= props.maxWidth || 345
    return (
        <Card sx={{ maxWidth: maxWidth }} >
      <CardActionArea component={Link} to={props.slug} >
         
          <GatsbyImage  image={props.thumbImage} alt={props.title} />
      
        <CardContent  >
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.excerpt}
          </Typography>
          <Typography variant="body1" color="text.primary">Time To Read: {props.timeToRead}min</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}
