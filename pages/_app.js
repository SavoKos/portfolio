import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';

const theme = {
  colors: {
    primary: '#7877c6',
    secondary: '#ff77c6',
    accent: '#78dbff',
    background: '#000000',
    surface: 'rgba(255, 255, 255, 0.05)',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #7877c6 0%, #ff77c6 50%, #78dbff 100%)',
    blue: 'linear-gradient(135deg, #78dbff 0%, #7877c6 100%)',
    purple: 'linear-gradient(135deg, #7877c6 0%, #ff77c6 100%)',
  },
  shadows: {
    glow: '0 0 40px rgba(120, 119, 198, 0.3)',
    glass: '0 8px 32px rgba(0, 0, 0, 0.3)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
  }
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
