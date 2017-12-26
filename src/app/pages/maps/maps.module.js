/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.maps', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('maps', {
                url: '/maps',
                templateUrl: 'app/pages/maps/maps.html',
                abstract: true,
                title: 'Maps',
                sidebarMeta: {
                    icon: 'ion-ios-location-outline',
                    order: 500,
                },
            })
            .state('maps.bubble', {
                url: '/bubble',
                templateUrl: 'app/pages/maps/map-bubbles/map-bubbles.html',
                controller: 'MapBubblePageCtrl',
                title: 'Region Map',
                sidebarMeta: {
                    order: 200,
                    icon: 'ion-android-map'
                },
            })

    }

})();