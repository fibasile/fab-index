'use strict'

angular.module('fabSiteDirectoryApp')
.config(function($stateProvider) {
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'client/main/main.view.ng.html',
    controller: 'MainCtrl'
  })
  .state('schedule', {
  	url: '/schedule',
    templateUrl: 'client/schedule/schedule.controller.ng.html',
    controller: 'ScheduleCtrl'
  	}
  	)
  .state('sites', {
  	url: '/sites',
    templateUrl: 'client/site/sites.view.ng.html',
    controller: 'SiteCtrl'
  	}
  	)
  .state('students', {
  	url: '/students',
    templateUrl: 'client/students/students.controller.ng.html',
    controller: 'StudentsCtrl'
  	}
  	)
  .state('instructors', {
  	url: '/instructors',
    templateUrl: 'client/instructors/instructors.controller.ng.html',
    controller: 'InstructorsCtrl'
  	}
  	)
  .state('projects', {
  	url: '/projects',
    templateUrl: 'client/projects/projects.controller.ng.html',
    controller: 'ProjectsCtrl'
  	}
  	)
  .state('tutorials', {
  	url: '/tutorials',
    templateUrl: 'client/tutorials/tutorials.controller.ng.html',
    controller: 'TutorialsCtrl'
  	}
  	)
  ;

});
