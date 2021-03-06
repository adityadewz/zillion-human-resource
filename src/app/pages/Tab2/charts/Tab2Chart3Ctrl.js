/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.Tab2')
        .controller('Tab2Chart3Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", Tab2Chart3Ctrl]);

    /** @ngInject */
    function Tab2Chart3Ctrl($scope, baConfig, $element, layoutPaths) {
        $scope.viewByChart3 = "chart"

        var layoutColors = baConfig.colors;
        $scope.data = [{
                "month": "Dec-10",
                "Product-A": Math.floor(100 * Math.random())
            }, {
                "month": "Jan-11",
                "Product-A": Math.floor(100 * Math.random())

            }, {
                "month": "Feb-11",
                "Product-A": Math.floor(100 * Math.random())

            }, {
                "month": "Mar-11",
                "Product-A": Math.floor(100 * Math.random())

            }, {
                "month": "Apr-11",
                "Product-A": Math.floor(100 * Math.random())

            }, {
                "month": "May-11",
                "Product-A": Math.floor(100 * Math.random())

            }, {
                "month": "Jun-11",
                "Product-A": Math.floor(100 * Math.random())

            }, {
                "month": "Jul-11",
                "Product-A": Math.floor(100 * Math.random())

            }, {
                "month": "Aug-11",
                "Product-A": Math.floor(100 * Math.random())

            }, {
                "month": "Sep-11",
                "Product-A": Math.floor(100 * Math.random())
            }, {
                "month": "Oct-11",
                "Product-A": Math.floor(100 * Math.random())
            }, {
                "month": "Nov-11",
                "Product-A": Math.floor(100 * Math.random())
            }, {
                "month": "Dec-11",
                "Product-A": Math.floor(100 * Math.random())
            }]
            // var id = $element[0].getAttribute('id');

        var id = "Tab2Chart3"

        var barChart = AmCharts.makeChart(id, {
                    "type": "serial",
                    "theme": "light",
                    "legend": {
                        "useGraphSettings": true
                    },
                    "dataProvider": $scope.data,
                    "valueAxes": [{
                        "integersOnly": true,
                        "maximum": 100,
                        "minimum": 0,
                        "reversed": false,
                        "axisAlpha": 0,
                        "dashLength": 5,
                        "gridCount": 10,
                        "position": "left",
                        "title": ""
                    }],
                    "startDuration": 0.5,
                    "graphs": [{
                            "balloonText": "Headcount in [[category]]: [[value]]",
                            "bullet": "round",
                            // "hidden": true,
                            "title": "Headcount",
                            "valueField": "Product-A",
                            "fillAlphas": 0
                        }],
                        "chartCursor": {
                            "cursorAlpha": 0,
                            "zoomable": false
                        },
                        "categoryField": "month",
                        "categoryAxis": {
                            "gridPosition": "start",
                            "axisAlpha": 0,
                            "fillAlpha": 0.05,
                            "gridAlpha": 0,
                            "position": "bottom"
                        },
                        "axisBase": {
                            "color": "#000",
                            "titleColor": "#000"
                        },
                        "export": {
                            "enabled": true,
                            "position": "bottom-right"
                        }
                    });
    }
})();