import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'


export default function BottomContent() {
    return (
        <div>
             <Typography mt={2} fontWeight="500" variant="h5" sx={{fontStyle: 'italic', lineHeight: '1.25'}} >
              We believe in fundamental honesty. It's the keystone of our business.
              </Typography>
              <Typography>
              Captain Termite Control, Inc. will only use the best equipment and products available today. We offer a variety of localized treatment options.
              We will get the job done right no matter the type of termite, location, size or extent of your infestation. 
              </Typography>
              <Typography>
                  We believe in alternative treatments that fit your lifestyle and that are cost effective. Most structures
                  that have infestations can be controlled without the use of highly toxic chemicals. If necessary, Captain Termite Control Inc can also recommend a traditional tent fumigation option.
              </Typography>
              <Typography>
                  When dealing with unwanted termites or taking preventative actions, Captain Termite Control, Inc. will provide effective and affordable termite control solutions to prevent costly damage to your property.
              </Typography>

              <Divider />

              <Box my={4} p={2} sx={{backgroundColor: '#b7a0a0'}}>
                  <Typography mt={2} fontWeight="500" variant="h5" sx={{fontStyle: 'italic', lineHeight: '1.25'}} >
                  Call us to setup an appointment for your FREE estimate today. <strong><br/> (818) 822-6782 <br/> 8am-8pm / 7 days a week </strong>
                  </Typography>
                  
                  
                  <Typography my={1}>We Serve Los Angeles, San Fernando Valley, Toluca Lake, Hollywood Area and MORE</Typography>
                  <Typography>
                  WE WELCOME: Residential | Commercial | Property Management| Homeowners Associations | Senior Homes | Construction Companies
                  </Typography>
              </Box>
        </div>
    )
}
