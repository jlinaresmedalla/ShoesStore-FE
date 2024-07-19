import { PageHeader, StyledPaper } from '@/components/ui';
import { Typography } from '@mui/material';

const DashboardView = () => {
  return (
    <section className="flex flex-col w-full gap-4">
      <PageHeader title="Dashboard" />
      <StyledPaper className="flex flex-col p-4 gap-4">
        <Typography variant="subtitle1">Descuentos de temporada</Typography>
        queloque
      </StyledPaper>
    </section>
  );
};

export default DashboardView;
