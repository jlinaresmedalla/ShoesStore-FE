import { Typography } from '@mui/material';
import { StyledPaper } from '../ui';

export const PageHeader = ({ title }) => {
  return (
    <StyledPaper className={'py-1 px-4'}>
      <Typography variant="h6">{title}</Typography>
    </StyledPaper>
  );
};
