import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


export default function InfoGlass() {
    return (
        <Box
           
            sx={{
                background: 'rgba( 66, 94, 223, 0.15 )',
                boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                backdropFilter: 'blur( 1.5px )',
                webkitBackdropFilter: 'blur( 1.5px )',
                borderRadius: 3,
                border: '1px solid rgba( 255, 255, 255, 0.18 )',
                p: 1,
                textAlign: 'center',
                maxWidth: '80%',
                margin: 'auto',
                
            }}
        >
                    <Typography variant='body1' component="h6"  sx={{color: 'white'}} >
                        Schedule Your <strong>Free</strong> Inspection
                    </Typography>
                    <Typography variant='h6' >
                        8am-8pm / 7days a week 
                    </Typography>
                    <Typography variant='h6' >(818) 822-6782</Typography>
        </Box>
    )
}
