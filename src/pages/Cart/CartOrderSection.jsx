import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { StyledButton, StyledPaper, StyledTextField } from '@/components/ui';
import { addSale } from '@/redux/user/salesHistory.slice';
import { Divider, Typography } from '@mui/material';

const CartOrderSection = () => {
  const cartProducts = useSelector((state) => state.cartState.cart);
  const totalPrice = cartProducts?.reduce((acc, item) => acc + item.price, 0);
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      address: '',
      cell: '',
      email: '',
    },
  });
  const onSubmit = (data) => {
    const now = new Date();
    const sale = {
      saleId: `00${Math.round(Math.random() * 1000)}`,
      client: { ...data },
      totalAmount: totalPrice,
      date: now,
    };
    dispatch(addSale(sale));
  };

  return (
    <StyledPaper component="main" className="flex flex-col p-4 gap-4">
      <Typography variant="h6">Detalles de Orden</Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-wrap w-full gap-4">
          <StyledPaper
            variant="outlined"
            className="flex flex-[1_1_500px] flex-col p-4 bg-gray-50 gap-3"
          >
            <Typography variant="subtitle1">Informacion de Cliente</Typography>
            <div className="flex gap-2">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <StyledTextField label="Nombres" className="flex-grow" {...field} />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <StyledTextField label="Apellidos" className="flex-grow" {...field} />
                )}
              />
            </div>
            <Controller
              name="address"
              control={control}
              render={({ field }) => <StyledTextField label="Dirección" {...field} />}
            />
            <div className="flex gap-2">
              <Controller
                name="cell"
                control={control}
                render={({ field }) => (
                  <StyledTextField label="Celular" className="flex-grow" {...field} />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <StyledTextField label="Correo" className="flex-grow" {...field} />
                )}
              />
            </div>
          </StyledPaper>
          <StyledPaper variant="outlined" className="flex flex-col flex-[1_1_500px] p-4 gap-2">
            <Typography variant="subtitle1">Productos</Typography>
            <div className="flex flex-col">
              {cartProducts?.map((product) => (
                <div className="flex gap-3 items-center" key={product.id}>
                  <div className="h-10">
                    <img src={product?.image} alt="product_image" className="h-full w-full" />
                  </div>
                  <div className="flex-grow">
                    <Typography fontWeight={500}>{product?.name}</Typography>
                    <Typography variant="body2">{product?.description}</Typography>
                  </div>
                  <Typography variant="subtitle2" className="w-10 text-center">
                    {1}
                  </Typography>
                  <Typography variant="subtitle2">{`S/. ${product.price}.00`}</Typography>
                </div>
              ))}
            </div>
            <Divider />
            <div className="flex justify-end">
              <div className="flex flex-col items-end">
                <Typography variant="subtitle2">Sub Total</Typography>
                <Typography variant="subtitle2">IGV</Typography>
                <Typography variant="subtitle1">Total</Typography>
              </div>
              <div className="flex flex-col w-24 items-end">
                <Typography variant="subtitle2">{`S/. ${Math.round(totalPrice * 0.82)}.00`}</Typography>
                <Typography variant="subtitle2">{`S/. ${Math.round(totalPrice * 0.18)}.00`}</Typography>
                <Typography variant="subtitle1">{`S/. ${Math.round(totalPrice)}.00`}</Typography>
              </div>
            </div>
          </StyledPaper>
        </div>
        <div className="flex justify-end">
          <StyledButton size="small" type="submit">
            Confirmar Orden
          </StyledButton>
        </div>
      </form>
    </StyledPaper>
  );
};

export default CartOrderSection;
