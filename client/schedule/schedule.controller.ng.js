'use strict'

angular.module('fabSiteDirectoryApp')
.controller('ScheduleCtrl', function($scope) {
  $scope.thing = 'i\'m a thing';


  $scope.schedule = [
    		{
  			date: '27 Jan 2016',
  			title: 'Principles and practices',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/principles_practices/index.html',
  			lecturer: 'N.Gershenfeld',
  		},
  		{
  			date: '27 Jan 2016',
  			title: 'Project management',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/project_management/index.html',
  			lecturer: 'N.Gershenfeld'
  		},
      {
  			date: '3 Feb 2016',
  			title: 'Computer Aided Design',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/computer_design/index.html',
  			lecturer: 'N.Gershenfeld'
  		},
      {
  			date: '10 Feb 2016',
  			title: 'Computer Controlled Cutting',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/computer_cutting/index.html',
  			lecturer: 'N.Gershenfeld'
  		},
      {
  			date: '17 Feb 2016',
  			title: 'Electronics production',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/electronics_production/index.html',
  			lecturer: 'N.Gershenfeld'
  		},
      {
  			date: '24 Feb 2016',
  			title: '3D Scanning and Printing',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/scanning_printing/index.html',
  			lecturer: 'N.Gershenfeld'
  		},
      {
  			date: '2 Mar 2016',
  			title: 'Electronics Design',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/electronics_design/index.html',
  			lecturer: 'N.Gershenfeld'
  		},
      {
  			date: '9 Mar 2016',
  			title: 'Computer Controlled Machining',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/computer_machining/index.html',
  			lecturer: 'N.Gershenfeld'
  		},
      {
  			date: '16 Mar 2016',
  			title: 'Embedded Programming',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/embedded_programming/index.html',
  			lecturer: 'N.Gershenfeld'
  		},
      {
  			date: '23 Mar 2016',
  			title: 'Molding and Casting',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/molding_casting/index.html',
  			lecturer: 'N.Gershenfeld'
  		},
      {
  			date: '6 Apr 2016',
  			title: 'Input Devices',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/input_devices/index.html',
  			lecturer: 'N.Gershenfeld'
  		},
      {
  			date: '13 Apr 2016',
  			title: 'Output Devices',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/output_devices/index.html',
  			lecturer: 'N.Gershenfeld'
  		},
      {
        date: '20 Apr 2016',
  			title: 'Composites',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/composites/index.html',
  			lecturer: 'N.Gershenfeld'
      },
      {
        date: '27 Apr 2016',
        title: 'Networking and communications',
        lecture_notes: 'http://academy.cba.mit.edu/classes/networking_communications/index.html',
        lecturer: 'N.Gershenfeld'
      },
      {
        date: '4 May 2016',
        title: 'Mechanical design',
        lecture_notes: 'http://academy.cba.mit.edu/classes/mechanical_design/index.html',
        lecturer: 'N.Gershenfeld'
      },
      {
        date: '4 May 2016',
        title: 'Machine design',
        lecture_notes: 'http://academy.cba.mit.edu/classes/machine_design/index.html',
        lecturer: 'N.Gershenfeld'
      },
      {
        date: '11 May 2016',
        title: 'Interface and application programming',
        lecture_notes: 'http://academy.cba.mit.edu/classes/interface_application_programming/index.html',
        lecturer: 'N.Gershenfeld'
      },
      {
        date: '18 May 2016',
        title: 'Applications and implications',
        lecture_notes: 'http://academy.cba.mit.edu/classes/applications_implications/index.html',
        lecturer: 'N.Gershenfeld'
      },
      {
        date: '25 May 2016',
        title: 'Invention, Intellectual Property and Income',
        lecture_notes: 'http://academy.cba.mit.edu/classes/project_management/index.html',
        lecturer: 'N.Gershenfeld'
      },
      {
        date: '1 Jun 2016',
        title: 'Project development',
        lecture_notes: 'http://academy.cba.mit.edu/classes/project_management/index.html',
        lecturer: 'N.Gershenfeld'
      },
      {
        date: '8 Jun 2016',
        title: 'Machine presentations',
        lecture_notes: 'http://academy.cba.mit.edu/classes/project_management/index.html',
        lecturer: 'N.Gershenfeld'
      },
      {
        date: '10 Jun 2016',
        title: 'Machine presentations',
        lecture_notes: 'http://academy.cba.mit.edu/classes/project_management/index.html',
        lecturer: 'N.Gershenfeld'
      },
      {
        date: '15 Jun 2016',
        title: 'Final project presentations',
        lecture_notes: 'http://academy.cba.mit.edu/classes/project_management/index.html',
        lecturer: 'N.Gershenfeld'
      },
      {
        date: '17 Jun 2016',
        title: 'Final project presentations',
        lecture_notes: 'http://academy.cba.mit.edu/classes/project_management/index.html',
        lecturer: 'N.Gershenfeld'
      },



  ];

    $scope.recitations = [
    		{
  			date: 'tbd',
  			title: 'Principles and practices',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/principles_practices/index.html'
  		},
  		{
  			date: 'tbd',
  			title: 'Project management',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/project_management/index.html'
  		}
  ];

    $scope.bootcamps = [
    		{
  			date: 'tbd',
  			title: 'Introductory bootcamp',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/principles_practices/index.html',
			lecturer: 'Fab Academy Faculty'

  		},
  		{
  			date: 'tbd',
  			title: 'Advanced bootcamp',
  			lecture_notes: 'http://academy.cba.mit.edu/classes/project_management/index.html',
			lecturer: 'Fab Academy Faculty'
  		}
  ];
});
