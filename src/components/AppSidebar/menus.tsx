// Sidebar Menu items.

const SIDEBAR_MENUS = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: 'dashboard',
  },
  {
    title: 'Management',
    url: '/management',
    icon: 'management',
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
    icon: 'scheduler',
  },
  {
    title: 'Reports',
    url: '/reports',
    icon: 'reports',
  },
  {
    title: 'Generate Report',
    url: '/generate-report',
    icon: 'generateReport',
  },
  {
    title: 'Report History',
    url: '/report-history',
    icon: 'reportHistory',
  },
];

export default SIDEBAR_MENUS;
