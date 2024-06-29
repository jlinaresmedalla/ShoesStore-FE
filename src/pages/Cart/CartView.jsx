import { PageFooter, PageHeader } from '@/components/ui';
import CartSection from './CartSection';

const CartView = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <PageHeader title={'Carrito'} />
      <CartSection />
      <PageFooter />
    </div>
  );
};

export default CartView;
