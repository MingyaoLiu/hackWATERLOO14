angular.module('PhoneCtrl', []).controller('PhoneController', function($scope, $http) {

	$scope.tagline = 'The square root of life is pi!';	
	console.log('switched to phone view');
	getPhonelist($scope, $http);

	window.setTimeout(takeback,1000);
});