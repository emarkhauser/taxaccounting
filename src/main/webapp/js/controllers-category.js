var controllers = angular.module('controllers-category', []);

// Works
controllers.controller('CategoryCtrl', [ '$scope', 'RestService', '$routeParams',
		'$location', function($scope, RestService, $routeParams, $location) {
	
			/* General variable declarations and functions */
	
			restEntityUrl = '/categories';

			function entityListView() {
				return $location.path('/app/categories');
			}
			;

			function query_all() {
				return RestService(restEntityUrl).query();
			}
			;

			/* Create */

			$scope.createCategory = function() {
				RestService(restEntityUrl).save($scope.category);
				entityListView();
			};

			/* Read all */
			
			$scope.categories = query_all();
			
			/* Read One */

			$scope.category = RestService(restEntityUrl).get({
				id : $routeParams.id
			});
			
			/* Update */
			
			$scope.updateCategory = function(url) {
				RestService(url).update($scope.category);
				entityListView();
			};
			
			/* Delete */
			
			$scope.deleteCategory = function(url) {
				RestService(url).remove();
				$scope.categories = query_all();
			};

		} ]);

/*
 * controllers.controller('CategoryListCtrl', [ '$scope', 'Categories',
 * 'Category', '$location', function($scope, Categories, Category, $location) {
 * 
 * $scope.categories = Categories.query();
 * 
 * $scope.updateCategoryView = function(categoryId) {
 * $location.path('/app/categories/' + categoryId); };
 * 
 * $scope.deleteCategory = function(categoryId) { Category.remove({ categoryId :
 * categoryId }); $scope.Categories = Categories.query(); };
 * 
 * $scope.createCategoryView = function() {
 * $location.path('/app/categories-create'); };
 * 
 * $scope.showClientView = function() {
 * $location.path('/app/Categories-create'); }; } ]);
 * 
 * controllers.controller('CategoryDetailCtrl', [ '$scope', '$routeParams',
 * '$location', 'Category', function($scope, $routeParams, $location, Category) {
 * 
 * $scope.category = Category.show({ categoryId : $routeParams.categoryId });
 * 
 * $scope.updateCategory = function() { Category.update($scope.category);
 * $location.path('/app/categories'); };
 * 
 * $scope.cancel = function() { $location.path('/app/categories'); }; } ]);
 * 
 * controllers.controller('CategoryCreateCtrl', [ '$scope', 'Categories',
 * '$location', function($scope, Categories, $location) {
 * 
 * $scope.createCategory = function() { Categories.create($scope.category);
 * $location.path('/app/categories'); };
 * 
 * $scope.cancel = function() { $location.path('/app/categories'); }; } ]);
 */
