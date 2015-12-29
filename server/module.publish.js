'use strict'

Meteor.publish('module', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfModule', Module.find(where), {noReady: true});
  return Module.find(where, options);
});
