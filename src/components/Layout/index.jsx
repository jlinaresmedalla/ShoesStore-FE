import { Outlet } from 'react-router-dom';
import StyledDrawer from './StyledDrawer';

const Layout = () => {
  return (
    <StyledDrawer>
      <div className="flex w-full p-2 sm:p-3">
        <Outlet />
      </div>
    </StyledDrawer>
  );
};

export default Layout;
