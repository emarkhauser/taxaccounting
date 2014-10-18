var restServices = angular.module('restServices', [ 'ngResource' ]);

restServices.factory('RestService', [ '$resource', function($resource) {
	return function(restEntitiesUrl) {
		return $resource(restEntitiesUrl, {}, {
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