'use strict'

angular.module('fabSiteDirectoryApp')
.controller('TutorialsCtrl', [ '$scope', 'tutorialsdb', 'marked', function($scope, tutorialsdb, marked) {
  $scope.thing = 'i\'m a thing';
  $scope.tutorials = [];

  $scope.$watch(tutorialsdb.tutorials, function(newVal,oldVal,scope){
    $scope.tutorials = tutorialsdb.tutorials;
  });

    $scope.loadTutorial = function(src, cb){

        $http.get(src)
            .success(function(data) {
                var html = marked(data);
                cb(html);
            });
    };







}]);