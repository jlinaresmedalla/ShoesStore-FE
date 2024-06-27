import { memo } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';

const Navbar = ({ handleMenuClick }) => {
  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar>
        <IconButton size="small" edge="start" color="inherit" onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" className="flex-grow">
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Navbar);
