import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import { theme } from '../../CustomProviders/customTheme';
import { TOP_SIDEBAR_ITEMS } from '../utils/layout.utils';

const Sidebar = ({ open, handleMenuClick }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      anchor="left"
      open={open}
      sx={{ zIndex: 1000 }}
      onClose={handleMenuClick}
      PaperProps={{
        sx: {
          paddingTop: isMobile ? '3.5rem' : '4rem',
          width: '14rem',
        },
      }}
    >
      <List sx={{ flexGrow: 1 }}>
        {TOP_SIDEBAR_ITEMS.map((item) => (
          <ListItem key={item?.label} disablePadding>
            <ListItemButton onClick={() => navigate(item?.to)}>
              <ListItemIcon className="text-black">{item?.icon}</ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ className: 'text-black font-medium' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon className="text-black" />
          </ListItemIcon>
          <ListItemText
            primary={'Logout'}
            primaryTypographyProps={{ className: 'text-black font-medium' }}
          />
        </ListItemButton>
      </ListItem>
    </Drawer>
  );
};

export default Sidebar;
