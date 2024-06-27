import { Paper } from '@mui/material';

export const StyledPaper = ({ children, ...props }) => {
  return <Paper {...props}>{children}</Paper>;
};
