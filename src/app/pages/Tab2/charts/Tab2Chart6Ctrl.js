/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.Tab2')
        .controller('Tab2Chart6Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", Tab2Chart6Ctrl]);

    /** @ngInject */
    function Tab2Chart6Ctrl($scope, baConfig, $element, layoutPaths) {
        $scope.viewByChart6 = "chart"

        var layoutColors = baConfig.colors;
            // var id = $element[0].getAttribute('id');
        var id = "Tab2Chart6";
        $scope.quarter = "q1"
        $scope.data = [{
                "country": "Jan",
                "visits": Math.floor(Math.random() * 10),
                "color": "#FF0F00"
            },
            {
                "country": "Feb",
                "visits": Math.floor(Math.random() * 10),
                "color": "#FF0F00"
            },
            {
                "country": "Mar",
                "visits": Math.floor(Math.random() * 10),
                "color": "#FF0F00"
            },
            {
                "country": "Apr",
                "visits": Math.floor(Math.random() * 10),
                "color": "#FF0F00"
            },
            {
                "country": "May",
                "visits": Math.floor(Math.random() * 10),
                "color": "#FF0F00"
            },
            {
                "country": "Jun",
                "visits": Math.floor(Math.random() * 10),
                "color": "#FF0F00"
            },
            {
                "country": "Jul",
                "visits": Math.floor(Math.random() * 10),
                "color": "#FF0F00"
            },
            {
                "country": "Aug",
                "visits": Math.floor(Math.random() * 10),
                "color": "#FF0F00"
            },
            {
                "country": "Sept",
                "visits": Math.floor(Math.random() * 10),
                "color": "#FF0F00"
            },
            {
                "country": "Oct",
                "visits": Math.floor(Math.random() * 10),
                "color": "#FF0F00"
            },
            {
                "country": "Nov",
                "visits": Math.floor(Math.random() * 10),
                "color": "#FF0F00"
            },
            {
                "country": "Dec",
                "visits": Math.floor(Math.random() * 10),
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
                "title": "Absence Rate in %"
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