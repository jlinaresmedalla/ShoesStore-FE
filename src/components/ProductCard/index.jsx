import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Typography } from '@mui/material';
import { StyledButton, StyledPaper } from '../ui';

const ProductCard = ({ price, name, description, oldPrice, image }) => {
  return (
    <StyledPaper className="flex flex-[1_1_16rem] max-w-64 flex-col" variant="outlined">
      <div className="h-52 overflow-hidden justify-center">
        <img src={image} alt="product" className="w-full" />
      </div>
      <div className="flex flex-col flex-grow p-2">
        <Typography variant="subtitle2">{name}</Typography>
        <Typography variant="body2">{description}</Typography>
      </div>
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center">
          <Typography variant="h6">{price}</Typography>
          <Typography variant="subtitle2">{oldPrice}</Typography>
        </div>
        <StyledButton size="small" className="rounded-full">
          <ShoppingCartOutlinedIcon />
        </StyledButton>
      </div>
    </StyledPaper>
  );
};

export default ProductCard;
