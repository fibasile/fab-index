'use strict';

angular.module('fabSiteDirectoryApp')
.factory('scheduledb', function() {
  
  // Private API
  var meaningOfLife = 42
  
  // Public API
  return {
    someMethod: function() {
      return meaningOfLife;
    }
  };
});