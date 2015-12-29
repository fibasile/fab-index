Meteor.startup(function() {
  if(Module.find().count() === 0) {
    var module = [
      {
        'name': 'module 1',
        'date' : '',
        'program' : '2016'
      },
      {
        'name': 'module 1',
        'date' : '',
        'program' : '2016'
      }
    ];
    module.forEach(function(module) {
      Module.insert(module);
    });
  }
});
