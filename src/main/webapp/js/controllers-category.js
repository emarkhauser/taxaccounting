var controllers = angular.module('controllers-category', []);

controllers.controller('CategoryCtrl', [ '$scope', 'RestService', '$route',
		'$routeParams', '$location',
		function($scope, RestService, $route, $routeParams, $location) {

			/* General variable declarations and functions */
	
			restEntityUrl = $route.current.restEntityUrl;
			appEntityUrl = $route.current.appEntityUrl;

			/* Create */

			$scope.createEntity = function() {
				RestService(restEntityUrl).save($scope.entity);
				$location.path(appEntityUrl);
			};

			/* Read all */

			$scope.entities = RestService(restEntityUrl).query();

			/* Read One */

			$scope.entity = RestService(restEntityUrl).get({
				id : $routeParams.id
			});
			
			/* View Entity */
			
			$scope.viewEntity = function (url) {
				// To be implemented
			};

			/* Update */

			$scope.updateEntity = function(url) {
				RestService(url).update($scope.entity);
				$location.path(appEntityUrl);
			};

			/* Delete */

			$scope.deleteEntity = function(url) {
				RestService(url).remove();
				$scope.entities = RestService(restEntityUrl).query();
			};

		} ]);
