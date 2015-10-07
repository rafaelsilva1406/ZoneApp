 /**
 *
 */
define(function (require){
	'use strict';
	var h = require("./zoneModule");
    function zoneController($scope,zoneService,cfpLoadingBar,promiseTracker) {
    	 var $promise = {};
		$scope.grocery = {};
		$scope.isDisabled = false;
		$scope.list = [];
        $scope.responseMessage = '';
        $scope.progress = promiseTracker();
		cfpLoadingBar.start();
		$scope.groceryList = zoneService.getGrocery();
		cfpLoadingBar.complete();

		$scope.submit = function (grocery) {
			cfpLoadingBar.start();
			$scope.itemForm.$setPristine();
			$scope.groceryList.push({name:grocery.item});
			$scope.grocery = {};
			cfpLoadingBar.complete();
		}; 
    }

    return h.controller("zoneController", zoneController);
});