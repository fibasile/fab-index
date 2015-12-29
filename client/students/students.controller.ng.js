'use strict'

angular.module('fabSiteDirectoryApp')
.controller('StudentsCtrl', ['$scope', 'studentdb', function($scope,studentdb) {
  $scope.students = [];
  $scope.labs = [];
  $scope.selectedLab = null;

   studentdb.getStudents('2015', function(students){
     $scope.students = students;

     var log = [];
     angular.forEach(students, function(value, key) {
        if (!log.includes(value.lab)){
          this.push(value.lab);
        }
    }, log);

     $scope.labs =log;
     $scope.selectedLab = log[0];

  });


  $scope.studentsByLab = function(lab){

    if (lab == 'all') return $scope.students;

    return $scope.students.filter(function(element){
      return element.lab == lab;
    });
  }

}]);
