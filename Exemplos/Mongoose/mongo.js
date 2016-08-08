var mongoose = require('mongoose');

module.exports = function () {
	var dbUri = 'mongodb://linkapiAdmin:MahRiaNah!@104.41.35.101:33003/integrador?authSource=admin';

	var db = mongoose.connect(dbUri);

	db.connection.on('connected', function(){
		console.log("Estamos conectados!");
	});

	db.connection.on('errorr', function(err){
		console.log(err);
	});

	return db;
};