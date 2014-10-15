var controllers = angular.module('controllers-category', []);

controllers.controller('CategoryCtrl', [ '$scope', 'RestService', '$route',
		'$routeParams', '$location',
		function($scope, RestService, $route, $routeParams, $location) {

			/* General variable declarations and functions */
	
			restEntityUrl = $route.current.restEntityUrl;
			appEntityUrl = $route.current.appEntityUrl;

			/* Create */

			$scope.createEntity = function() {
				RestService(restEntityUrl).save($scope.category);
				$location.path(appEntityUrl);
			};

			/* Read all */

			$scope.categories = RestService(restEntityUrl).query();

			/* Read One */

			$scope.category = RestService(restEntityUrl).get({
				id : $routeParams.id
			});

			/* Update */

			$scope.updateEntity = function(url) {
				RestService(url).update($scope.category);
				$location.path(appEntityUrl);
			};

			/* Delete */

			$scope.deleteEntity = function(url) {
				RestService(url).remove();
				$scope.categories = ControllerService.entities(restEntityUrl);
			};

		} ]);
