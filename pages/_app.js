import { ThemeProvider } from '@mui/system'
import '../styles/globals.css'
import Navbar from './navbar'

import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
