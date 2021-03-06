/**
 *
 */
define(function (require) {
	"use strict";
	var angular = require("angular");
	require("angularLoadingBar");
	require("ui.bootstrap");
	require("ui.bootstrap.showErrors");
	require("ajoslin.promise-tracker");
	require("ngAnimate");
	require("angularTouch");
	var a = angular.module('app.zone', ['cfp.loadingBar','ui.bootstrap','ui.bootstrap.showErrors','ajoslin.promise-tracker','ngAnimate','ngTouch'])
	.config(['showErrorsConfigProvider', function(showErrorsConfigProvider) {
		showErrorsConfigProvider.showSuccess(true);
	}])
	.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);
	return a;
});