var controllers = angular.module('controllers-category', []);

controllers.controller('CategoryListCtrl', [ '$scope', 'RestServices',
		'RestService', '$location',
		function($scope, RestServices, RestService, $location) {

			$scope.categories = RestServices.query({
				'restUrl' : 'categories'
			});

			$scope.updateCategoryView = function(id) {
				$location.path('/app/categories/' + id);
			};

			$scope.deleteCategory = function(categoryId) {
				RestService.remove({
					'restUrl' : 'categories'
				}, {
					id : categoryId
				});
				$scope.Categories = RestServices.query();
			};

			$scope.createCategoryView = function() {
				$location.path('/app/categories-create');
			};

			$scope.showClientView = function() {
				$location.path('/app/categories-create');
			};

		} ]);

controllers.controller('CategoryDetailCtrl', [ '$scope', '$routeParams',
		'$location', 'RestService',
		function($scope, $routeParams, $location, RestService) {

			$scope.category = RestService.show({
				id : $routeParams.categoryId
			});

			$scope.updateCategory = function() {
				RestService.update({
					'restUrl' : 'categories'
				}, $scope.category);
				$location.path('/app/categories');
			};

			$scope.cancel = function() {
				$location.path('/app/categories');
			};

		} ]);

controllers.controller('CategoryCreateCtrl', [ '$scope', 'RestServices',
		'$location', function($scope, RestServices, $location) {

			$scope.createCategory = function() {
				RestServices.create({
					'restUrl' : 'categories'
				}, ($scope.category));
				$location.path('/app/categories');
			};

			$scope.cancel = function() {
				$location.path('/app/categories');
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
 * $location.path('/app/Categories-create'); };
 *  } ]);
 * 
 * controllers.controller('CategoryDetailCtrl', [ '$scope', '$routeParams',
 * '$location', 'Category', function($scope, $routeParams, $location, Category) {
 * 
 * $scope.category = Category.show({ categoryId : $routeParams.categoryId });
 * 
 * $scope.updateCategory = function() { Category.update($scope.category);
 * $location.path('/app/categories'); };
 * 
 * $scope.cancel = function() { $location.path('/app/categories'); };
 *  } ]);
 * 
 * controllers.controller('CategoryCreateCtrl', [ '$scope', 'Categories',
 * '$location', function($scope, Categories, $location) {
 * 
 * $scope.createCategory = function() { Categories.create($scope.category);
 * $location.path('/app/categories'); };
 * 
 * $scope.cancel = function() { $location.path('/app/categories'); };
 *  } ]);
 */
