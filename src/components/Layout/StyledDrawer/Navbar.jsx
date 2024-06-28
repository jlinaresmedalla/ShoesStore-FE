import { memo } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';

const Navbar = ({ handleMenuClick }) => {
  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar className="px-2 gap-2">
        <IconButton color="inherit" onClick={handleMenuClick}>
          <MenuIcon color="secondary" />
        </IconButton>
        <div className="flex-grow h-8 sm:h-10">
          <img src="/light_logo.png" alt="light_logo" className="h-full" />
          <img src="/brand_text_logo.png" alt="brand text logo" className="h-full" />
        </div>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Navbar);
