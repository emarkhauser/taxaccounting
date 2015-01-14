angular.module('taxapp',
		[ 'ngRoute', 'genericController', 'restServices', 'crudServices' ])
		.config([ '$routeProvider', function($routeProvider) {

			$routeProvider.when('/', {
				templateUrl : 'partials/home.html'
			}).otherwise({
				redirectTo : '/'
			});
			
			var appUrl = '/app/';
			var partials = 'partials/';

			function routeBuilder(type) {
				$routeProvider.when(appUrl + type, {
					templateUrl : partials + type + '-list.html',
					controller : 'ViewAllController',
					restEntitiesUrl : '/' + type,
					resolve : {
						entities : function(CrudService) {
							return CrudService.entities('/' + type);
						}
					}
				}).when(appUrl + type + '/:id', {
					templateUrl : partials + type + '-detail.html',
					controller : 'ViewEntityController',
					restEntitiesUrl : '/' + type,
					resolve : {
						entity : function(CrudService) {
							return CrudService.entity('/' + type);
						}
					}
				}).when(appUrl + type + '-create', {
					templateUrl : partials + type + '-create.html',
					controller : 'ViewCreateController',
					restEntitiesUrl : '/' + type,
				});
			}
			;

			routeBuilder('clients');
			routeBuilder('categories');
			routeBuilder('incomes');
			routeBuilder('expenses');

		} ]);