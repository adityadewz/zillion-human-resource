(function(app) {

    app.controller("chart5Ctrl", ["$scope", "$timeout", "baConfig", chart5Ctrl])

    function chart5Ctrl($scope, $timeout, baConfig) {


        $scope.downloadcsv = function(opt1, opt2) {


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
                var args = data["tableexport-5"].csv
                instance.export2file(args.data, args.mimeType, args.filename, args.fileExtension);

            } else if (opt1 && opt2) {
                var args1 = data["tableexport-5"].csv
                instance.export2file(args1.data, args1.mimeType, args1.filename, args1.fileExtension);

                var args2 = data["tableexport-5"].xls
                instance.export2file(args2.data, args2.mimeType, args2.filename, args2.fileExtension);

            } else if (!opt1 && opt2) {
                var args = data["tableexport-5"].xls
                instance.export2file(args.data, args.mimeType, args.filename, args.fileExtension);

            }


        }
        $scope.labelsPieData = {
            labels: ['Bananas', 'Apples', 'Grapes'],
            series: [20, 15, 40]
        };

        $scope.labelsPieOptions = {
            fullWidth: true,
            height: "300px",
            weight: "300px",
            labelDirection: 'explode',
            labelInterpolationFnc: function(value) {
                return value[0];
            }
        };

        $scope.simpleDonutData = {
            labels: ['Bananas', 'Apples', 'Grapes'],
            series: [20, 15, 40]
        };

        $scope.simpleDonutOptions = {
            fullWidth: true,
            donut: true,
            height: "300px",
            weight: "300px",
            labelDirection: 'explode',
            labelInterpolationFnc: function(value) {
                return value[0];
            }
        };

        $scope.donutResponsive = getResponsive(5, 40);

        $scope.pieResponsive = getResponsive(20, 80);

        function getResponsive(padding, offset) {
            return [
                ['screen and (min-width: 1550px)', {
                    chartPadding: padding,
                    labelOffset: offset,
                    labelDirection: 'explode',
                    labelInterpolationFnc: function(value) {
                        return value;
                    }
                }],
                ['screen and (max-width: 1200px)', {
                    chartPadding: padding,
                    labelOffset: offset,
                    labelDirection: 'explode',
                    labelInterpolationFnc: function(value) {
                        return value;
                    }
                }],
                ['screen and (max-width: 600px)', {
                    chartPadding: 0,
                    labelOffset: 0,
                    labelInterpolationFnc: function(value) {
                        return value[0];
                    }
                }]
            ];
        }

        $scope.guage_dat[20,10,30,40];

        $timeout(function() {
            new Chartist.Pie('.ct-chart', {
                series: $scope.guage_data
            }, {
                donut: true,
                donutWidth: 60,
                startAngle: 270,
                total: 200,
                showLabel: false
            });
        });
    }

}(angular.module("BlurAdmin.pages.dashboard")));