import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const StyledDrawer = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen((open) => !open);
  };

  const customWidth = open && 'sm:pl-56';

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-tl from-slate-50 to-slate-200">
      <Navbar handleMenuClick={handleMenuClick} />
      <div className="flex sm:h-[calc(100%-4rem)] h-[calc(100%-3.5rem)]">
        <Sidebar open={open} handleMenuClick={handleMenuClick} />
        <div className={`flex w-full flex-grow overflow-y-auto ${customWidth}`}>{children}</div>
      </div>
    </div>
  );
};

export default StyledDrawer;
