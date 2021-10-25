import React from 'react'
// import {GatsbyImage} from 'gatsby-plugin-image/gatsby-image'
import {graphql} from 'gatsby'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function TreatmentDetails({data}) {
    const {html} = data.markdownRemark
    const {title} = data.markdownRemark.frontmatter


    return (
        <div>
            <Typography>{title}</Typography>
            <div dangerouslySetInnerHTML={{__html:html}}/>
        </div>
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

