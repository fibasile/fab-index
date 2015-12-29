'use strict'

Meteor.publish('instructors', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfInstructors', Instructors.find(where), {noReady: true});
  return Instructors.find(where, options);
});
