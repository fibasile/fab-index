'use strict';

angular.module('fabSiteDirectoryApp')
.factory('navigation', function() {
  
  // Private API
  var currentClass = 2016;
  
  // Public API
  return {
    selectedClass: function() {
      return currentClass;
    },
    selectClass: function(aclass){
    	currentClass = aclass;
    }
  };
});