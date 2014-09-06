var controllers = angular.module('controllers-category', []);

controllers.controller('CategoryListCtrl', [ '$scope', 'Categories', 'Category',
		'$location', function($scope, Categories, Category, $location) {

			$scope.categories = Categories.query();

			$scope.updateCategoryView = function(categoryId) {
				$location.path('/app/categories/' + categoryId);
			};

			$scope.deleteCategory = function(categoryId) {
				Category.remove({categoryId:categoryId});
				$scope.Categories = Categories.query();
			};

			$scope.createCategoryView = function() {
				$location.path('/app/categories-create');
			};
			
			$scope.showClientView = function() {
				$location.path('/app/Categories-create');
			};

		} ]);

controllers.controller('CategoryDetailCtrl', [ '$scope', '$routeParams', '$location',
		'Category', function($scope, $routeParams, $location, Category) {
			
			$scope.category = Category.show({
				categoryId : $routeParams.categoryId
			});
			
			$scope.updateCategory = function() {
				Category.update($scope.category);
				$location.path('/app/categories');
			};
			
			$scope.cancel = function () {
	            $location.path('/app/categories');
	        };
			
		} ]);

controllers.controller('CategoryCreateCtrl', [ '$scope', 'Categories', '$location',
		function($scope, Categories, $location) {
	
			$scope.createCategory = function() {
				Categories.create($scope.category);
				$location.path('/app/categories');
			};
			
			$scope.cancel = function () {
	            $location.path('/app/categories');
	        };
			
		} ]);