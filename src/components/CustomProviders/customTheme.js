import { createTheme } from '@mui/material';
import { grey, indigo } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: indigo['A400'],
    },
    secondary: {
      main: grey[900],
    },
  },
  typography: {
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
  },
});
