'use strict'

Meteor.publish('students', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfStudents', Students.find(where), {noReady: true});
  return Students.find(where, options);
});
