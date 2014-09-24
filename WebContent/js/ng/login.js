/*global require*/
'use strict';

require.config({
	paths: {
		jquery: '../lib/jquery-1.8.0.min',
		angular: '../lib/angular',
		bootstrap: '../lib/bootstrap',
		angularResource: '../lib/angular-resource',
		angularRoute: '../lib/angular-route',
		resource: 'services/resource',
		filter: 'filters/filters',
		app: 'modules/login',
		appCtrl: 'controllers/login'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		angularResource: {deps: ['angular']},
		angularRoute: {deps: ['angular']},
		bootstrap: {deps: ['jquery']}
	}
});

require(['angular', 'angularResource', 'angularRoute', 'jquery', 'bootstrap',
         'resource', 'filter', 
         'app', 'appCtrl'], function (angular) {
	angular.bootstrap(document, ['loginApp']);
});
