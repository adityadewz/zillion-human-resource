/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.Tab2')
        .controller('Tab2Chart5Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", Tab2Chart5Ctrl]);

    /** @ngInject */
    function Tab2Chart5Ctrl($scope, baConfig, $element, layoutPaths) {
        $scope.viewByChart5 = "chart"

        var layoutColors = baConfig.colors;
            // var id = $element[0].getAttribute('id');
        var id = "Tab2Chart5";
        $scope.quarter = "q1"
        $scope.data = {
            q1: [{
                "country": "Group-1",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF0F00"
            }, {
                "country": "Group-2",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF6600"
            }, {
                "country": "Group-3",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "country": "Group-4",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FCD202"
            }],
            q2: [{
                "country": "Group-1",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF0F00"
            }, {
                "country": "Group-2",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF6600"
            }, {
                "country": "Group-3",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "country": "Group-4",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FCD202"
            }],
            q3: [{
                "country": "Group-1",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF0F00"
            }, {
                "country": "Group-2",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF6600"
            }, {
                "country": "Group-3",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "country": "Group-4",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FCD202"
            }],
            q4: [{
                "country": "Group-1",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF0F00"
            }, {
                "country": "Group-2",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF6600"
            }, {
                "country": "Group-3",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FF9E01"
            }, {
                "country": "Group-4",
                "visits": Math.floor(Math.random() * 100),
                "color": "#FCD202"
            }]
        }


        $scope.changeByQuarter = function(quarter) {
            console.log("chart changed")
            $scope.quarter = quarter
            barChart.dataProvider = $scope.data[$scope.quarter];
            barChart.validateData();
        }

        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "theme": "light",
            "marginRight": 70,
            "dataProvider": $scope.data[$scope.quarter],
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                "title": "Employee Satisfaction in %"
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