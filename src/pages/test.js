import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import ProfilePic from '../components/ProfilePic'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import Timeline from '../components/Timeline';
import BottomContent from '../components/BottomContent';

export default function test() {
  return (
    <div style={{display:'grid'}}>
        <StaticImage 
            style={{
                gridArea:"1/1",
            }}
            layout="fullWidth"
            src={"../images/imageMesh.jpg" }
            alt=""  
            eager="true" 
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            />

        <div
            style={{
                gridArea:"1/1",
                position: "relative",
                placeItems: "center",
                display: "grid",   
            }}
        >
           {/* place content here */}
         
        </div>
    </div>
  )
}
