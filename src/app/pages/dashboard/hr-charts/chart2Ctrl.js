(function(app){

app.controller("chart2Ctrl",["$scope", "baConfig", "$element", "layoutPaths",chart2Ctrl])

function chart2Ctrl($scope, baConfig, $element, layoutPaths) {
        // var layoutColors = baConfig.colors;
        // var id = $element[0].getAttribute('id');
        var id = "Chart2"

        $scope.view="chart";

       
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
                var args = data["tableexport-3"].csv
                instance.export2file(args.data, args.mimeType, args.filename, args.fileExtension);

            } else if (opt1 && opt2) {
                var args1 = data["tableexport-3"].csv
                instance.export2file(args1.data, args1.mimeType, args1.filename, args1.fileExtension);

                var args2 = data["tableexport-3"].xls
                instance.export2file(args2.data, args2.mimeType, args2.filename, args2.fileExtension);

            } else if (!opt1 && opt2) {
                var args = data["tableexport-3"].xls
                instance.export2file(args.data, args.mimeType, args.filename, args.fileExtension);

            }

         

        }

        $scope.data=[{
    "age": "85+",
    "male": -0.1,
    "female": 0.3
  }, {
    "age": "80-54",
    "male": -0.2,
    "female": 0.3
  }, {
    "age": "75-79",
    "male": -0.3,
    "female": 0.6
  }, {
    "age": "70-74",
    "male": -0.5,
    "female": 0.8
  }, {
    "age": "65-69",
    "male": -0.8,
    "female": 1.0
  }, {
    "age": "60-64",
    "male": -1.1,
    "female": 1.3
  }]
        // console.log(id)
        var Chart2 = AmCharts.makeChart(id, {
  "type": "serial",
  "theme": "light",
  "rotate": true,
  "marginBottom": 50,
  "dataProvider": $scope.data,
  "startDuration": 1,
  "graphs": [{
    "fillAlphas": 0.8,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "male",
    "title": "Male",
    "labelText": "[[value]]",
    "clustered": false,
    "labelFunction": function(item) {
      return Math.abs(item.values.value);
    },
    "balloonFunction": function(item) {
      return item.category + ": " + Math.abs(item.values.value) + "%";
    }
  }, {
    "fillAlphas": 0.8,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "female",
    "title": "Female",
    "labelText": "[[value]]",
    "clustered": false,
    "labelFunction": function(item) {
      return Math.abs(item.values.value);
    },
    "balloonFunction": function(item) {
      return item.category + ": " + Math.abs(item.values.value) + "%";
    }
  }],
  "categoryField": "age",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0.2,
    "axisAlpha": 0
  },
  "valueAxes": [{
    "gridAlpha": 0,
    "ignoreAxisWidth": true,
    "labelFunction": function(value) {
      return Math.abs(value) + '%';
    },
    "guides": [{
      "value": 0,
      "lineAlpha": 0.2
    }]
  }],
              "startDuration":0,

  "balloon": {
    "fixedPosition": true
  },
  "chartCursor": {
    "valueBalloonsEnabled": false,
    "cursorAlpha": 0.05,
    "fullWidth": true
  },
  "allLabels": [{
    "text": "Male",
    "x": "28%",
    "y": "97%",
    "bold": true,
    "align": "middle"
  }, {
    "text": "Female",
    "x": "75%",
    "y": "97%",
    "bold": true,
    "align": "middle"
  }],
 "export": {
    "enabled": true
  }

});
    }	

}(angular.module("BlurAdmin.pages.dashboard")));