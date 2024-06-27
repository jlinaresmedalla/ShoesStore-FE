import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { theme } from './customTheme';

const CustomProviders = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default CustomProviders;
