const URLS = {
  dashboard: '/dashboard',
  management: {
    root: '/management',
    userManagement: {
      root: '/management/user-management',
      users: '/management/user-management/users',
      clients: '/management/user-management/clients',
      states: '/management/user-management/states',
      roles: '/management/user-management/roles',
    },
    assetManagment: {
      root: '/management/asset-management',
      mapTechnicians: '/management/asset-management/map-technicians',
      equipments: '/management/asset-management/equipments',
      assetTypes: '/management/asset-management/assetTypes',
    },
  },
  scheduler: '/scheduler',
  reports: {
    root: '/reports',
  },
  generateReport: '/generate-report',
  reportHistory: '/report-history',
};

export default URLS;
