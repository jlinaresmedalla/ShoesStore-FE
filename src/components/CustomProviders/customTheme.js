import { createTheme } from '@mui/material';
import { green, grey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
    secondary: {
      main: grey[900],
    },
  },
  typography: {
    subtitle1: {
      fontWeight: 'bold',
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 3,
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 3,
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiInputBase: {
      defaultProps: {
        sx: { backgroundColor: grey['A100'] },
      },
    },
  },
});
