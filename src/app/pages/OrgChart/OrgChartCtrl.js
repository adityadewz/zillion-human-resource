(function(app) {

    app.controller("OrgChartCtrl", ["$scope", "$state","OrgChartService" ,OrgChartCtrl])

    function OrgChartCtrl($scope, $state,OrgChartService) {

            var matchAttribute = function(key, value, dataObject) {
                return (value.toString() === (_.property(key)(dataObject) || "").toString());
            };

            var buildTree = function(flatArray, rootIdValue, idName, parentIdName, childrenCollectionName) {
                idName = idName || 'id';
                parentIdName = parentIdName || 'parentId';
                childrenCollectionName = childrenCollectionName || 'children';
                rootIdValue = rootIdValue || (_.first(flatArray))[idName] || 0;

                var output = JSON.parse(JSON.stringify(_.find(flatArray, _.partial(matchAttribute, idName, rootIdValue))));
                var children = _.filter(flatArray, _.partial(matchAttribute, parentIdName, rootIdValue));

                output[childrenCollectionName] = _.map(children, function(child) {
                    return buildTree(flatArray, child[idName], idName, parentIdName, childrenCollectionName);
                });

                return output;
            };

    

        var newData = [{
            "id": 1,
            "name": "Kewal Kishan",
            "parentId": 0,
            "title": "CEO"

        }, {
            "id": 2,
            "name": "Saurabh",
            "parentId": 1,
            "title": "Developer"

        }, {
            "id": 3,
            "name": "Tanmay",
            "parentId": 1,
            "title": "Developer"

        }]

        function makeChart(data) {
            $('#chart-container').empty();
            $('#chart-container').orgchart({
                'data': data,
                'depth': 3,
                'nodeContent': 'title',
                'nodeID': 'id',
                'exportButton': true,
                'exportFilename': 'MyOrgChart',
                'exportFileextension': 'pdf',
                'createNode': function($node, data) {
                    var secondMenuIcon = $('<i>', {
                        'class': 'fa fa-info-circle second-menu-icon',
                        click: function() {
                            $(this).siblings('.second-menu').toggle();
                        }
                    });
                    var secondMenu = '<div class="second-menu"><img ng-click="openProfile()" class="avatar" src="assets/img/student.png"></div>';
                    $node.append(secondMenuIcon).append(secondMenu);
                    $node.click(function() {
                        $state.go("profile")

                    })
                }
            });
        }

        var createTree = buildTree;


        $(document).ready(function() {

            // The event listener for the file upload
            document.getElementById('txtFileUpload').addEventListener('change', upload, false);

            // Method that checks that the browser supports the HTML5 File API
            function browserSupportFileUpload() {
                var isCompatible = false;
                if (window.File && window.FileReader && window.FileList && window.Blob) {
                    isCompatible = true;
                }
                return isCompatible;
            }

            // Method that reads and processes the selected file
            function upload(evt) {
                if (!browserSupportFileUpload()) {
                    alert('The File APIs are not fully supported in this browser!');
                } else {
                    var data = null;
                    var file = evt.target.files[0];
                    var reader = new FileReader();
                    reader.readAsText(file);
                    reader.onload = function(event) {
                        var csvData = event.target.result;


                        var jsonData = JSON.parse(CSV2JSON(csvData))

                        OrgChartService.newData = jsonData

                        // localStorage.setItem("chartData", JSON.stringify(jsonData))

                        makeChart(createTree(OrgChartService.newData))


                    };
                    reader.onerror = function() {
                        alert('Unable to read ' + file.fileName);
                    };
                }
            }
        });



        function CSVToArray(strData, strDelimiter) {
            // Check to see if the delimiter is defined. If not,
            // then default to comma.
            strDelimiter = (strDelimiter || ",");
            // Create a regular expression to parse the CSV values.
            var objPattern = new RegExp((
                // Delimiters.
                "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
                // Quoted fields.
                "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
                // Standard fields.
                "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
            // Create an array to hold our data. Give the array
            // a default empty first row.
            var arrData = [
                []
            ];
            // Create an array to hold our individual pattern
            // matching groups.
            var arrMatches = null;
            // Keep looping over the regular expression matches
            // until we can no longer find a match.
            while (arrMatches = objPattern.exec(strData)) {
                // Get the delimiter that was found.
                var strMatchedDelimiter = arrMatches[1];
                // Check to see if the given delimiter has a length
                // (is not the start of string) and if it matches
                // field delimiter. If id does not, then we know
                // that this delimiter is a row delimiter.
                if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
                    // Since we have reached a new row of data,
                    // add an empty row to our data array.
                    arrData.push([]);
                }
                // Now that we have our delimiter out of the way,
                // let's check to see which kind of value we
                // captured (quoted or unquoted).
                if (arrMatches[2]) {
                    // We found a quoted value. When we capture
                    // this value, unescape any double quotes.
                    var strMatchedValue = arrMatches[2].replace(
                        new RegExp("\"\"", "g"), "\"");
                } else {
                    // We found a non-quoted value.
                    var strMatchedValue = arrMatches[3];
                }
                // Now that we have our value string, let's add
                // it to the data array.
                arrData[arrData.length - 1].push(strMatchedValue);
            }
            // Return the parsed data.
            return (arrData);
        }

        function CSV2JSON(csv) {
            var array = CSVToArray(csv);
            var objArray = [];
            for (var i = 1; i < array.length; i++) {
                objArray[i - 1] = {};
                for (var k = 0; k < array[0].length && k < array[i].length; k++) {
                    var key = array[0][k];
                    objArray[i - 1][key] = array[i][k]
                }
            }

            var json = JSON.stringify(objArray);
            var str = json.replace(/},/g, "},\r\n");

            return str;
        }

                        
        if (OrgChartService.newData) {


            makeChart(createTree(OrgChartService.newData))

        } else {

            makeChart(createTree(newData))

        }

        //---------------
    }

}(angular.module("BlurAdmin.pages.OrgChart")));



