Meteor.startup(function() {
  if(Students.find().count() === 0) {
    var students = [
      {
        'name': 'student 1'
      },
      {
        'name': 'student 2'
      }
    ];
    students.forEach(function(student) {
      Students.insert(student);
    });
  }
});