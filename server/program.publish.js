'use strict'

Meteor.publish('program', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfProgram', Program.find(where), {noReady: true});
  return Program.find(where, options);
});
