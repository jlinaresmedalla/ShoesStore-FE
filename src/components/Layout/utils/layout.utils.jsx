import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SavingsIcon from '@mui/icons-material/Savings';

export const TOP_SIDEBAR_ITEMS = [
  { label: 'Dashboard', to: '/dashboard', icon: <DashboardIcon /> },
  { label: 'Expenses', to: '/', icon: <AccountBalanceWalletIcon /> },
  { label: 'Goals', to: '/', icon: <SavingsIcon /> },
  { label: 'Analytics', to: '/', icon: <AnalyticsIcon /> },
];
