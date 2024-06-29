import { StyledButton, StyledPaper, StyledTextField } from '@/components/ui';
import { Divider, Typography } from '@mui/material';

const CartSection = () => {
  return (
    <StyledPaper component="main" className="flex flex-col p-4 gap-4">
      <Typography variant="h6">Detalles de Orden</Typography>
      <form action="" className="flex flex-col gap-3">
        <div className="flex flex-wrap w-full gap-4">
          <StyledPaper
            variant="outlined"
            className="flex flex-[1_1_500px] flex-col p-4 bg-gray-50 gap-3"
          >
            <Typography variant="subtitle1">Informacion de Cliente</Typography>
            <div className="flex gap-2">
              <StyledTextField label="Nombres" className="flex-grow" />
              <StyledTextField label="Apellidos" className="flex-grow" />
            </div>
            <StyledTextField label="Dirección" />
            <div className="flex gap-2">
              <StyledTextField label="Celular" className="flex-grow" />
              <StyledTextField label="Correo" className="flex-grow" />
            </div>
          </StyledPaper>
          <StyledPaper variant="outlined" className="flex flex-col flex-[1_1_500px] p-4 gap-2">
            <Typography variant="subtitle1">Productos</Typography>
            <div className="flex flex-col divide-y divide-slate-700">
              <div className="flex gap-3 items-center">
                <div>image</div>
                <div className="flex-grow">
                  <Typography fontWeight={500}>title</Typography>
                  <Typography variant="body2">Litle text</Typography>
                </div>
                <div>
                  <Typography>2</Typography>
                </div>
                <div>
                  <Typography>$30</Typography>
                </div>
                <div>
                  <Typography>$60</Typography>
                </div>
              </div>
            </div>
            <Divider />
            <div className="flex justify-end">
              <div className="flex flex-col items-end">
                <Typography variant="subtitle2">Sub Total</Typography>
                <Typography variant="subtitle2">IGV</Typography>
                <Typography variant="subtitle1">Total</Typography>
              </div>
              <div className="flex flex-col w-24 items-end">
                <Typography variant="subtitle2">$ 60.00</Typography>
                <Typography variant="subtitle2">$ 18.00</Typography>
                <Typography variant="subtitle1">$ 78.00</Typography>
              </div>
            </div>
          </StyledPaper>
        </div>
        <div className="flex justify-end">
          <StyledButton size="small">Confirmar Orden</StyledButton>
        </div>
      </form>
    </StyledPaper>
  );
};

export default CartSection;
