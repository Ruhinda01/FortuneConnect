import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import SsidChartSharpIcon from '@mui/icons-material/SsidChartSharp';
import PaidSharpIcon from '@mui/icons-material/PaidSharp';
import ReceiptSharpIcon from '@mui/icons-material/ReceiptSharp';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import NewspaperSharpIcon from '@mui/icons-material/NewspaperSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';




export const TOP_LINKS = [
    {name: 'Dashboard', link: '/dashboard', icon: <DashboardSharpIcon />},
    {name: 'Investments', link: '/investments', icon: <SsidChartSharpIcon />},
    {name: 'Income', link: '/income', icon: <PaidSharpIcon />},
    {name: 'Transactions', link: '/transactions', icon: <ReceiptSharpIcon />},
    {name: 'Businesses', link: '/businesses', icon: <AccountBalanceSharpIcon />},
    {name: 'News', link: '/news', icon: <NewspaperSharpIcon />},
]

export const BOTTOM_LINKS = [
    {name: 'Profile', link: '/profile', icon: <PersonSharpIcon />},
    {name: 'Settings', link: '/settings', icon: <SettingsSharpIcon />},
]


