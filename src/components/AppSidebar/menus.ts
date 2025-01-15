import ICONS from '@/config/icons';

// Sidebar Menu items.

const SIDEBAR_MENUS = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: ICONS.dashboard,
  },
  {
    title: 'Management',
    url: '/management',
    icon: ICONS.management,
    submenus: [
      {
        title: 'User Management',
        url: '/management/user-management',
      },
      {
        title: 'Asset Management',
        url: '/management/asset-management',
      },
      {
        title: 'Template Management',
        url: '/management/template-management',
      },
      {
        title: 'Report Management',
        url: '/management/report-management',
      },
    ],
  },
  {
    title: 'Scheduler',
    url: '/scheduler',
    icon: ICONS.scheduler,
  },
  {
    title: 'Reports',
    url: '/reports',
    icon: ICONS.reports,
  },
  {
    title: 'Generate Report',
    url: '/generate-report',
    icon: ICONS.generateReport,
  },
  {
    title: 'Report History',
    url: '/report-history',
    icon: ICONS.reportHistory,
  },
];

export default SIDEBAR_MENUS;
