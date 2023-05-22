import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        color: 'black',
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: 'text.primary',
          fontSize: '1.2rem',
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
