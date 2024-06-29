import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { theme } from './customTheme';

const CustomProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
};

export default CustomProviders;
