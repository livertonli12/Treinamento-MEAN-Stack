var config      = require('./config'),
    mongoose    = require('mongoose');

module.exports = function(){
  var db = mongoose.connect(config.db);

  require('../app/models/employee.server.model');
  require('../app/models/department.server.model');
  
  return db;
};
