import { useSelector } from 'react-redux';
import { StyledButton, StyledPaper } from '@/components/ui';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import { Typography } from '@mui/material';

const SalesHistorySection = () => {
  const salesHistory = useSelector((state) => state.saleHistoryState.salesHistory);

  return (
    <StyledPaper component="main" className="flex flex-col p-4 gap-4">
      <Typography variant="h6">Historial de ventas</Typography>
      <StyledPaper variant="outlined">
        {salesHistory?.map((sale) => (
          <div className="flex gap-2 items-center px-3 py-1" key={sale?.saleId}>
            <div className="w-16">
              <Typography variant="subtitle1">{sale.saleId}</Typography>
            </div>
            <div className="flex-grow">
              <Typography
                fontWeight={500}
              >{`${sale.client.firstName} ${sale.client.lastName}`}</Typography>
              <Typography variant="body2">{sale.date?.toDateString()}</Typography>
            </div>
            <div className="w-20">
              <Typography variant="subtitle1">{`S/. ${sale.totalAmount}`}</Typography>
            </div>
            <StyledButton size="small" className="rounded-full">
              <DownloadForOfflineOutlinedIcon />
            </StyledButton>
          </div>
        ))}
      </StyledPaper>
    </StyledPaper>
  );
};

export default SalesHistorySection;
