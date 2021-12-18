import React from 'react'
import Container from '@mui/material/Container'
import Copyright from './Copyright'
import Box from '@mui/material/Box'

export default function Footer() {
    return (
        <Box sx={{backgroundColor:"primary.main", color: 'text.secondary', minHeight: '5vh'}}  >
            <Container maxWidth="md">
                
                <Copyright siteName = {'gnkDesigns'}/>
           </Container>
        </Box>
    )
}
