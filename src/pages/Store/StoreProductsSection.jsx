import { useDispatch } from 'react-redux';
import ProductCard from '@/components/ProductCard';
import { StyledPaper, StyledTextField } from '@/components/ui';
import { addCart } from '@/redux/user/cart.slice';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import { productsList } from './utils/store.utils';

const StoreProductsSection = () => {
  const dispatch = useDispatch();
  const handleCardClick = (product) => {
    dispatch(addCart(product));
  };

  return (
    <StyledPaper component="main" className={'flex flex-col p-4 gap-4'}>
      <div className="flex justify-between">
        <Typography variant="h6">Productos</Typography>
        <StyledTextField
          placeholder={'Search Product'}
          InputProps={{ endAdornment: <SearchIcon color="primary" />, className: 'rounded-full' }}
        />
      </div>
      <StyledPaper
        className="flex flex-wrap justify-center gap-4 p-10 bg-gray-100"
        variant="outlined"
      >
        {productsList.map((product) => (
          <ProductCard key={product?.id} {...product} handleClick={handleCardClick} />
        ))}
      </StyledPaper>
    </StyledPaper>
  );
};

export default StoreProductsSection;
