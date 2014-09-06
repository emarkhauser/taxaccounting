var controllers = angular.module('controllers-client', []);

controllers.controller('ClientListCtrl', [ '$scope', 'Clients', 'Client',
		'$location', function($scope, Clients, Client, $location) {

			$scope.clients = Clients.query();

			$scope.updateClientView = function(clientId) {
				$location.path('/app/clients/' + clientId);
			};

			$scope.deleteClient = function(clientId) {
				Client.remove({
					clientId : clientId
				});
				$scope.clients = Clients.query();
			};

			$scope.createClientView = function() {
				$location.path('/app/clients-create');
			};

			$scope.showClientView = function() {
				$location.path('/app/clients-create');
			};

		} ]);

controllers.controller('ClientDetailCtrl', [ '$scope', '$routeParams',
		'$location', 'Client',
		function($scope, $routeParams, $location, Client) {

			$scope.client = Client.show({
				clientId : $routeParams.clientId
			});

			$scope.updateClient = function() {
				Client.update($scope.client);
				$location.path('/app/clients');
			};

			$scope.cancel = function() {
				$location.path('/app/clients');
			};

		} ]);

controllers.controller('ClientCreateCtrl', [ '$scope', 'Clients', '$location',
		function($scope, Clients, $location) {

			$scope.createClient = function() {
				Clients.create($scope.client);
				$location.path('/app/clients');
			};

			$scope.cancel = function() {
				$location.path('/app/clients');
			};

		} ]);