/**
 * @author a.demeshko
 * created on 12/16/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('Chart8Ctrl', Chart8Ctrl);

    /** @ngInject */
    function Chart8Ctrl($scope, $window, baConfig) {

        $scope.view = "chart";

        $scope.data = [{
            y: "2006",
            a: 0,
            b: 20,
            c: 34
        }, {
            y: "2007",
            a: 75,
            b: 65,
            c: 98
        }, {
            y: "2008",
            a: 50,
            b: 40,
            c: 79
        }, {
            y: "2009",
            a: 75,
            b: 65,
            c: 79
        }, {
            y: "2010",
            a: 50,
            b: 40,
            c: 65
        }, {
            y: "2011",
            a: 75,
            b: 65,
            c: 79
        }, {
            y: "2012",
            a: 100,
            b: 90,
            c: 43
        }]

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


        var layoutColors = baConfig.colors;
        $scope.colors = [layoutColors.primary, layoutColors.warning, layoutColors.danger, layoutColors.info, layoutColors.success, layoutColors.primaryDark];


        $scope.areaData = $scope.data


        angular.element($window).bind('resize', function() {
            //$window.Morris.Grid.prototype.redraw();
        });
    }

})();