var controllers = angular.module('genericController', []);

controllers.service('sharedProperties', function() {
	var entityDetails = {};

	return {
		getEntityDetails : function() {
			return entityDetails;
		},
		setEntityDetails : function(value) {
			entityDetails = value;
		}
	};
});

controllers.controller('GenericController', [
		'$scope',
		'RestService',
		'$route',
		'$routeParams',
		'$location',
		'sharedProperties',
		function($scope, RestService, $route, $routeParams, $location,
				sharedProperties) {

			/* General variable declarations and functions */

			restEntitiesUrl = $route.current.restEntitiesUrl;
			appEntitiesUrl = $route.current.appEntitiesUrl;

			/* Create */

			$scope.createEntity = function() {
				RestService(restEntitiesUrl).save($scope.entity).$promise.then(
						function(value, headers) {
							
							console.log(value);
							
							// Find and Query new entity
							/*console
									.log(RestService(
											value('Location'))
											.query());*/
							// find all under "_links" except "self"

							// Post referenced entity

							// URL for relationship entity
							//console.log($scope.entity.client._links.self.href);
						}, function(error) {
							console.log(error.data);
						});

				$scope.entities = RestService(restEntitiesUrl).query();
				$location.path(appEntitiesUrl);
			};

			/* View Create */

			$scope.viewCreateEntity = function() {
				sharedProperties.setEntityDetails({});
				$location.path(appEntitiesUrl + "-create");
			};

			/* Read all */

			$scope.entities = RestService(restEntitiesUrl).query();

			/* Read One */

			$scope.entity = sharedProperties.getEntityDetails();

			/* View Entity */

			$scope.viewEntity = function(restUrl) {
				sharedProperties.setEntityDetails(RestService(restUrl).get());
				$location.path(appEntitiesUrl + "-detail");
			};

			/* Update */

			$scope.updateEntity = function(restUrl) {
				RestService(restUrl).update($scope.entity);
				sharedProperties.setEntityDetails({});
				$location.path(appEntitiesUrl);
			};

			/* Delete */

			$scope.deleteEntity = function(restUrl) {
				RestService(restUrl).remove();
				$scope.entities = RestService(restEntitiesUrl).query();
				$location.path(appEntitiesUrl);
			};

			/* Cancel */

			$scope.cancel = function() {
				sharedProperties.setEntityDetails({});
				$location.path(appEntitiesUrl);
			};

			/* Categories and Clients */

			$scope.categories = RestService("/categories").query();
			$scope.clients = RestService("/clients").query();

		} ]);
