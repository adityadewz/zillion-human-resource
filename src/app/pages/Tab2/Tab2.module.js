(function () {
  'use strict';

  angular.module('BlurAdmin.pages.Tab2', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('Tab2', {
          url: '/Tab2',
          templateUrl: 'app/pages/Tab2/Tab2.html',
          title: 'Staff Overview',
          sidebarMeta: {
            icon: 'ion-ios-refresh-empty',
            order: 100,
          },
        });
  }

})();