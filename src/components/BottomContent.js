import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'


export default function BottomContent() {
    return (

        
        <Box my={24}>
            <Typography variant='caption text' component='h4' mb={6} color="text.green" fontWeight='500'  > 
                          Quality Control
            </Typography>
             <Typography 
              variant='h4' 
              component='h2' 
              fontWeight='500' 
              letterSpacing='-.02em' 
              gutterBottom 
              
              sx={{maxWidth: {sm: '70%'}}}
            //   mt={2} fontWeight="500" variant="h4" component="h4" 
            //  sx={{fontStyle: 'italic', lineHeight: '1.25'}} 
             >
              We believe in fundamental honesty. It's the keystone of our business.
              </Typography>
              <Box 
                sx={{
                    display: {xs: 'block', md: 'flex'},
                    gap: {md: 4}
                }} 
                
              >
                    <Box flex="2">
                        <Typography>
                        Captain Termite Control, Inc. will only use the best equipment and products available today. We offer a variety of localized treatment options.
                        We will get the job done right no matter the type of termite, location, size or extent of your infestation. 
                        </Typography>

                        <Typography>
                            We believe in alternative treatments that fit your lifestyle and that are cost effective. Most structures
                            that have infestations can be controlled without the use of highly toxic chemicals. If necessary, Captain Termite Control Inc can also recommend a traditional tent fumigation option.
                        </Typography>
                    </Box>
                    <Box flex="2">
                        <Typography>
                            According to consumerAffairs.com pest control statistics and trends Los Angelses ranks in the top 20 cities in the United States, sitting at number 11, with the most termites. When dealing with unwanted termites or taking preventative actions, Captain Termite Control, Inc. will provide effective and affordable termite control solutions to prevent costly damage to your property.
                        </Typography>
                    </Box>
              
                </Box>

              <Divider />

              <Box my={4} p={2} sx={{backgroundColor: '#6e545475'}}>
                  <Typography mt={2} fontWeight="500" variant="h5" sx={{fontStyle: 'italic', lineHeight: '1.25'}} >
                  Call us to setup an appointment for your FREE estimate today. <strong><br/> (818) 822-6782 <br/> 8am-8pm / 7 days a week </strong>
                  </Typography>
                  
                  
                  <Typography my={1}>We Serve Los Angeles, San Fernando Valley, Toluca Lake, Hollywood Area and MORE</Typography>
                  <Typography>
                  WE WELCOME: Residential | Commercial | Property Management| Homeowners Associations | Senior Homes | Construction Companies
                  </Typography>
              </Box>
        </Box>
    )
}
