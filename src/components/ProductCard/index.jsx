import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Typography } from '@mui/material';
import { StyledButton, StyledPaper } from '../ui';

const ProductCard = ({ price, name, description, oldPrice, image, handleClick }) => {
  const product = { price, name, description, oldPrice, image };

  return (
    <StyledPaper className="flex w-64 flex-col" variant="outlined">
      <div className="h-52 overflow-hidden">
        <img src={image} alt="product" className="w-full" />
      </div>
      <div className="flex flex-col flex-grow p-3">
        <Typography fontWeight={'bold'}>{name}</Typography>
        <Typography variant="body2">{description}</Typography>
      </div>
      <div className="flex items-center justify-between p-3">
        <div className="flex items-baseline gap-2">
          <Typography variant="h6">{`S/. ${price}.00`}</Typography>
          <Typography variant="subtitle2" className="line-through">
            {`S/. ${oldPrice}`}
          </Typography>
        </div>
        <StyledButton size="small" className="rounded-full" onClick={() => handleClick(product)}>
          <ShoppingCartOutlinedIcon />
        </StyledButton>
      </div>
    </StyledPaper>
  );
};

export default ProductCard;
