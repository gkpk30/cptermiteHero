import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright(props) {
  const siteName = props.siteName

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '} 
      <MuiLink color="inherit" href="https://salientdynamics.com/">
        {siteName}
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
