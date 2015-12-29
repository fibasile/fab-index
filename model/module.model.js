Module = new Mongo.Collection('module');

Module.allow({
  insert: function(userId, module) {
    return userId;
  },
  update: function(userId, module, fields, modifier) {
    return userId;
  },
  remove: function(userId, module) {
    return userId;
  }
});