'use strict'

angular.module('fabSiteDirectoryApp')
.directive('toolbar', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
    replace: true,
    controller: function($scope,$rootScope){

    	$scope.selectedClass = 2016;
      $scope.actions = [
        {title:'Schedule' , code: 'schedule', label:''},
        {title:'Labs' , code: 'sites', label:''},
        {title:'Students' , code: 'students', label:''},
        {title:'Instructors' , code: 'instructors', label:''},
        {title:'Tutorials' , code: 'tutorials',label:''},
        {title:'Projects' , code: 'projects', label:''}
      ];
    	$rootScope.$on("SelectedYear",function(ev,year){

    		$scope.selectedClass = year;

    	});

    }
  };
});
