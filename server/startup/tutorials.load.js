Meteor.startup(function() {
  if(Tutorials.find().count() === 0) {
    var tutorials = [
      {
        'name': 'tutorial 1'
      },
      {
        'name': 'tutorial 2'
      }
    ];
    tutorials.forEach(function(tutorial) {
      Tutorials.insert(tutorial);
    });
  }
});