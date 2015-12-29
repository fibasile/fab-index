Students = new Mongo.Collection('students');

Students.allow({
  insert: function(userId, student) {
    return userId;
  },
  update: function(userId, student, fields, modifier) {
    return userId;
  },
  remove: function(userId, student) {
    return userId;
  }
});