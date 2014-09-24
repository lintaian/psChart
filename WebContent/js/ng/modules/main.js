/*global define*/
'use strict';

define(['angular'], function (angular) {
	return angular.module('mainApp', ['myFilters', 'resource', 'ngRoute', 'dialog', 'loading']).
	  config(['$routeProvider', '$sceProvider', function($routeProvider, $sceProvider) {
		  $routeProvider.
		      when('/', {templateUrl: 'tpl/index.html', controller: Index}).
		      when('/question', {templateUrl: 'tpl/question.html', controller: Question}).
		      when('/OQAnalysis', {templateUrl: 'tpl/OQAnalysis.html', controller: OQAnalysis}).
		      otherwise({redirectTo: '/'});
		  $sceProvider.enabled(false);
	  }]);
});
