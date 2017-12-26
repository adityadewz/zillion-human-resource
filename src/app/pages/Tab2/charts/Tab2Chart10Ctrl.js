/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.Tab2')
        .controller('Tab2Chart10Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", Tab2Chart10Ctrl]);

    /** @ngInject */
    function Tab2Chart10Ctrl($scope, baConfig, $element, layoutPaths) {
        $scope.viewByChart10 = "chart"

        var layoutColors = baConfig.colors;
            // var id = $element[0].getAttribute('id');
        var id = "Tab2Chart10";
        $scope.quarter = "q1"
        $scope.data = [{
                "country": "Q-1",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF0F00"
            },
            {
                "country": "Q-2",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF0F00"
            },
            {
                "country": "Q-3",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF0F00"
            },
            {
                "country": "Q-4",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF0F00"
            }]
            

        // $scope.changeByQuarter = function(quarter) {
        //     console.log("chart changed")
        //     $scope.quarter = quarter
        //     barChart.dataProvider = $scope.data[$scope.quarter];
        //     barChart.validateData();
        // }

        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "marginRight": 70,
            "dataProvider": $scope.data,
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": "Bonus Payout in Lacs"
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<b>[[category]]: [[value]]</b>",
                "fillColorsField": "color",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "type": "column",
                "valueField": "visits"
            }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "country",
            "categoryAxis": {
                "gridPosition": "start",
                "labelRotation": 45
            },
            "export": {
                "enabled": true
            }

        });
    }
})();