var controllers = angular.module('controllers-income', []);

controllers.controller('IncomeListCtrl', [ '$scope', 'Incomes', 'Income',
		'$location', function($scope, Incomes, Income, $location) {

			$scope.incomes = Incomes.query();

			$scope.updateIncomeView = function(incomeId) {
				$location.path('/app/incomes/' + incomeId);
			};

			$scope.deleteIncome = function(incomeId) {
				Income.remove({incomeId:incomeId});
				$scope.Incomes = Incomes.query();
			};

			$scope.createIncomeView = function() {
				$location.path('/app/incomes-create');
			};
			
			$scope.showIncomeView = function() {
				$location.path('/app/incomes-create');
			};

		} ]);

controllers.controller('IncomeDetailCtrl', [ '$scope', '$routeParams', '$location',
		'Income', function($scope, $routeParams, $location, Income) {
			
			$scope.income = Income.show({
				incomeId : $routeParams.incomeId
			});
			
			$scope.updateIncome = function() {
				Income.update($scope.income);
				$location.path('/app/incomes');
			};
			
			$scope.cancel = function () {
	            $location.path('/app/incomes');
	        };
			
		} ]);

controllers.controller('IncomeCreateCtrl', [ '$scope', 'Incomes', 'Clients', '$location',
		function($scope, Incomes, Clients, $location) {
	
		    $scope.clients = Clients.query();
	
			$scope.createIncome = function() {
				Incomes.create($scope.income);
				$location.path('/app/incomes');
			};
			
			$scope.cancel = function () {
	            $location.path('/app/incomes');
	        };
			
		} ]);