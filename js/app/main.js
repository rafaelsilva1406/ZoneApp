/**
 *
 */
'use strict';

if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define({
	baseUrl: 'js/app',
	waitSeconds: 100,
	packages: ["zone"],
	paths: {
		'domReady': '../components/domReady',
		'jquery': '../components/jquery.min',
		'jquery-ui':'../components/jquery-ui.min',
		'jquery-ui-touch-punch':'../components/jquery.ui.touch-punch.min',
		'angular': '../components/angular.min',
		'ui.router': '../components/angular-ui-router.min',
		'ngMessages':'../components/angular-messages.min',
		'ngAnimate':'../components/angular-animate.min',
		'ui.bootstrap':'../components/ui-bootstrap-tpls-0.13.4.min',
		'ui.bootstrap.showErrors':'../components/showErrors.min',
		'ajoslin.promise-tracker':'../components/promise-tracker',
		'angularLoadingBar':'../components/loading-bar.min',
		'pascalprecht.translate':'../components/angular-translate.min',
		'angularTranslateLoader':'../components/angular-translate-loader-static-files.min',
		'angularTouch':'../components/angular-touch.min',
		'app':'./app.min',
		'routes': './routes.min',
	},
	shim: {
		'jquery-ui':['jquery'],
		'jquery-ui-touch-punch':['jquery-ui','jquery'],
		'angular': {
			deps:['jquery'],
			exports: 'angular',
		},
		'ui.router':['angular'],
		'ngMessages':['angular'],
		'ngAnimate':['angular'],
		'ui.bootstrap':['angular'],
		'ui.bootstrap.showErrors':['angular'],
		'ajoslin.promise-tracker':['angular'],
		'angularLoadingBar':['angular'],
		'pascalprecht.translate':['angular'],
		'angularTranslateLoader':['angular','pascalprecht.translate'],
		'angularTouch':['angular']
	}
});