var crud = angular.module('crudServices', []);

crud.service('CrudService', ['$q', 'RestService', function($q, RestService) {

	this.createEntity = function(entity) {
	};

	this.entities = function(restEntitiesUrl) {
		var deferred = $q.defer();
		deferred.resolve(RestService(restEntitiesUrl).query());
		return deferred.promise;
	};

	this.entity = function(restEntitiesUrl) {
		var deferred = $q.defer();
		deferred.resolve(RestService(restEntitiesUrl).get());
		return deferred.promise;
	};

	this.updateEntity = function(restEntitiesUrl, entity) {
		var deferred = $q.defer();
		deferred.resolve(RestService(restEntitiesUrl).update(entity));
		return deferred.promise;
	};

	this.deleteEntity = function(restEntitiesUrl) {
		var deferred = $q.defer();
		deferred.resolve(RestService(restEntitiesUrl).remove());
		return deferred.promise;
	};

} ]);