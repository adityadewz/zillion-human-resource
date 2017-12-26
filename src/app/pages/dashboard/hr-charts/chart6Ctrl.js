(function(app) {

    app.controller("Chart6Ctrl", ["$scope", "$timeout", "baConfig", "$element", "layoutPaths", chart6Ctrl])

    function chart6Ctrl($scope, $timeout, baConfig, $element, layoutPaths) {


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
                var args = data["tableexport-1"].csv
                instance.export2file(args.data, args.mimeType, args.filename, args.fileExtension);

            } else if (opt1 && opt2) {
                var args1 = data["tableexport-1"].csv
                instance.export2file(args1.data, args1.mimeType, args1.filename, args1.fileExtension);

                var args2 = data["tableexport-1"].xls
                instance.export2file(args2.data, args2.mimeType, args2.filename, args2.fileExtension);

            } else if (!opt1 && opt2) {
                var args = data["tableexport-1"].xls
                instance.export2file(args.data, args.mimeType, args.filename, args.fileExtension);

            }

            // if (opt1 === "csv") {
            //     opt2 === undefined;


            // if (opt2 === "xls") {
            //     $scope.opt1 === undefined;
            //     var args = data["tableexport-1"].xls
            //     instance.export2file(args.data, args.mimeType, args.filename, args.fileExtension);

            // }

        }



        var layoutColors = baConfig.colors;
        $scope.view = "chart"
            // var id = $element[0].getAttribute('id');
        var id = "BarChart"
            // console.log(id)
        $scope.data = [{
            sex: 'Male',
            performance: 50.3,
            color: layoutColors.primary
        }, {
            sex: 'Female',
            performance: 52.1,
            color: layoutColors.danger

        }]
        var BarChart = AmCharts.makeChart(id, {
            type: 'serial',
            theme: 'blur',
            color: layoutColors.defaultText,
            dataProvider: $scope.data,
            valueAxes: [{
                axisAlpha: 0,
                position: 'left',
                title: 'Peroformance in percentage',
                gridAlpha: 0.5,
                gridColor: layoutColors.border,
            }],
            startDuration: 1,
            graphs: [{
                balloonText: '<b>[[category]]: [[value]]</b>',
                fillColorsField: 'color',
                fillAlphas: 0.7,
                lineAlpha: 0.2,
                type: 'column',
                valueField: 'performance'
            }],
            chartCursor: {
                categoryBalloonEnabled: false,
                cursorAlpha: 0,
                zoomable: false
            },
            categoryField: 'sex',
            categoryAxis: {
                gridPosition: 'start',
                labelRotation: 45,
                gridAlpha: 0.5,
                gridColor: layoutColors.border,
            },
            export: {
                enabled: true
            },
            creditsPosition: 'top-right',
            pathToImages: layoutPaths.images.amChart
        });

    }

}(angular.module("BlurAdmin.pages.dashboard")));