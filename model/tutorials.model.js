Tutorials = new Mongo.Collection('tutorials');

Tutorials.allow({
  insert: function(userId, tutorial) {
    return userId;
  },
  update: function(userId, tutorial, fields, modifier) {
    return userId;
  },
  remove: function(userId, tutorial) {
    return userId;
  }
});