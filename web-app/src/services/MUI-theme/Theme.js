/* eslint-disable no-unused-vars */
import * as React from 'react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
});

export default theme;
  