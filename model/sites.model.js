Sites = new Mongo.Collection('sites');

Sites.allow({
  insert: function(userId, site) {
    return userId;
  },
  update: function(userId, site, fields, modifier) {
    return userId;
  },
  remove: function(userId, site) {
    return userId;
  }
});