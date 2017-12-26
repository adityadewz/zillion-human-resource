(function(app){

	app.factory("OrgChartService",[OrgChartService])

	function OrgChartService()
	{
		return {
			newData:newData
		}

		var newData={};
	}

}(angular.module("BlurAdmin.pages.OrgChart")));