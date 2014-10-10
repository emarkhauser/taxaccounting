var controllers = angular.module('controllers-category', []);

// Works
controllers.controller('CategoryCtrl', [ '$scope', 'RestService', '$routeParams',
		'$location', function($scope, RestService, $routeParams, $location) {

			restUrl = {
				'restUrl' : 'categories'
			};

			function entityView() {
				return $location.path('/app/categories-create');
			}
			;

			function entityListView() {
				return $location.path('/app/categories');
			}
			;

			function query_all() {
				return RestService.query(restUrl);
			}
			;

			$scope.categories = query_all();

			$scope.updateCategoryView = function(id) {
				$location.path('/app/categories/' + id);
			};

			$scope.deleteCategory = function(id) {
				RestService.remove(restUrl, {
					id : id
				});
				$scope.categories = query_all();
			};

			$scope.createCategoryView = function() {
				entityView();
			};

			$scope.showCategoryView = function() {
				entityView();
			};

			/* Create */

			$scope.createCategory = function() {
				RestService.save(restUrl, $scope.category);
				entityListView();
			};

			/* Details */

			$scope.category = RestService.get(restUrl, {
				id : $routeParams.categoryId
			});

			$scope.updateCategory = function(id) {
				RestService.update(restUrl, {
					id : id
				}, $scope.category);
				entityListView();
			};

			$scope.cancel = function() {
				entityListView();
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
