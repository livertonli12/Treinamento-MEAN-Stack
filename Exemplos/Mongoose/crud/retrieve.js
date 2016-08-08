var Usuario   = require('../model.usuario.js');

exports.all = function(){
	Usuario.find({}, '-salt -password', function(err, users){
		if(err) console.log(err);
		else console.log(users);
	});
};

exports.byUsername = function(username){
	Usuario.find({username: username}, '-salt -password', function(err, users){
		if(err) console.log(err);
		else console.log(users);
	});
};

exports.findOneByUsername = function(username){
	Usuario.findOneByUsername(username, function(err, users){
		if(err) console.log(err);
		else console.log(users);
	});
};