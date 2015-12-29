'use strict';

angular.module('fabSiteDirectoryApp')
.factory('studentdb', function($http) {

  // Private API
  var studentService = {};

   studentService.students = [];

   //Gets the list of nuclear weapons
   studentService.getStudents = function(year,cb) {
       $http.get('/data/'+ year +'/students.json')
           .success(function(data) {
              console.log(data);
               studentService.students = data;
               cb(data);
           });

       return studentService.students;
   };

   return studentService;


});
