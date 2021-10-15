import React from 'react'
import Icon from '@mui/material/Icon';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton'
import RedditIcon from '@mui/icons-material/Reddit';
import Link from '@mui/material/Link';

const socialItems =[
    {icon: FacebookIcon, url: 'https://www.facebook.com'},
    {icon: TwitterIcon, url: 'https://twitter.com'},
    {icon: RedditIcon, url: 'https://reddit.com'}
]

export default function Social(props) {
    return (
        <Stack direction={props.direction || 'row'}     >
            {socialItems.map((item) =><IconButton key={item.url}><item.icon color='primary' /></IconButton>  )}
        </Stack>
    )
}
