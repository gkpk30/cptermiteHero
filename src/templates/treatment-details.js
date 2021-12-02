import React from 'react'
// import {GatsbyImage} from 'gatsby-plugin-image/gatsby-image'
import {graphql} from 'gatsby'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'

export default function TreatmentDetails({data}) {
    const {html} = data.markdownRemark
    const {title} = data.markdownRemark.frontmatter


    return (
        <Container maxWidth="md">
            {/* <Typography>{title}</Typography> */}
            <Typography dangerouslySetInnerHTML={{__html:html}}/>
            {/* <Typography>{html}</Typography> */}
            <Divider/>
            <Typography mt={2} fontWeight="500" variant="h4" sx={{fontStyle: 'italic', lineHeight: '1.25'}} >
            We believe in fundamental honesty. It's the keystone of our business.
            </Typography>
            <Typography>
            Captain Termite Control, Inc. will only use the best equipment and products available today. We offer a variety of localized treatment options.
            We will get the job done right no matter the type of termite, location, size or extent of your infestation. 
            </Typography>
            <Typography>
                We believe in alternative treatments that fit your lifestyle and that are cost effective. Most structures
                that have infestations can be controlled without the use of highly toxic chemicals. If necessary, Captain Termite Control Inc can also recommend a traditional tent fumigation option
            </Typography>
            <Typography>
                When dealing with unwanted termites or taking preventative actions, Captain Termite Control, Inc. will provide effective and affordable termite control solutions to prevent costly damage to your property.
            </Typography>
            <Typography mt={2} fontWeight="500" variant="h5" sx={{fontStyle: 'italic', lineHeight: '1.25'}} >
            Call us to setup an appointment for your FREE estimate today. <strong><br/> (818) 822-6782 <br/> 8am-8pm / 7 days a week </strong>
            </Typography>
        </Container>
    )
}

export const query = graphql`
    query TreatmentDetails($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter{
                title
                slug
            }
        }
    }

`

