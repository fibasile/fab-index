'use strict'

angular.module('fabSiteDirectoryApp')
.controller('MainCtrl', ['$scope','$meteor', '$rootScope', '$state', function($scope, $meteor,$rootScope,$state) {
  $scope.page = 1;
  $scope.perPage = 3;
  $scope.sort = {name_sort : 1};
  $scope.orderProperty = '1';

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

  $scope.selectYear = function(y){

    $rootScope.$broadcast("SelectedYear", y);

    $state.go('schedule');
  };


}]);
