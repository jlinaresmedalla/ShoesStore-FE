import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';

export const TOP_SIDEBAR_ITEMS = [
  { label: 'Dashboard', to: '/', icon: <DashboardOutlinedIcon color="secondary" /> },
  { label: 'Tienda', to: '/tienda', icon: <StorefrontIcon color="secondary" /> },
  { label: 'Carrito', to: '/carrito', icon: <ShoppingCartOutlinedIcon color="secondary" /> },
  { label: 'Ventas', to: '/ventas', icon: <AnalyticsOutlinedIcon color="secondary" /> },
];
