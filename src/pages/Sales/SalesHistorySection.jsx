import { StyledButton, StyledPaper } from '@/components/ui';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import { Typography } from '@mui/material';

const SalesHistorySection = () => {
  return (
    <StyledPaper component="main" className="flex flex-col p-4 gap-4">
      <Typography variant="h6">Historial de ventas</Typography>
      <StyledPaper variant="outlined">
        <div className="flex gap-2 items-center px-3 py-1">
          <div className="w-14">
            <Typography variant="subtitle1">sku</Typography>
          </div>
          <div className="flex-grow">
            <Typography fontWeight={500}>Nombre del cliente</Typography>
            <Typography variant="body2">Fecha</Typography>
          </div>
          <div>
            <Typography variant="subtitle1">$monto</Typography>
          </div>
          <StyledButton size="small">
            <DownloadForOfflineOutlinedIcon />
          </StyledButton>
        </div>
      </StyledPaper>
    </StyledPaper>
  );
};

export default SalesHistorySection;
