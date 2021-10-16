import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { StaticImage } from 'gatsby-plugin-image'

export default function CustomCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
          <StaticImage src= "../images/imageMesh.jpg" alt=""  eager="true" placeholder="blurred" objectFit="fill"/>
        {/* <CardMedia
          component="img"
          height="140"
        //   image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.excerpt}
          </Typography>
          <Typography>Time To Read: {props.timeToRead}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}
