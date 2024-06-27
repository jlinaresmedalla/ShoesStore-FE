import { Button, CircularProgress } from '@mui/material';

export const StyledButton = ({ children, isLoading, ...props }) => {
  return (
    <Button {...props}>
      {isLoading ? <CircularProgress color="inherit" size={20} /> : children}
    </Button>
  );
};
