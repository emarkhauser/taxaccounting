var phonecatServices = angular.module('services', [ 'ngResource' ]);

/* Clients */

phonecatServices.factory('Clients', [ '$resource', function($resource) {
	return $resource('http://localhost:8080/clients', {}, {
		query : {
			method : 'GET',
			isArray : false,
		},
		create : {
			method : 'POST'
		}
	});
} ]);

phonecatServices.factory('Client', [ '$resource', function($resource) {
	return $resource('http://localhost:8080/clients/:clientId', {}, {
		show : {
			method : 'GET',
			isArray : false
		},
		update : {
			method : 'PUT',
			params : {
				clientId : '@clientId'
			}
		},
		remove : {
			method : 'DELETE'
		}
	});
} ]);

/* Categories */

phonecatServices.factory('Categories', [ '$resource', function($resource) {
	return $resource('http://localhost:8080/categories', {}, {
		query : {
			method : 'GET',
			isArray : false,
		},
		create : {
			method : 'POST'
		}
	});
} ]);

phonecatServices.factory('Category', [ '$resource', function($resource) {
	return $resource('http://localhost:8080/categories/:categoryId', {}, {
		show : {
			method : 'GET',
			isArray : false
		},
		update : {
			method : 'PUT',
			params : {
				categoryId : '@categoryId'
			}
		},
		remove : {
			method : 'DELETE'
		}
	});
} ]);

/* Expenses */

phonecatServices.factory('Expenses', [ '$resource', function($resource) {
	return $resource('http://localhost:8080/expenses', {}, {
		query : {
			method : 'GET',
			isArray : false,
		},
		create : {
			method : 'POST'
		}
	});
} ]);

phonecatServices.factory('Expense', [ '$resource', function($resource) {
	return $resource('http://localhost:8080/expenses/:expenseId', {}, {
		show : {
			method : 'GET',
			isArray : false
		},
		update : {
			method : 'PUT',
			params : {
				clientId : '@expenseId'
			}
		},
		remove : {
			method : 'DELETE'
		}
	});
} ]);

/* Income */

phonecatServices.factory('Incomes', [ '$resource', function($resource) {
	return $resource('http://localhost:8080/incomes', {}, {
		query : {
			method : 'GET',
			isArray : false,
		},
		create : {
			method : 'POST'
		}
	});
} ]);

phonecatServices.factory('Income', [ '$resource', function($resource) {
	return $resource('http://localhost:8080/incomes/:incomeId', {}, {
		show : {
			method : 'GET',
			isArray : false
		},
		update : {
			method : 'PUT',
			params : {
				clientId : '@incomeId'
			}
		},
		remove : {
			method : 'DELETE'
		}
	});
} ]);