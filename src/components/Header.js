import React, {useState, useEffect} from 'react'
// import {Link} from 'gatsby'
import AppBar from '@mui/material/AppBar'
// import Link from '@mui/material/Link'
import Link from '../components/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Grid from '@mui/material/Grid'
import Hidden from '@mui/material/Hidden'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { palette } from '@mui/system';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

// const downIcon = ()=> <ArrowDropDownIcon/>

const navigationLinks = [
    {name: "Treatments", href:"/treatments/", endIcon:  ()=> <ArrowDropDownIcon/> },
    {name: "About Us", href: "/about"}, 
    {name: "Contact", href: "/contact"},
    {name: "Termite Info", href: "/termiteinfo"}
]




export default function Header({location}) {
    const [selectedTab, setSelectedTab] = useState(null)
    
    const handleClickTab = (e, newValue) => {
        setSelectedTab(newValue);
        console.log(e)
    }
  

    

    const [openDrawer, setOpenDrawer] = useState(false)

    //console.log("Location: ", location.pathname)
    
    // const path = location.pathname

    // useEffect(() => {
    //     console.log('use effect ran')
    //     console.log('use effect path: ', path)
    //     if (path === ('/treatments' || '/treatments/')) setSelectedTab(0)
    //         else if (path === ('/about' || '/about/')) setSelectedTab(1)
    //         else if (path === ('/contact' || '/contact/')) setSelectedTab(2)
    //         else setSelectedTab(null)
    //   },[])

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" enableColorOnDark color="primary" > 
              <Container maxWidth='md' disableGutters >
                 <Toolbar >
                 <Typography component={Link} to='/' sx={{color: 'text.secondary', marginRight:'auto'}} >Captain Termite Control </Typography>
                     <Hidden smDown>
                        
                            
                            {/* <Tabs value={selectedTab} onChange={handleClickTab} indicatorColor = 'secondary'   >
                                <Tab label="Treatments" component={Link} to="/treatments" />
                                <Tab label="About Us" component={Link} to="/about"  />
                                <Tab label="Contact" component={Link} to="/contact"  />
                            </Tabs> */}  
                                {navigationLinks.map(link => (
                                     (link.endIcon) ? 
                                     <Box key={link.name} >
                                        <Link 
                                                
                                                underline="none"  
                                                sx={{color: 'text.secondary', fontWeight: 'medium', fontSize:'.8rem'}}  
                                                // variant="text" 
                                                to={link.href}
                                                // endIcon={<ArrowDropDownIcon/>}
                                                // endIcon={downIcon()}
                                                // endIcon={link.endIcon()}
                                                // component={Button}
                                            >
                                                {link.name}
                                            </Link> 
                                            <IconButton aria-label="menu" sx={{color:'text.secondary', pl:'1'}}  >{link.endIcon()}</IconButton>
                                        </Box>
                                        :
                                        <Link 
                                            key={link.name} 
                                            underline="none"  
                                            sx={{color: 'text.secondary', fontWeight: 'medium', ml: 2, fontSize:'.75rem'}}  
                                            // variant="text" 
                                            to={link.href}
                                            // endIcon={<ArrowDropDownIcon/>}
                                            // component={Button}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}  
                                 
                     </Hidden>
                     <Hidden smUp>
                         
                        <IconButton onClick={() =>setOpenDrawer(true)}>
                            <MenuIcon color='third' />
                        </IconButton>
                     </Hidden>
             
                 </Toolbar>
              </Container>
              <SwipeableDrawer  anchor="right" open={openDrawer} onOpen={()=> setOpenDrawer(true)} onClose={()=> setOpenDrawer(false)}>
                    <div>
                        <IconButton onClick={() => setOpenDrawer(false)}>
                            <ChevronRightIcon />
                        </IconButton>
                    </div>
                    <Divider/>
                

                                    <List>
                                        {navigationLinks.map(link => (
                                           <ListItem  key={link.name}> 
                                               <Button 
                                                    underline="none"  
                                                    sx={{color: 'text.primary', fontWeight: 'medium', mr: 2}}  
                                                    variant="button" 
                                                    to={link.href}
                                                    component={Link}
                                                    >
                                                    {link.name}
                                                </Button>
                                           </ListItem>
                                        ))}
                                    </List>
              </SwipeableDrawer>
          </AppBar>
          {/* <Offset /> */}
        </Box>
    )
}
