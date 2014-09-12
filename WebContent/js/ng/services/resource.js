/*global define*/
'use strict';

define(['angular'], function(angular) {
	return angular.module('resource', ['ngResource']).constant('cfg', {
		baseUrl: ''
	}).factory('User', ['$resource', 'cfg', function($resource, cfg) {
		return $resource(cfg.baseUrl + 'login',{},{
			'login' : {method: 'POST'},
			'report': {method: 'POST', url: cfg.baseUrl + 'report'},
			'reportStatus': {method: 'GET', url: cfg.baseUrl + 'report/status'}
		});
	}]);
});