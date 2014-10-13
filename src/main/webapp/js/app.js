var taxapp = angular.module('taxapp', [ 'ngRoute', 'controllers-client',
		'controllers-category', 'controllers-expense', 'controllers-income',
		'services', 'controllerService']);

taxapp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'partials/home.html'

	}).when('/app/clients', {
		templateUrl : 'partials/clients-list.html',
		controller : 'ClientListCtrl'
	}).when('/app/clients/:clientId', {
		templateUrl : 'partials/clients-detail.html',
		controller : 'ClientDetailCtrl'
	}).when('/app/clients-create', {
		templateUrl : 'partials/clients-create.html',
		controller : 'ClientCreateCtrl'

	}).when('/app/categories', {
		templateUrl : 'partials/categories-list.html',
		controller : 'CategoryCtrl'
	}).when('/app/categories/:id', {
		templateUrl : 'partials/categories-detail.html',
		controller : 'CategoryCtrl'
	}).when('/app/categories-create', {
		templateUrl : 'partials/categories-create.html',
		controller : 'CategoryCtrl'

	}).when('/app/expenses', {
		templateUrl : 'partials/expenses-list.html',
		controller : 'ExpenseListCtrl'
	}).when('/app/expenses/:categoryId', {
		templateUrl : 'partials/expenses-detail.html',
		controller : 'ExpenseDetailCtrl'
	}).when('/app/expenses-create', {
		templateUrl : 'partials/expenses-create.html',
		controller : 'ExpenseCreateCtrl'

	}).when('/app/incomes', {
		templateUrl : 'partials/incomes-list.html',
		controller : 'IncomeListCtrl'
	}).when('/app/incomes/:categoryId', {
		templateUrl : 'partials/incomes-detail.html',
		controller : 'IncomeDetailCtrl'
	}).when('/app/incomes-create', {
		templateUrl : 'partials/incomes-create.html',
		controller : 'IncomeCreateCtrl'

	}).otherwise({
		redirectTo : '/'
	});
} ]);