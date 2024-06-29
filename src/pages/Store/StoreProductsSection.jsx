import ProductCard from '@/components/ProductCard';
import { StyledPaper, StyledTextField } from '@/components/ui';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import { productsList } from './utils/store.utils';

const StoreProductsSection = () => {
  return (
    <StyledPaper className={'p-4'}>
      <div className="flex justify-between items-center">
        <Typography variant="h6">Productos</Typography>
        <StyledTextField
          placeholder={'Search Product'}
          InputProps={{ endAdornment: <SearchIcon color="primary" /> }}
        />
      </div>
      <StyledPaper className="flex flex-wrap justify-center gap-4 p-10" variant="outlined">
        {productsList.map((product) => (
          <ProductCard key={product?.id} {...product} />
        ))}
      </StyledPaper>
    </StyledPaper>
  );
};

export default StoreProductsSection;
