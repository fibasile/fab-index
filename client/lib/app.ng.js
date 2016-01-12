angular.module('fabSiteDirectoryApp', [
  'angular-meteor',
  'ui.router',
  'ngMaterial',
  'angularUtils.directives.dirPagination',
    'hc.marked'
]);

angular.module('fabSiteDirectoryApp').config(['markedProvider', function(markedProvider) {                                                         // 110
    markedProvider.setOptions({                                                                                  // 111
        gfm: true,                                                                                                  // 112
        tables: true                                                                                              // 116
    });                                                                                                          // 117
}]);

onReady = function() {
  angular.bootstrap(document, ['fabSiteDirectoryApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}
