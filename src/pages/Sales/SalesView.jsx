import { PageFooter, PageHeader } from '@/components/ui';
import SalesHistorySection from './SalesHistorySection';

const SalesView = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <PageHeader title={'Ventas'} />
      <SalesHistorySection />
      <PageFooter />
    </div>
  );
};

export default SalesView;
