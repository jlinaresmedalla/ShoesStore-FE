import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});
