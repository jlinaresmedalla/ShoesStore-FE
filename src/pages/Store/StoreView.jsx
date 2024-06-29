import { PageHeader } from '@/components/ui';
import PageFooter from '@/components/ui/PageFooter';
import StoreProductsSection from './StoreProductsSection';

const StoreView = () => {
  return (
    <section className="flex flex-col w-full gap-4 pb-4">
      <PageHeader title={'Tienda'} />
      <StoreProductsSection />
      <PageFooter />
    </section>
  );
};

export default StoreView;
