'use strict';

angular.module('fabSiteDirectoryApp')
.factory('tutorialsdb', [ '$http',  function($http) {

  // Private API
  var tutorialsService = {};

   tutorialsService.tutorials = [];

   //Gets the list of nuclear weapons
   tutorialsService.listTutorials = function(year,cb) {
       $http.get('/data/'+ year +'/tutorials/index.json')
           .success(function(data) {
              console.log(data);
               tutorialsService.tutorials = data;
               cb(data);
           });

       // return tutorialsService.tutorials;
   };




   return tutorialsService;


}]);
