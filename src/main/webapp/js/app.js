angular.module('taxapp', [ 'ngRoute', 'genericController', 'restServices' ])
		.config(
				[
						'$routeProvider',
						function($routeProvider) {

							/* Clients Initialization */

							clientsVars = {
								controller : 'GenericController',
								restEntitiesUrl : '/clients',
								appEntitiesUrl : '/app/clients'
							};

							/*
							 * clientsList = $.extend({ templateUrl :
							 * 'partials/clients-list.html' }, clientsVars);
							 */

							clientsList = $.extend({
								templateUrl : 'partials/clients-list.html',
								controller : 'ListViewController',
								restEntitiesUrl : '/clients',
								appEntitiesUrl : '/app/clients'
							});

							clientsDetails = $.extend({
								templateUrl : 'partials/clients-detail.html'
							}, clientsVars);

							clientsCreate = $.extend({
								templateUrl : 'partials/clients-create.html'
							}, clientsVars);

							/* Categories Initialization */

							categoriesVars = {
								controller : 'GenericController',
								restEntitiesUrl : '/categories',
								appEntitiesUrl : '/app/categories'
							};

							categoriesList = $.extend({
								templateUrl : 'partials/categories-list.html'
							}, categoriesVars);

							categoriesDetails = $.extend({
								templateUrl : 'partials/categories-detail.html'
							}, categoriesVars);

							categoriesCreate = $.extend({
								templateUrl : 'partials/categories-create.html'
							}, categoriesVars);

							/* Expenses Initialization */

							expensesVars = {
								controller : 'GenericController',
								restEntitiesUrl : '/expenses',
								appEntitiesUrl : '/app/expenses'
							};

							expensesList = $.extend({
								templateUrl : 'partials/expenses-list.html'
							}, expensesVars);

							expensesDetails = $.extend({
								templateUrl : 'partials/expenses-detail.html'
							}, expensesVars);

							expensesCreate = $.extend({
								templateUrl : 'partials/expenses-create.html'
							}, expensesVars);

							/* Incomes Initialization */

							incomesVars = {
								controller : 'GenericController',
								restEntitiesUrl : '/incomes',
								appEntitiesUrl : '/app/incomes'
							};

							incomesList = $.extend({
								templateUrl : 'partials/incomes-list.html'
							}, incomesVars);

							incomesDetails = $.extend({
								templateUrl : 'partials/incomes-detail.html'
							}, incomesVars);

							incomesCreate = $.extend({
								templateUrl : 'partials/incomes-create.html'
							}, incomesVars);

							/* Route */

							$routeProvider.when('/', {
								templateUrl : 'partials/home.html'
							}).when('/app/clients', clientsList).when(
									'/app/clients-detail', clientsDetails)
									.when('/app/clients-create', clientsCreate)
									.when('/app/categories', categoriesList)
									.when('/app/categories-detail',
											categoriesDetails).when(
											'/app/categories-create',
											categoriesCreate).when(
											'/app/expenses', expensesList)
									.when('/app/expenses-detail',
											expensesDetails).when(
											'/app/expenses-create',
											expensesCreate).when(
											'/app/incomes', incomesList).when(
											'/app/incomes-detail',
											incomesDetails).when(
											'/app/incomes-create',
											incomesCreate).otherwise({
										redirectTo : '/'
									});
						} ]);