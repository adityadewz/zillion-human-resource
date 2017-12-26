/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages', [
            'ui.router',

            'BlurAdmin.pages.dashboard',
            // 'BlurAdmin.pages.ui',
            // 'BlurAdmin.pages.components',
            // 'BlurAdmin.pages.form',
            // 'BlurAdmin.pages.tables',
            // 'BlurAdmin.pages.charts',
            'BlurAdmin.pages.OrgChart',
            'BlurAdmin.pages.profile',
            'BlurAdmin.pages.Tab2'
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
        $urlRouterProvider.otherwise('/dashboard');
        
    }

})();