angular.module('restServices', [ 'ngResource' ]).factory('RestService',
		[ '$resource', function($resource) {
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