(function(app) {

    app.controller("chart1Ctrl", ["$scope", "baConfig", "$element", "layoutPaths",chart1Ctrl])



    function chart1Ctrl($scope, baConfig, $element, layoutPaths) {
        // var layoutColors = baConfig.colors;
        // var id = $element[0].getAttribute('id');

        var id="Chart1"
        $scope.view="chart"


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

            if (opt1 && !opt2) {
                var args = data["tableexport-2"].csv
                instance.export2file(args.data, args.mimeType, args.filename, args.fileExtension);

            } else if (opt1 && opt2) {
                var args1 = data["tableexport-2"].csv
                instance.export2file(args1.data, args1.mimeType, args1.filename, args1.fileExtension);

                var args2 = data["tableexport-2"].xls
                instance.export2file(args2.data, args2.mimeType, args2.filename, args2.fileExtension);

            } else if (!opt1 && opt2) {
                var args = data["tableexport-2"].xls
                instance.export2file(args.data, args.mimeType, args.filename, args.fileExtension);

            }


        }

        $scope.data=[{
                label: 'Sales',
                Male: 41.5,
                Female: 45.1
            }, {
                label: 'Finance',
                Male: 78.2,
                Female: 22.8
            }, {
                label: 'Customer Support',
                Male: 56.1,
                Female: 23.9
            }, {
                label: 'Marketing',
                Male: 43.5,
                Female: 25.1
            }, {
                label: 'Logistics',
                Male: 24.6,
                Female: 25
            }, {
                label: 'Production',
                Male: 54.6,
                Female: 65
            }, {
                label: 'R & D',
                Male: 24.6,
                Female: 88
            }]
        // console.log(id)
        var Chart1 = AmCharts.makeChart(id, {
            type: 'serial',
            theme: 'light',
            categoryField: 'label',
            rotate: true,
            startDuration: 1,
            categoryAxis: {
                gridPosition: 'start',
                position: 'left'
            },
            trendLines: [],
            graphs: [{
                balloonText: 'Male:[[value]]',
                fillAlphas: 0.8,
                id: 'AmGraph-1',
                lineAlpha: 0.2,
                title: 'Male',
                type: 'column',
                valueField: 'Male'
            }, {
                balloonText: 'Female:[[value]]',
                fillAlphas: 0.8,
                id: 'AmGraph-2',
                lineAlpha: 0.2,
                title: 'Female',
                type: 'column',
                valueField: 'Female'
            }],
            guides: [],
            valueAxes: [{
                id: 'ValueAxis-1',
                position: 'top',
                axisAlpha: 0
            }],
            "startDuration":0,
            allLabels: [],
            balloon: {},
            titles: [],
            dataProvider: $scope.data,
            export: {
                enabled: true
            }
        });
    }
}(angular.module("BlurAdmin.pages.dashboard")));