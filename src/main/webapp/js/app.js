var taxapp = angular.module('taxapp', [ 'ngRoute', 'genericController',
		'controllers-expense', 'controllers-income',
		'services']);

taxapp.config([ '$routeProvider', function($routeProvider) {
	
	clientRestEntitiesUrl = '/clients';
	clientAppEntitiesUrl = '/app/clients';
	categoryRestEntitiesUrl = '/categories';
	categoryAppEntitiesUrl = '/app/categories';

	$routeProvider.when('/', {
		templateUrl : 'partials/home.html'

	}).when('/app/clients', {
		templateUrl : 'partials/clients-list.html',
		controller : 'GenericController',
		restEntitiesUrl : clientRestEntitiesUrl,
		appEntitiesUrl : categoryAppEntitiesUrl
	}).when('/app/clients/:clientId', {
		templateUrl : 'partials/clients-detail.html',
		controller : 'GenericController',
		restEntitiesUrl : clientRestEntitiesUrl,
		appEntitiesUrl : categoryAppEntitiesUrl
	}).when('/app/clients-create', {
		templateUrl : 'partials/clients-create.html',
		controller : 'GenericController',
		restEntitiesUrl : clientRestEntitiesUrl,
		appEntitiesUrl : categoryAppEntitiesUrl

	}).when('/app/categories', {
		templateUrl : 'partials/categories-list.html',
		controller : 'GenericController',
		restEntitiesUrl : categoryRestEntitiesUrl,
		appEntitiesUrl : categoryAppEntitiesUrl
	}).when('/app/categories/:id', {
		templateUrl : 'partials/categories-detail.html',
		controller : 'GenericController',
		restEntitiesUrl : categoryRestEntitiesUrl,
		appEntitiesUrl : categoryAppEntitiesUrl
	}).when('/app/categories-create', {
		templateUrl : 'partials/categories-create.html',
		controller : 'GenericController',
		restEntitiesUrl : categoryRestEntitiesUrl,
		appEntitiesUrl : categoryAppEntitiesUrl

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