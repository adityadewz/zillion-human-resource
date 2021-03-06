/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.charts.amCharts')
        .controller('PieChartCtrl', PieChartCtrl);

    /** @ngInject */
    function PieChartCtrl($element, layoutPaths, baConfig, $scope) {
        $scope.downloadcsv = function(opt1, opt2) {

            console.log(opt1)
            console.log(opt2)

            var instance = TableExport($(".table"), {
                headers: true, // (Boolean), display table headers (th or td elements) in the <thead>, (default: true)
                footers: true, // (Boolean), display table footers (th or td elements) in the <tfoot>, (default: false)
                formats: ['xls', 'csv'], // (String[]), filetype(s) for the export, (default: ['xls', 'csv', 'txt'])
                filename: 'id', // (id, String), filename for the downloaded file, (default: 'id')
                bootstrap: true, // (Boolean), style buttons using bootstrap, (default: true)
                exportButtons: false, // (Boolean), automatically generate the built-in export buttons for each of the specified formats (default: true)
                position: 'bottom', // (top, bottom), position of the caption element relative to table, (default: 'bottom')
                ignoreRows: null, // (Number, Number[]), row indices to exclude from the exported file(s) (default: null)
                ignoreCols: null, // (Number, Number[]), column indices to exclude from the exported file(s) (default: null)
                trimWhitespace: true // (Boolean), remove all leading/trailing newlines, spaces, and tabs from cell text in the exported file(s) (default: false)
            });

            var data = instance.getExportData()
            console.log(data)

            if (opt1 && !opt2) {
                var args = data["tableexport-4"].csv
                instance.export2file(args.data, args.mimeType, args.filename, args.fileExtension);

            } else if (opt1 && opt2) {
                var args1 = data["tableexport-4"].csv
                instance.export2file(args1.data, args1.mimeType, args1.filename, args1.fileExtension);

                var args2 = data["tableexport-4"].xls
                instance.export2file(args2.data, args2.mimeType, args2.filename, args2.fileExtension);

            } else if (!opt1 && opt2) {
                var args = data["tableexport-4"].xls
                instance.export2file(args.data, args.mimeType, args.filename, args.fileExtension);

            }


        }

        $scope.view = "chart";
        $scope.data = [{
            'Age-group': '25-35',
            Hiree: 10
        }, {
            'Age-group': '36-45',
            Hiree: 3
        }, {
            'Age-group': '46-55',
            Hiree: 6
        }, {
            'Age-group': '56-65',
            Hiree: 8
        }, {
            'Age-group': '66-75',
            Hiree: 2
        }]

        var layoutColors = baConfig.colors;
        // var id = $element[0].getAttribute('id');
        var id = "pieChart"
        var pieChart = AmCharts.makeChart(id, {
            type: 'pie',
            startDuration: 0,
            theme: 'blur',
            addClassNames: true,
            color: layoutColors.defaultText,
            labelTickColor: layoutColors.borderDark,
            legend: {
                position: 'right',
                marginRight: 100,
                autoMargins: false,
            },
            innerRadius: '40%',
            defs: {
                filter: [{
                    id: 'shadow',
                    width: '200%',
                    height: '200%',
                    feOffset: {
                        result: 'offOut',
                        in: 'SourceAlpha',
                        dx: 0,
                        dy: 0
                    },
                    feGaussianBlur: {
                        result: 'blurOut',
                        in: 'offOut',
                        stdDeviation: 5
                    },
                    feBlend: { in: 'SourceGraphic',
                        in2: 'blurOut',
                        mode: 'normal'
                    }
                }]
            },
            dataProvider: $scope.data,
            valueField: 'Hiree',
            titleField: 'Age-group',
            "export": {
                "enabled": true,
                "menu": [{
                    "format": "JPG",
                    "label": "Save as JPG",
                    "title": "Export chart to JPG",
                }, "PNG"]
            },
            creditsPosition: 'bottom-left',

            autoMargins: false,
            marginTop: 10,
            alpha: 0.8,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            pullOutRadius: 0,
            pathToImages: layoutPaths.images.amChart,
            responsive: {
                enabled: true,
                rules: [
                    // at 900px wide, we hide legend
                    {
                        maxWidth: 900,
                        overrides: {
                            legend: {
                                enabled: false
                            }
                        }
                    },

                    // at 200 px we hide value axis labels altogether
                    {
                        maxWidth: 200,
                        overrides: {
                            valueAxes: {
                                labelsEnabled: false
                            },
                            marginTop: 30,
                            marginBottom: 30,
                            marginLeft: 30,
                            marginRight: 30
                        }
                    }
                ]
            }
        });

        pieChart.addListener('init', handleInit);

        pieChart.addListener('rollOverSlice', function(e) {
            handleRollOver(e);
        });

        function handleInit() {
            pieChart.legend.addListener('rollOverItem', handleRollOver);
        }

        function handleRollOver(e) {
            var wedge = e.dataItem.wedge.node;
            wedge.parentNode.appendChild(wedge);
        }
    }

})();