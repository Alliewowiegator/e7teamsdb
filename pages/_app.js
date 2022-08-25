import { ThemeProvider } from '@mui/system'
import PropTypes from 'prop-types';
import '../styles/globals.css'
import Navbar from './navbar'
import { CacheProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from '../utility/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  
  )
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
