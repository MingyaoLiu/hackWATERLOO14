angular.module('PhoneCtrl', []).controller('PhoneController', function($scope) {

	$scope.tagline = 'The square root of life is pi!';	
	
	window.setTimeout(takeback,1000);

//	$scope.linkScrolls = function() {
//		jQuery('.leftseg').scroll(function(){
//	    	jQuery('.leftseg').scrollTop(jQuery('.rightseg').scrollTop());    
//		});
//		jQuery('.rightseg').scroll(function(){
//	    	jQuery('.rightseg').scrollTop(jQuery('.leftseg').scrollTop());    
//		})
//	}
});