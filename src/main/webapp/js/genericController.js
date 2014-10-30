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

controllers.service('viewCreateEntity', [ 'sharedProperties', '$location',
		'appEntitiesUrl',
		function(sharedProperties, $location) {
			return function(appEntitiesUrl) {
				sharedProperties.setEntityDetails({});
				$location.path(appEntitiesUrl + "-create");
			};
		} ]);

controllers.service('readAllEntities', [ 'RestService', function(RestService) {
	return function(restEntitiesUrl) {
		return RestService(restEntitiesUrl).query();
	};
} ]);

controllers.service('viewEntity', [ 'RestService', 'sharedProperties', function(RestService, sharedProperties) {
	return function(restUrl) {
		sharedProperties.setEntityDetails(RestService(restUrl).get());
		$location.path(appEntitiesUrl + "-detail");
	};
} ]);

controllers.service('updateEntity', [ 'RestService', 'sharedProperties', function(RestService, sharedProperties) {
	return function(restUrl) {
		RestService(restUrl).update($scope.entity);
		sharedProperties.setEntityDetails({});
		$location.path(appEntitiesUrl);
	};
} ]);

controllers.service('deleteEntity', [ 'RestService', function(RestService) {
	return function(restUrl) {
		RestService(restUrl).remove();
		$scope.entities = RestService(restEntitiesUrl).query();
		$location.path(appEntitiesUrl);
	};
} ]);

controllers.service('cancel', function() {
	return function(appEntitiesUrl) {
		$location.path(appEntitiesUrl);
	};
});

/* Entity View Controller */

controllers.controller('EntityViewController', [
		'$scope',
		'RestService',
		'$route',
		'$routeParams',
		'$location',
		'sharedProperties',
		'cancel',
		function($scope, RestService, $route, $routeParams, $location,
				sharedProperties, cancel) {

			/* General variable declarations and functions */

			restEntitiesUrl = $route.current.restEntitiesUrl;
			appEntitiesUrl = $route.current.appEntitiesUrl;

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

			/* Cancel */

			$scope.cancel = cancel();

			/* Categories and Clients */

			$scope.categories = RestService("/categories").query();
			$scope.clients = RestService("/clients").query();

		} ]);

/* List View Controller */

controllers.controller('ListViewController', [
		'$scope',
		'RestService',
		'$route',
		'$routeParams',
		'$location',
		'sharedProperties',
		'viewCreateEntity',
		'viewEntity',
		'readAllEntities',
		'deleteEntity',
		function($scope, RestService, $route, $routeParams, $location,
				sharedProperties, viewCreateEntity, viewEntity,
				readAllEntities, deleteEntity) {

			restEntitiesUrl = $route.current.restEntitiesUrl;
			appEntitiesUrl = $route.current.appEntitiesUrl;

			$scope.viewCreateEntity = viewCreateEntity(appEntitiesUrl);
			$scope.entities = readAllEntities(restEntitiesUrl);
			$scope.viewEntity = viewEntity(restUrl);
			$scope.deleteEntity = deleteEntity(restUrl);

		} ]);

/* Create View Controller */

controllers
		.controller(
				'CreateViewController',
				[
						'$scope',
						'RestService',
						'$route',
						'$routeParams',
						'$location',
						'sharedProperties',
						function($scope, RestService, $route, $routeParams,
								$location, sharedProperties) {

							/* General variable declarations and functions */

							restEntitiesUrl = $route.current.restEntitiesUrl;
							appEntitiesUrl = $route.current.appEntitiesUrl;

							/* Create */

							$scope.createEntity = function() {

								RestService(restEntitiesUrl)
										.save(
												$scope.entity,
												function(data, header) {

													// Save other entities
													// related to this entity

													RestService(
															header('Location'))
															.get().$promise
															.then(function(data) {

																for ( var key in data._links) {
																	if (key != "self") {
																		RestService(
																				data._links[key]["href"])
																				.update(
																						$scope.entity[key]);
																	}
																}
															});

												}, function(error) {
													console.log(error.data);
												});

								$scope.entities = RestService(restEntitiesUrl)
										.query();
								$location.path(appEntitiesUrl);
							};

							/* Cancel */

							$scope.cancel = function() {
								sharedProperties.setEntityDetails({});
								$location.path(appEntitiesUrl);
							};

							/* Categories and Clients */

							$scope.categories = RestService("/categories")
									.query();
							$scope.clients = RestService("/clients").query();

						} ]);

/* Generic Controller */

controllers
		.controller(
				'GenericController',
				[
						'$scope',
						'RestService',
						'$route',
						'$routeParams',
						'$location',
						'sharedProperties',
						function($scope, RestService, $route, $routeParams,
								$location, sharedProperties) {

							/* General variable declarations and functions */

							restEntitiesUrl = $route.current.restEntitiesUrl;
							appEntitiesUrl = $route.current.appEntitiesUrl;

							/* Create */

							$scope.createEntity = function() {

								RestService(restEntitiesUrl)
										.save(
												$scope.entity,
												function(data, header) {

													// Save other entities
													// related to this entity

													RestService(
															header('Location'))
															.get().$promise
															.then(function(data) {

																for ( var key in data._links) {
																	if (key != "self") {
																		RestService(
																				data._links[key]["href"])
																				.update(
																						$scope.entity[key]);
																	}
																}
															});

												}, function(error) {
													console.log(error.data);
												});

								$scope.entities = RestService(restEntitiesUrl)
										.query();
								$location.path(appEntitiesUrl);
							};

							/* View Create */

							$scope.viewCreateEntity = function() {
								sharedProperties.setEntityDetails({});
								$location.path(appEntitiesUrl + "-create");
							};

							/* Read all */

							$scope.entities = RestService(restEntitiesUrl)
									.query();

							/* Read One */

							$scope.entity = sharedProperties.getEntityDetails();

							/* View Entity */

							$scope.viewEntity = function(restUrl) {
								sharedProperties.setEntityDetails(RestService(
										restUrl).get());
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
								$scope.entities = RestService(restEntitiesUrl)
										.query();
								$location.path(appEntitiesUrl);
							};

							/* Cancel */

							$scope.cancel = function() {
								sharedProperties.setEntityDetails({});
								$location.path(appEntitiesUrl);
							};

							/* Categories and Clients */

							$scope.categories = RestService("/categories")
									.query();
							$scope.clients = RestService("/clients").query();

						} ]);
