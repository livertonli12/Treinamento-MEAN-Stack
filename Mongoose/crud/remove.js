var Usuario   = require('../model.usuario.js');

exports.findByIdAndRemove = function(id){
	Usuario.findById(id, function(err, user){
		if(err) console.log(err);
	
		user.remove(function(err, result){
			if(err) console.log(err);
			console.log(result);
		});
	});
};

exports.findAndRemove = function(id){
	Usuario.findOneAndRemove({_id: id}, function(err, user){
		if(err) console.log(err);
		console.log(user);
	});
};