Meteor.startup(function() {
  if(Program.find().count() === 0) {
    var program = [
      {
        'name': 'program 1'
      },
      {
        'name': 'program 2'
      }
    ];
    program.forEach(function(program) {
      Program.insert(program);
    });
  }
});