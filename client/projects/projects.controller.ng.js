'use strict'

angular.module('fabSiteDirectoryApp')
.controller('ProjectsCtrl', function($scope,$mdSidenav) {
  $scope.thing = 'i\'m a thing';

  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
});