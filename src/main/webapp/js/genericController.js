var controllers = angular.module('genericController', []);

controllers.controller('GenericController', [ '$scope', 'RestService', '$route',
		'$routeParams', '$location',
		function($scope, RestService, $route, $routeParams, $location) {

			/* General variable declarations and functions */
	
			restEntitiesUrl = $route.current.restEntitiesUrl;
			appEntitiesUrl = $route.current.appEntitiesUrl;

			/* Create */

			$scope.createEntity = function() {
				RestService(restEntitiesUrl).save($scope.entity);
				$location.path(appEntitiesUrl);
			};

			/* Read all */

			$scope.entities = RestService(restEntitiesUrl).query();

			/* Read One */

			$scope.entity = RestService(restEntitiesUrl).get({
				id : $routeParams.id
			});
			
			/* View Entity */
			
			$scope.viewEntity = function (restUrl) {
				// To be implemented
			};

			/* Update */

			$scope.updateEntity = function(restUrl) {
				RestService(restUrl).update($scope.entity);
				$location.path(appEntitiesUrl);
			};

			/* Delete */

			$scope.deleteEntity = function(restUrl) {
				RestService(restUrl).remove();
				$scope.entities = RestService(restEntitiesUrl).query();
			};

		} ]);
