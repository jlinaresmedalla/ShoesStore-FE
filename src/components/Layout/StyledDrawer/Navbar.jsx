import { memo } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';

const Navbar = ({ handleMenuClick }) => {
  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar className="px-2">
        <IconButton color="inherit" onClick={handleMenuClick}>
          <MenuIcon color="secondary" />
        </IconButton>
        <Typography variant="h6" className="flex-grow">
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Navbar);
