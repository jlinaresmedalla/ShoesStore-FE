import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SavingsIcon from '@mui/icons-material/Savings';

export const TOP_SIDEBAR_ITEMS = [
  { label: 'Dashboard', to: '/dashboard', icon: <DashboardIcon color="secondary" /> },
  { label: 'Expenses', to: '/', icon: <AccountBalanceWalletIcon color="secondary" /> },
  { label: 'Goals', to: '/', icon: <SavingsIcon color="secondary" /> },
  { label: 'Analytics', to: '/', icon: <AnalyticsIcon color="secondary" /> },
];
