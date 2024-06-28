import { Paper } from '@mui/material';

export const StyledPaper = ({ children, sx, ...props }) => {
  return (
    <Paper {...props} sx={{ '&.MuiPaper-rounded': { borderRadius: 3 }, ...sx }}>
      {children}
    </Paper>
  );
};
