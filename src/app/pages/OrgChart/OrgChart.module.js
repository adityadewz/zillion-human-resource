(function () {
  'use strict';

  angular.module('BlurAdmin.pages.OrgChart', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('OrgChart', {
          url: '/OrgChart',
          templateUrl: 'app/pages/OrgChart/OrgChart.html',
          controller:"OrgChartCtrl",
          title: 'Organisation Chart',
          sidebarMeta: {
            icon: 'ion-person-stalker',
            order: 100,
          },
        });
  }

})();