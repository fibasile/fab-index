Instructors = new Mongo.Collection('instructors');

Instructors.allow({
  insert: function(userId, instructor) {
    return userId;
  },
  update: function(userId, instructor, fields, modifier) {
    return userId;
  },
  remove: function(userId, instructor) {
    return userId;
  }
});