'use strict'

angular.module('fabSiteDirectoryApp')
.controller('SiteCtrl',['$scope', function($scope) {
  $scope.thing = 'i\'m a thing';


  // $scope.sites = $scope.$meteorCollection(function(){
  //
  //   return
   $scope.sites = [
      { name: 'BARCELONA'},
      { name: 'GREEN FAB LAB'},
      { name: 'SITGES'},
      { name: 'DEUSTO'},
      { name: 'ASTURIAS'},
      { name: 'LEON'},
      { name: 'MADRID - PRADO'},
      { name: 'MADRID - UE'},
      { name: 'MADRID CEU'},
      { name: 'WOMA/VOLUME (Paris)'},
      { name: 'EDP (Lisboa)'},
      { name: 'GRENOBLE'},
      { name: 'DIGISCOPE'},
      { name: 'WEMAKE'},
      { name: 'OPENDOT'},
      { name: 'OLBIA'},
      { name: 'CAGLIARI'},
      { name: 'SPQWORK'},
      { name: 'PALERMO'},
      { name: 'TOSCANA'},
      { name: 'FROSINONE'},
      { name: 'TORINO'},
      { name: 'MANCHESTER'},
      { name: 'LONDON'},
      { name: 'Fab Lab F [Fellesverkstedet]'},
      { name: 'Vestmannaeyjar'},
      { name: 'REYKJAVIK'},
      { name: 'OULU'},
      { name: 'AALTO'},
      { name: 'AMSTERDAM'},
      { name: 'AJACCIO (Corsica)'},
      { name: 'Kamp-Lintfort'},
      { name: 'Aachen (RWTH Aachen University)'},
      { name: 'HRW FabLab '},
      { name: 'WELLINGTON'},
      { name: 'PROVIDENCE - AS220'},
      { name: 'ECHOLAB'},
      { name: 'DETROIT'},
      { name: 'BALTIMORE'},
      { name: 'LCCC'},
      { name: 'TULSA'},
      { name: 'THREE LAKES'},
      { name: 'CHARLOTTE LATIN '},
      { name: 'California State University Bakersfield'},
      { name: 'Carnegie Science Center, Pittsburgh, Pennsylvania'},
      { name: 'Gregory School'},
      { name: 'ESAN (Lima)'},
      { name: 'TECSUP (Lima)'},
      { name: 'FAB LAB SANTIAGO'},
      { name: 'CIUDAD DE MEXICO'},
      { name: 'MONTERREY'},
      { name: 'PUEBLA'},
      { name: 'CALI (Colombia)'},
      { name: 'YACHAY (ECUADOR)'},
      { name: '3DlabUIO (ECUADOR)'},
      { name: 'DHAHRAN'},
      { name: 'ISRAEL'},
      { name: 'NAMIBIA'},
      { name: 'EGYPT'},
      { name: 'Vigyan Ashram'},
      { name: 'Fablab Trivandrum (Kerala)'},
      { name: 'Fablab Tembisa (Ekurhuleni fablabs )'},
      { name: 'SEOUL'},
      { name: 'TAINAN'},
      { name: 'TAIPEI'},
      { name: 'SINGAPORE'},
      { name: 'SENDAI'},
      { name: 'KAMAKURA'},
      { name: 'HAMAMATSU'},
      { name: 'SHANGHAI'},
      { name: 'FAB LAB XH (CHINA)'},
      { name: 'NANJIN'},
      { name: 'KUYUSHU UNI (FUKUOA)'}
    ];

    // return Sites.find({}, {sort:$scope.getReactively('sort')});
  // });

  $scope.supernodes = [
       { name: 'BARCELONA'},
       { name: 'REYKJAVIK'},
        { name: 'PROVIDENCE - AS220'},
              { name: 'DETROIT'},
              { name: 'SITGES'},
              { name: 'OPENDOT MILAN'},
              { name: 'TOSCANA'},
              { name: 'DETROIT'},
              { name: 'KAMAKURA'},
              { name: 'WELLINGTON'},
              { name: 'LEON'},
              { name: 'PARIS'},
              { name: 'TAIPEI'},
              { name: 'ISRAEL'}



  ];
  // $scope.$meteorCollection(function(){
  //   return Sites.find({}, {sort:$scope.getReactively('sort')});
  // });

  // $meteor.autorun($scope, function() {
  //
  //   $scope.$meteorSubscribe('sites', {}, $scope.getReactively('search')).then(function() {
  //     $scope.sitesCount = $scope.$meteorObject(Counts, 'numberOfSites', false);
  //   });
  //
  // });
  //
  //
  // $scope.save = function() {
  //   if($scope.form.$valid) {
  //     $scope.sites.save($scope.newSite);
  //     $scope.newSite = undefined;
  //   }
  // };
  //
  // $scope.remove = function(thing) {
  //   $scope.sites.remove(thing);
  // };

}]);
