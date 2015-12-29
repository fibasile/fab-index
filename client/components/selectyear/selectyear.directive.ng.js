'use strict';

angular.module('fabSiteDirectoryApp')
.directive('selectyear', function() {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/selectyear/selectyear.view.ng.html',
    replace: true,
    controller: function($scope,$rootScope){
    	$scope.year = 2016;
    	$scope.years = [
    		2016,
    		2015,
    		2014,
    		2013,
    		2012,
    		2011,
    		2010,
    		2009
    	];

    	$scope.$watch("year", function(newValue, oldValue) {

			$rootScope.$broadcast("SelectedYear", newValue);    			

    	});
    	
    }
  };
});