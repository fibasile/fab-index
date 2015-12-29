Program = new Mongo.Collection('program');

Program.allow({
  insert: function(userId, program) {
    return userId;
  },
  update: function(userId, program, fields, modifier) {
    return userId;
  },
  remove: function(userId, program) {
    return userId;
  }
});