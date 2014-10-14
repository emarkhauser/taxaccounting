var controllers = angular.module('controllers-category', []);

controllers.controller('CategoryCtrl', [ '$scope', 'RestService',
		'$routeParams', '$location',
		function($scope, RestService, $routeParams, $location) {

			/* General variable declarations and functions */

			restEntityUrl = '/categories';
			appEntityUrl = '/app/categories';

			/* Create */

			$scope.createEntity = function() {
				RestService(restEntityUrl).save($scope.category);
				$location.path(appEntityUrl);
			};

			/* Read all */

			$scope.category = RestService(restEntityUrl).query();

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
