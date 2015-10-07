/**
 *
 */
'use strict';
define([],function () {
	function routes($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/zone');
		$stateProvider
		.state('zone',{
			url: '/zone',
			views: {
				"header":{
					templateUrl: "view/header.html"
			    },
				
				"": {
			        templateUrl: "js/app/zone/zone.html",
			        controller: 'zoneController',
				},
			    "footer":{
					templateUrl: "view/footer.html"
			    }
			}
		});
	}
	routes.$inject=['$stateProvider','$urlRouterProvider'];
	return routes;
});