import React from 'react'
import * as styles from '../styles/header.module.css'
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
import Hidden from '@mui/material/Hidden'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import AccountMenu from '../components/TreatmentMenu';
import Menu from '@mui/material/Menu';
import TreatmentDropDownMenuLinks from '../components/TreatmentDropDownMenuLinks';




// const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

// const downIcon = ()=> <ArrowDropDownIcon/>

const navigationLinks = [
    {name: "Services", href:"/treatments/", endIcon:  ()=> <ArrowDropDownIcon/> },
    {name: "About Us", href: "/about"}, 
    {name: "Termite Info", href: "/termiteinfo"},
    {name: "Contact", href: "/contact"},
]

// const treatmentLinks = [
//     {name: , href:},
// ]

// const AccountMenu = (props, ref)=> (
//         <Menu
//         // ref={ref}
//         anchorEl={props.anchorEl}
//         open={props.open}
//         onClose={props.handleClose}
//         onClick={props.handleClose}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: 'visible',
//             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//             mt: 1.5,
//             '& .MuiAvatar-root': {
//               width: 32,
//               height: 32,
//               ml: -0.5,
//               mr: 1,
//             },
//             '&:before': {
//               content: '""',
//               display: 'block',
//               position: 'absolute',
//               top: 0,
//               right: 14,
//               width: 10,
//               height: 10,
//               bgcolor: 'background.paper',
//               transform: 'translateY(-50%) rotate(45deg)',
//               zIndex: 0,
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <Divider />
//         <MenuItem>
//           Add another account
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <Settings fontSize="small" />
//           </ListItemIcon>
//           Settings
//         </MenuItem>
        
//       </Menu>
//       )




export default function Header() {
    // const [selectedTab, setSelectedTab] = useState(null)
    
    // const handleClickTab = (e, newValue) => {
    //     setSelectedTab(newValue);
    //     console.log(e)
    // }
    // .MuiList-root-MuiMenu-list {
    //     color:red;
    // }
  
    const [openDrawer, setOpenDrawer] = React.useState(false)

    //DropDown Menu***********************//
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
            console.log('click Handled Menu drop down, handleClick to open')
        };
        const handleClose = () => {
            setAnchorEl(null);
            console.log('handleClose Clicked')
        };
  //**************************************** */



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
           
          <AppBar  color="primary"  position="fixed" > 
              <Container maxWidth='lg' disableGutters >
                 <Toolbar >
                 <Typography component={Link} to='/' sx={{color: 'text.main', marginRight:'auto'}} >Captain Termite Control </Typography>
                     <Hidden smDown>
                                {navigationLinks.map(link => (
                                     (link.endIcon) ? 
                                     <div key={link.name}>
                                        <Box pb={'3px'}  >
                                            <Link 
                                                    
                                                    underline="none"  
                                                    sx={{color: 'text.secondary', fontWeight: 'medium', fontSize:'.72rem', p:2}}  
                                                    // variant="text" 
                                                    to={link.href}
                                                    // endIcon={<ArrowDropDownIcon/>}
                                                    // endIcon={downIcon()}
                                                    // endIcon={link.endIcon()}
                                                    // component={Button}
                                                    activeClassName={styles.active_header_link}
                                                >
                                                    {link.name}
                                            </Link> 
                                                <IconButton disableRipple={true} aria-label="menu" sx={{color:'text.secondary', px:'0'}} onClick={handleClick}  >{link.endIcon()}</IconButton>
                                        </Box>
                                            {/* <AccountMenu open={open} anchorEl={anchorEl} onClose={handleClose} onClick={handleClose}/> */}
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}  
                                                
                                                sx={{
                                                    '& ul.MuiList-root.MuiList-padding': {padding: '0px'},
                                                    '.MuiMenu-paper' : {borderRadius: '0px'},
                                                }}

                                                PaperProps={{
                                                elevation: 0,
                                                
                                                sx: {
                                                    overflow: 'visible',
                                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                    mt: 1.5,
                                                    '&:before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 35,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                    },
                                                },
                                                }}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >
                                                <TreatmentDropDownMenuLinks />
                                         
                                            </Menu>
                                        </div>
                                        :
                                        <Link 
                                            key={link.name} 
                                            underline="none"  
                                            sx={{color: 'text.secondary', fontWeight: 'medium', ml: 1, fontSize:'.72rem', p:2}}  
                                            // variant="text" 
                                            to={link.href}
                                            activeClassName={styles.active_header_link}
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
                        <IconButton  onClick={() => setOpenDrawer(false)}>
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
                                                    onClick={()=> setOpenDrawer(false)}
                                                    >
                                                    
                                                    {link.name}
                                                    
                                                </Button>
                                           </ListItem>
                                        ))}
                                    </List>
              </SwipeableDrawer>
          </AppBar>
          <Toolbar />
        </Box>
    )
}

