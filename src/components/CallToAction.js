import React from 'react'
import { Link } from "gatsby"
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoGraph from './InfoGraph'
import ChartPie from './Chart_Pie'

function CallToAction(props) {
    console.log(props)
    const main = props.main
    const subText = props.subText
    
    
    
 
  return (
    
           <Box display='flex' sx={{
                            
                            flexDirection: {xs: 'column ', md: 'row'},
                            justifyContent: 'space-between'
                            
                        }} >
                    <Box sx={{flex:'3'}}>  
                        <Typography variant='caption text' component='h2' mb={6} color="text.lightBlue" fontWeight='500'  > {props.pageTitle} </Typography>
                        <Typography 
                            variant='h3' 
                            component='h1' 
                            fontWeight='500' 
                            letterSpacing='-.02em' 
                            // fontSize='58px' 
                            // lineHeight='68px' 
                            > 
                            {main}
                        </Typography>
                        <Typography variant='body1' color="text.primary" mt={3}>{subText}</Typography>
                        <Box my={8}>
                              <Stack direction="row"   spacing={2}>
                                  <Button component={Link} to="/about" variant="contained" sx={{borderRadius: 4}} color='primary' endIcon={<ArrowForwardIosIcon/>}>{props.button1}</Button>
                                  <Button component={Link} to="/contact" variant="text"  color='primary' endIcon={<ArrowForwardIosIcon/>}>{props.button2}</Button>
                              </Stack>
                        </Box>

                    </Box>
                    <Box sx={{flex: '4', alignSelf:'center'}} >
                        {/* <InfoGraph /> */}
                        <Box 
                            sx={{
                                display: {sm: 'none'}
                            }}
                        >
                            {props.chart === 'pie' && <ChartPie/>}
                            {props.chart === 'infoChart' && <InfoGraph aspectRatio= '1'/>}
                        </Box>

                        <Box 
                            sx={{
                                display: {xs: 'none', sm: 'block'}
                            }}
                        >
                            {props.chart === 'pie' && <ChartPie/>}
                            {props.chart === 'infoChart' && <InfoGraph aspectRatio= '2'/>}
                        </Box>


                    </Box>
                  </Box>
    
  )
}

export default CallToAction