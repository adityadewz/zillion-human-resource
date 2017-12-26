/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.Tab2')
        .controller('Tab2Chart7Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", Tab2Chart7Ctrl]);

    /** @ngInject */
    function Tab2Chart7Ctrl($scope, baConfig, $element, layoutPaths) {
        $scope.viewByChart7 = "chart"
        var layoutColors = baConfig.colors;
            // var id = $element[0].getAttribute('id');

        var id = "Tab2Chart7"

        $scope.data = [{
            "year": "Jan",
            "income": Math.floor(Math.random() * 10),
            "expenses": 3
        }, {
            "year": "Feb",
            "income": Math.floor(Math.random() * 10),
            "expenses": 3
        }, {
            "year": "Mar",
            "income": Math.floor(Math.random() * 10),
            "expenses": 3
        }, {
            "year": "Apr",
            "income": Math.floor(Math.random() * 10),
            "expenses": 3
        }, {
            "year": "May",
            "income": Math.floor(Math.random() * 10),
            "expenses": 3
        }, {
            "year": "Jun",
            "income": Math.floor(Math.random() * 10),
            "expenses": 3
        }, {
            "year": "Jul",
            "income": Math.floor(Math.random() * 10),
            "expenses": 3
        }, {
            "year": "Aug",
            "income": Math.floor(Math.random() * 10),
            "expenses": 3
        }, {
            "year": "Sep",
            "income": Math.floor(Math.random() * 10),
            "expenses": 3
        }, {
            "year": "Oct",
            "income": Math.floor(Math.random() * 10),
            "expenses": 3
        }, {
            "year": "Nov",
            "income": Math.floor(Math.random() * 10),
            "expenses": 3
        }, {
            "year": "Dec",
            "income": Math.floor(Math.random() * 10),
            "expenses": 3
        }]

        var barChart = AmCharts.makeChart(id, {
            "type": "serial",
            "addClassNames": true,
            "theme": "light",
            "autoMargins": false,
            "marginLeft": 30,
            "marginRight": 8,
            "marginTop": 10,
            "marginBottom": 26,
            "balloon": {
                "adjustBorderColor": false,
                "horizontalPadding": 10,
                "verticalPadding": 8,
                "color": "#ffffff"
            },

            "dataProvider": $scope.data,
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left",
                title: "Succession in %"
            }],
            "startDuration": 1,
            "graphs": [{
                "alphaField": "alpha",
                "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
                "fillAlphas": 1,
                "title": "Average Certification per Employee",
                "type": "column",
                "valueField": "income",
                "dashLengthField": "dashLengthColumn"
            }, {
                "id": "graph2",
                "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
                "bullet": "round",
                "lineThickness": 3,
                "bulletSize": 7,
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "useLineColorForBulletBorder": true,
                "bulletBorderThickness": 3,
                "fillAlphas": 0,
                "lineAlpha": 1,
                "title": "Target",
                "valueField": "expenses",
                "dashLengthField": "dashLengthLine"
            }],
            "categoryField": "year",
            "categoryAxis": {
                "gridPosition": "start",
                "axisAlpha": 0,
                "tickLength": 0
            },
            "export": {
                "enabled": true
            }
        });
    }
})();