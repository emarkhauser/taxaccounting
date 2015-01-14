var controllers = angular.module('genericController', []);

/* Generic Controller */

controllers.service('ControllerService', [ '$location', function($location) {

	/* Cancel */

	this.cancel = function(appEntitiesUrl) {
		$location.path(appEntitiesUrl);
	};

} ]);

controllers.controller('ViewAllController', [ '$scope', '$route', '$location',
		'CrudService', function($scope, $route, $location, CrudService) {

			/* General variable declarations and functions */

			appUrl = '/app';
			restEntitiesUrl = $route.current.restEntitiesUrl;
			appEntitiesUrl = appUrl + restEntitiesUrl;

			/* View Create */

			$scope.viewCreateEntity = function() {
				$location.path(appEntitiesUrl + "-create");
			};

			/* Read all */

			CrudService.entities(restEntitiesUrl).then(function(data) {
				$scope.entities = data;
			}, function(reason) {
				console.log('Failed: ' + reason);
			});

			/* View Entity */

			$scope.viewEntity = function(restUrl) {
				var parser = document.createElement('a');
				parser.href = restUrl;
				$location.path(appUrl + parser.pathname);
			};

			/* Delete */

			$scope.deleteEntity = function(restUrl) {
				CrudService.deleteEntity(restUrl).then(function(data) {
					$location.path(appEntitiesUrl);
				}, function(reason) {
					console.log('Failed: ' + reason);
				});
			};

		} ]);

controllers.controller('ViewEntityController', [
		'$scope',
		'$route',
		'$location',
		'ControllerService',
		'CrudService',
		function($scope, $route, $location, ControllerService, CrudService) {

			/* General variable declarations and functions */

			appUrl = '/app';
			restEntitiesUrl = $route.current.restEntitiesUrl;
			appEntitiesUrl = appUrl + restEntitiesUrl;

			/* Read One */

			CrudService.entity($location.path().replace('/app', '')).then(
					function(data) {
						$scope.entity = data;
					}, function(reason) {
						console.log('Failed: ' + reason);
					});

			/* Update */

			$scope.updateEntity = function(restUrl) {
				CrudService.updateEntity(restUrl, $scope.entity).then(function(data) {
					$location.path(appEntitiesUrl);
				}, function(reason) {
					console.log('Failed: ' + reason);
				});
			};

			/* Cancel */

			$scope.cancel = function() {
				ControllerService.cancel(appEntitiesUrl);
			};

		} ]);

controllers
		.controller(
				'ViewCreateController',
				[
						'$scope',
						'RestService',
						'$route',
						'$location',
						'ControllerService',
						'CrudService',
						function($scope, RestService, $route, $location,
								ControllerService, CrudService) {

							/* General variable declarations and functions */

							appUrl = '/app';
							restEntitiesUrl = $route.current.restEntitiesUrl;
							appEntitiesUrl = appUrl + restEntitiesUrl;

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
								$location.path(appEntitiesUrl);
							};

							/* Cancel */

							$scope.cancel = function() {
								ControllerService.cancel(appEntitiesUrl);
							};

						} ]);
