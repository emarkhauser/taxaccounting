var restServices = angular.module('services', [ 'ngResource' ]);

restServices.factory('RestService', [ '$resource', function($resource) {
	return function(restEntitiesUrl) {
		return $resource(restEntitiesUrl + '/:id', {
			'id' : '@id'
		}, {
			query : {
				method : 'GET',
				isArray : false
			},
			update : {
				method : 'PUT'
			}
		});
	};
} ]);