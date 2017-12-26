/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
        'use strict';

        angular.module('BlurAdmin.pages.Tab2')
            .controller('Tab2Chart1Ctrl', ["$scope", "baConfig", "$element", "layoutPaths", Tab2Chart1Ctrl]);

        /** @ngInject */
        function Tab2Chart1Ctrl($scope, baConfig, $element, layoutPaths) {
            $scope.viewByChart1 = "chart"

            var layoutColors = baConfig.colors;
                // var id = $element[0].getAttribute('id');
            var id = "Tab2Chart1";
            $scope.data = [{
                "month": "Dec-10",
                "Product-A": Math.floor(100 * Math.random()),
                "Product-B": 67
            }, {
                "month": "Jan-11",
                "Product-A": Math.floor(100 * Math.random()),
                "Product-B": 67

            }, {
                "month": "Feb-11",
                "Product-A": Math.floor(100 * Math.random()),
                "Product-B": 67

            }, {
                "month": "Mar-11",
                "Product-A": Math.floor(100 * Math.random()),
                "Product-B": 67

            }, {
                "month": "Apr-11",
                "Product-A": Math.floor(100 * Math.random()),
                "Product-B": 67

            }, {
                "month": "May-11",
                "Product-A": Math.floor(100 * Math.random()),
                "Product-B": 67

            }, {
                "month": "Jun-11",
                "Product-A": Math.floor(100 * Math.random()),
                "Product-B": 67

            }, {
                "month": "Jul-11",
                "Product-A": Math.floor(100 * Math.random()),
                "Product-B": 67

            }, {
                "month": "Aug-11",
                "Product-A": Math.floor(100 * Math.random()),
                "Product-B": 67

            }, {
                "month": "Sep-11",
                "Product-A": Math.floor(100 * Math.random()),
                "Product-B": 67

            }, {
                "month": "Oct-11",
                "Product-A": Math.floor(100 * Math.random()),
                "Product-B": 67

            }, {
                "month": "Nov-11",
                "Product-A": Math.floor(100 * Math.random()),
                "Product-B": 67

            }, {
                "month": "Dec-11",
                "Product-A": Math.floor(100 * Math.random()),
                "Product-B": 67

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
                        "title": "Training Presentation Rate in %"
                    }],
                    "startDuration": 0.5,
                    "graphs": [{
                            "balloonText": "Training Presentation Rate in [[category]]: [[value]]",
                            "bullet": "round",
                            // "hidden": true,
                            "title": "Training Presentation Rate",
                            "valueField": "Product-A",
                            "fillAlphas": 0
                        }, {
                            "balloonText": "Target in [[category]]: [[value]]",
                            "bullet": "round",
                            "title": "Target",
                            "valueField": "Product-B",
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