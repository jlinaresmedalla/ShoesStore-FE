import { PageFooter, PageHeader } from '@/components/ui';
import CartOrderSection from './CartOrderSection';

const CartView = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <PageHeader title={'Carrito'} />
      <CartOrderSection />
      <PageFooter />
    </div>
  );
};

export default CartView;
