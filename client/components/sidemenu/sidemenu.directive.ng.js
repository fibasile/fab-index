'use strict';

angular.module('fabSiteDirectoryApp')
.directive('sidemenu', function() {
  return {
    restrict: 'EA',
    templateUrl: 'client/components/sidemenu/sidemenu.view.ng.html',
    replace: true,
    link: function(scope, elem, attrs) {
      scope.property = 'sidemenu';
    },
    controller: function($scope,$rootScope,$meteor){

      $scope.title = '2016'

    	$scope.actions = [
    		{title:'Schedule' , code: 'schedule', label:''},
    		{title:'Labs' , code: 'sites', label:''},
    		{title:'Students' , code: 'students', label:''},
    		{title:'Instructors' , code: 'instructors', label:''},
    		{title:'Tutorials' , code: 'tutorials',label:''},
    		{title:'Projects' , code: 'projects', label:''}
    	];
      $rootScope.$on('SelectedYear', function(ev,newvalue){

          $scope.title = newvalue;

      });


    }
  };
});
