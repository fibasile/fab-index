'use strict'

Meteor.publish('tutorials', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfTutorials', Tutorials.find(where), {noReady: true});
  return Tutorials.find(where, options);
});
