import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../src/theme';
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

export default function TopLayout(props) {
 
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="M6oHkqrPTAoH48Kxdx1CPoMdT_FENFQhwqrvac6BQj0"/>
        <meta name="description" content="Captain Termite Control INC. is a family owned and operated company providing effective and preventative termite treatments in Los Angeles, California. Our mission is to provide the highest level of service at affordable prices. Whether it's your home or business we can protect your investment by ridding your property of unwanted termites."/>
        <meta name="keywords" content="Termite Inspection, Free Inspection, Termites, Los Angeles County, Orange County"/>
        <title>Captain Termite Control | Los Angeles Termite Control Company</title>
          
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'space-between'}}>
        <Header />
        
        {props.children}
        
        <Footer/>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
