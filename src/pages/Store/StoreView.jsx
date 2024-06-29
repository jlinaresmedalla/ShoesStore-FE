import { PageHeader, PageFooter } from '@/components/ui';
import StoreProductsSection from './StoreProductsSection';

const StoreView = () => {
  return (
    <section className="flex flex-col w-full gap-4">
      <PageHeader title={'Tienda'} />
      <StoreProductsSection />
      <PageFooter />
    </section>
  );
};

export default StoreView;
