'use strict'

Meteor.publish('sites', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfSites', Sites.find(where), {noReady: true});
  return Sites.find(where, options);
});
