/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.Tab2')
        .controller('Tab2Chart8Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", Tab2Chart8Ctrl]);

    /** @ngInject */
    function Tab2Chart8Ctrl($scope, baConfig, $element, layoutPaths) {
        $scope.viewByChart8 = "chart"
        var layoutColors = baConfig.colors;
            // var id = $element[0].getAttribute('id');

        var id = "Tab2Chart8"

        $scope.data = [{
        "year": "Group-1",
        "income": 83,
        "expenses": 9
    }, {
        "year": "Group-2",
        "income": 56,
        "expenses": 9
    }, {
        "year": "Group-3",
        "income": 87,
        "expenses": 9
    }, {
        "year": "Group-4",
        "income": 82,
        "expenses": 9
    }]

        var barChart = AmCharts.makeChart(id, {
    "type": "serial",
    "theme": "light",
    "handDrawn":true,
    "handDrawScatter":3,
    "legend": {
        "useGraphSettings": true,
        "markerSize":12,
        "valueWidth":0,
        "verticalGap":0
    },
    "dataProvider": $scope.data,
    "valueAxes": [{
        "minorGridAlpha": 0.08,
        "minorGridEnabled": true,
        "position": "top",
        "axisAlpha":0
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>",
        "title": "Job Offer Acceptance Rate in %",
        "type": "column",
        "fillAlphas": 0.8,

        "valueField": "income"
    }],
    "rotate": true,
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start"
    },
    "export": {
        "enabled": true
     }

});
    }
})();