/*global require*/
'use strict';

require.config({
	paths: {
		jquery: '../lib/jquery-1.8.0.min',
		angular: '../lib/angular',
		bootstrap: '../lib/bootstrap',
		angularResource: '../lib/angular-resource',
		angularRoute: '../lib/angular-route',
		echarts: '../lib/echarts',
		macarons: '../lib/macarons',
		'echarts/chart/bar': '../lib/echarts',
    	'echarts/chart/line': '../lib/echarts',
    	'echarts/chart/pie': '../lib/echarts',
    	'echarts/chart/radar': '../lib/echarts',
		filter: 'filters/filters',
		resource: 'services/resource',
		dialog: 'directives/dialog',
		loading: 'directives/loading',
		util: '../plugin/util',
		app: 'modules/main',
		appCtrl: 'controllers/main',
		indexCtrl: 'controllers/index',
		questionCtrl: 'controllers/question',
		oqaCtrl: 'controllers/oqAnalysis'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		angularResource: {deps: ['angular']},
		angularRoute: {deps: ['angular']},
		dialog: {deps: ['jquery', 'angular']},
		loading: {deps: ['angular']},
		bootstrap: {deps: ['jquery']},
		util: {deps: ['jquery']}
	}
});

require(['angular', 'angularResource', 'angularRoute', 'jquery', 'bootstrap',
         'echarts', 'macarons', 'echarts/chart/bar', 'echarts/chart/radar',
         'echarts/chart/line', 'echarts/chart/pie', 
         'filter', 'resource', 'util', 'dialog', 'loading', 'app', 
         'appCtrl', 'indexCtrl', 'questionCtrl', 'oqaCtrl'], function (angular) {
	angular.bootstrap(document, ['mainApp']);
});
