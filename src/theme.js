import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
// import { blue, indigo } from '@mui/material/colors'
import { amber, deepOrange, grey } from '@mui/material/colors';
// A custom theme for this app
const theme = createTheme({
  palette: {
    // mode:'dark',
    primary: {
    //   main: '#556cd6',
    main: '#16204E'
    },
    secondary: {
    //   main: '#19857b',
    //Light Blue
      main: '#18A0FB',
    },
    third: {
        main: "#ffff",
    },
    error: {
      main: red.A400,
    },
    icon:{
      main: '#6d7fdd',
    },
    text: {
        primary: '#16204E',
        secondary: grey[400],
        main: '#e4e5ea',
        third: grey[700],
        lightBlue:'#6d7fdd',
        orange: '#bb420f',
        green: '#5c810a',
        yellow: '#ebdec2'
      },
  },
//   palette: {
//     primary: {
//         main: '#16204E'
//     },
//     secondary: {
//         main: '#18A0FB'
//     },
    
// },
// palette: {
//     mode: 'dark',
//   },
// palette: {
//   primary: blue,
//   secondary: indigo,
// },
});

export default theme;
