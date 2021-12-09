import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'


export default function ProfilePic() {
    return (
        <Box>
            <Box width="90%" height="400px" position="relative" margin='auto'>
            <StaticImage src='../images/warranty.png' alt="warranty for two years" placeholder="blurred"   
                style={{
                zIndex:'2', 
                position:"absolute",
                right:'0',
                top:'-10%',
                width:'40%',
                }}
            />
            <StaticImage src= "../images/housecaplarge_mb.png"  alt="captain termite"  eager="true" placeholder="blurred" objectPosition="left"  objectFit="cover" 
                style={{
                height:'100%', 
                width: '100%', 
                zIndex:'1',
                position: 'absolute',
            }} 
            />
            </Box>
            <Box width="90%" margin='auto' >
            <Typography variant="body2">
                Our owner is a veteran of the United States Navy and is proud to support all vetarans.  If you are a veteran or have a United States service member in your family you will receive a $100 discount on Captain Termite Control services.
            </Typography>
            </Box>
        </Box>
    )
}
