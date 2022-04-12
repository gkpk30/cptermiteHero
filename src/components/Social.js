import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton'
import RedditIcon from '@mui/icons-material/Reddit';
// import Link from '../components/Link'


const socialItems =[
    {icon: FacebookIcon, url: 'https://www.facebook.com'},
    {icon: TwitterIcon, url: 'https://twitter.com'},
    {icon: RedditIcon, url: 'https://www.reddit.com/r/pestcontrol/comments/mwm3hi/subterranean_termites_vs_drywood_termites/?utm_source=share&utm_medium=ios_app&utm_name=iossmf'}
]

export default function Social(props) {
   
   
   
    return (
        <Stack direction={{ xs: 'row', sm: props.isFooter ? 'row' : 'column' }}      >
            {socialItems.map((item) =><a rel='noreferrer' aria-label={item.url } key={item.url} href={item.url} target="_blank"><IconButton ><item.icon color={props.color ? props.color : 'primary'} /></IconButton></a>  )}
        </Stack>
    )
}
