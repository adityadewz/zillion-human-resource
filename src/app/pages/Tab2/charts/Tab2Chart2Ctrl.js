/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.Tab2')
        .controller('Tab2Chart2Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", Tab2Chart2Ctrl]);

    /** @ngInject */
    function Tab2Chart2Ctrl($scope, baConfig, $element, layoutPaths) {

        var layoutColors = baConfig.colors;
        var id = "Tab2Chart2"
        $scope.viewByChart2 = "chart";
        $scope.data = [{
            "month": "Dec-10",
            "Product-A": Math.floor(Math.random() * 100)
        }, {
            "month": "Jan-11",
            "Product-A": Math.floor(Math.random() * 100)

        }, {
            "month": "Feb-11",
            "Product-A": Math.floor(Math.random() * 100)

        }, {
            "month": "Mar-11",
            "Product-A": Math.floor(Math.random() * 100)

        }, {
            "month": "Apr-11",
            "Product-A": Math.floor(Math.random() * 100)

        }, {
            "month": "May-11",
            "Product-A": Math.floor(Math.random() * 100)

        }, {
            "month": "Jun-11",
            "Product-A": Math.floor(Math.random() * 100)

        }, {
            "month": "Jul-11",
            "Product-A": Math.floor(Math.random() * 100)

        }, {
            "month": "Aug-11",
            "Product-A": Math.floor(Math.random() * 100)

        }, {
            "month": "Sep-11",
            "Product-A": Math.floor(Math.random() * 100)

        }, {
            "month": "Oct-11",
            "Product-A": Math.floor(Math.random() * 100)

        }, {
            "month": "Nov-11",
            "Product-A": Math.floor(Math.random() * 100)

        }, {
            "month": "Dec-11",
            "Product-A": Math.floor(Math.random() * 100)

        }]
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
                "title": "Place taken",
        
            }],
            "startDuration": 0.5,
            "graphs": [{
                "balloonText": "Management Staff Ratio in [[category]]: [[value]]",
                "bullet": "round",
                // "hidden": true,
                "title": "Management Staff Ratio",
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
                "position": "bottom",
           
            },
            "export": {
                "enabled": true,
                "position": "bottom-right"
            }
        });
    }
})();