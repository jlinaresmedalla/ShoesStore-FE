import { StyledButton } from '@/components/ui';

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-1/2 h-full">
        dashboard <StyledButton>Click me</StyledButton>
      </div>
    </div>
  );
};

export default Dashboard;
