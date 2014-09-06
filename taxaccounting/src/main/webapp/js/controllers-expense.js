var controllers = angular.module('controllers-expense', []);

controllers.controller('ExpenseListCtrl', [ '$scope', 'Expenses', 'Expense',
		'$location', function($scope, Expenses, Expense, $location) {

			$scope.expenses = Expenses.query();

			$scope.updateExpenseView = function(expenseId) {
				$location.path('/app/expenses/' + expenseId);
			};

			$scope.deleteExpense = function(expenseId) {
				Expense.remove({expenseId:expenseId});
				$scope.expenses = Expenses.query();
			};

			$scope.createExpenseView = function() {
				$location.path('/app/expenses-create');
			};
			
			$scope.showExpenseView = function() {
				$location.path('/app/expenses-create');
			};

		} ]);

controllers.controller('ExpenseDetailCtrl', [ '$scope', '$routeParams', '$location',
		'Expense', function($scope, $routeParams, $location, Expense) {
			
			$scope.expense = Expense.show({
				expenseId : $routeParams.expenseId
			});
			
			$scope.updateExpense = function() {
				Expense.update($scope.expense);
				$location.path('/app/expenses');
			};
			
			$scope.cancel = function () {
	            $location.path('/app/expenses');
	        };
			
		} ]);

controllers.controller('ExpenseCreateCtrl', [ '$scope', 'Expenses', '$location',
		function($scope, Expenses, $location) {
	
			$scope.createExpense = function() {
				Expenses.create($scope.expense);
				$location.path('/app/expenses');
			};
			
			$scope.cancel = function () {
	            $location.path('/app/expenses');
	        };
			
		} ]);