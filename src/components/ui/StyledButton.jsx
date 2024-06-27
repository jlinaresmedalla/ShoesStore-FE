import { Button, CircularProgress } from '@mui/material';

export const StyledButton = ({ children, isLoading, sx, ...props }) => {
  return (
    <Button {...props} sx={{ '&.MuiButton-sizeMedium': { height: '2.5rem' }, ...sx }}>
      {isLoading ? <CircularProgress color="inherit" size={20} /> : children}
    </Button>
  );
};
