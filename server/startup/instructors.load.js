Meteor.startup(function() {
  if(Instructors.find().count() === 0) {
    var instructors = [
      {
        'name': 'instructor 1'
      },
      {
        'name': 'instructor 2'
      }
    ];
    instructors.forEach(function(instructor) {
      Instructors.insert(instructor);
    });
  }
});