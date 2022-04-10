import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton'
import RedditIcon from '@mui/icons-material/Reddit';


const socialItems =[
    {icon: FacebookIcon, url: 'https://www.facebook.com'},
    {icon: TwitterIcon, url: 'https://twitter.com'},
    {icon: RedditIcon, url: 'https://reddit.com'}
]

export default function Social(props) {
   
   
   
    return (
        <Stack direction={{ xs: 'row', sm: props.isFooter ? 'row' : 'column' }}      >
            {socialItems.map((item) =><IconButton key={item.url}><item.icon color={props.color ? props.color : 'primary'} /></IconButton>  )}
        </Stack>
    )
}
