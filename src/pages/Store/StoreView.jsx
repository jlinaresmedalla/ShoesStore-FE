import { PageHeader } from '@/components/ui';
import StoreProductsSection from './StoreProductsSection';

const StoreView = () => {
  return (
    <section className="flex flex-col w-full gap-4">
      <PageHeader title={'Tienda'} />
      <StoreProductsSection />
    </section>
  );
};

export default StoreView;
