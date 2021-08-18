import { createTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const lightPalette = {
  main: '#725cff',
  background: '#FFFFFF',
  middle: '#EDEBFF',
  semi: '#C2B8FF',
  contrastText: '#090023',
};

const darkPalette = {
  main: '#725cff',
  background: '#090023',
  middle: '#240066',
  semi: '#72659D',
  contrastText: '#FFFFFF',
};

export const theme = (mode) =>
  createTheme({
    ...CssBaseline,
    palette: {
      type: mode === 'light' ? 'light' : 'dark',
      primary: mode === 'light' ? [lightPalette] : [darkPalette],
      secondary: {
        main: '#EE7674',
      },
    },
    typography: {
      fontFamily: 'Inter',
    },
    shape: {
      borderRadius: 4,
    },
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'none',
        },
      },
    },
    props: {
      MuiButton: {
        disableRipple: true,
        variant: 'contained',
        color: 'primary',
      },
      MuiCheckbox: {
        disableRipple: true,
      },
      MuiTextField: {
        variant: 'outlined',
        InputLabelProps: {
          shrink: true,
        },
      },
    },
  });
