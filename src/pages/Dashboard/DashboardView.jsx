import { PageHeader, StyledPaper } from '@/components/ui';
import { Typography } from '@mui/material';

const DashboardView = () => {
  return (
    <section className="flex flex-col w-full gap-4">
      <PageHeader title="Dashboard" />
      <StyledPaper className="flex flex-col p-4 gap-4">
        <Typography variant="subtitle1">Descuentos de temporada</Typography>
        <img src="/dashboard_banner.png" alt="dashboard" className="w-full" />
      </StyledPaper>
    </section>
  );
};

export default DashboardView;
