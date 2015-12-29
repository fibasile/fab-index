'use strict'

angular.module('fabSiteDirectoryApp')
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('blue')
  .accentPalette('green');
});

