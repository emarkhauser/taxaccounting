var controllerService = angular.module('controllerService', [ 'ngResource' ]);

/* http://www.masnun.com/2013/08/28/rest-access-in-angularjs-using-ngresource.html */

controllerService.service('ControllerService', [ 'RestService',
		'$routeParams', '$location',
		function(RestService, $routeParams, $location) {

			this.createEntity = function(restEntityUrl, entityListViewLocation, entityScope) {
				RestService(restEntityUrl).save(entityScope);
				$location.path(entityListViewLocation);
			};
			
		} ]);
