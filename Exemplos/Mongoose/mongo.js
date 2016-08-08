var mongoose = require('mongoose');

module.exports = function () {
	var dbUri = 'mongodb://username:password@host:password/database';

	var db = mongoose.connect(dbUri);

	db.connection.on('connected', function(){
		console.log("Estamos conectados!");
	});

	db.connection.on('errorr', function(err){
		console.log(err);
	});

	return db;
};