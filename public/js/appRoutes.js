angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/tablets', {
			templateUrl: 'views/tablet.html',
			controller: 'TabletController'
		})

		.when('/phones', {
			templateUrl: 'views/phone.html',
			controller: 'PhoneController'	
		});

	$locationProvider.html5Mode(true);

}]);