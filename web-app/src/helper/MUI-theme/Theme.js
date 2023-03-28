/* eslint-disable no-unused-vars */
import * as React from 'react';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
      // Name of the component
      AppBar: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            color: 'transparent',
          },
        },
      },
    },
    pallette: {
      primary:{
        main: "#FF8323",
        dark: "#DB7002"
      },
      secondary:{
        main: "FF5223",
        light: "#B33919",
        dark: "#B33919"
      }
    }
})
