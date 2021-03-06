/**
 *
 */
define(function (require){
	'use strict';

	var angular = require("angular"),
	routes = require("routes");
	require("ui.router");
	require("angularLoadingBar");
	require("pascalprecht.translate");
	require("angularTranslateLoader");
	require("zone");
	var a = angular.module('app',['ui.router','app.zone','cfp.loadingBar','pascalprecht.translate'])
		.config(function($translateProvider,$httpProvider,cfpLoadingBarProvider) {
			$translateProvider.useStaticFilesLoader({
				prefix: 'language/',
				suffix: '.json'
			});
			$translateProvider.preferredLanguage('en');
			$translateProvider.useSanitizeValueStrategy('escape');
			$httpProvider.defaults.useXDomain = true;
			delete $httpProvider.defaults.headers.common['X-Requested-With'];
			cfpLoadingBarProvider.includeSpinner = true;
			cfpLoadingBarProvider.latencyThreshold = 1000;
			cfpLoadingBarProvider.spinnerTemplate = '<img src="img/loader.gif" class="img-responsive" alt="Loader">';
		})
		.config(routes);
  return a;
});