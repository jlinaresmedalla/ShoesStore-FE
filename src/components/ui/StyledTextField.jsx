import { TextField } from '@mui/material';

export const StyledTextField = ({ sx, ...props }) => {
  return <TextField sx={{ ...sx }} {...props} />;
};
