var Usuario   = require('../model.usuario.js');

exports.findByIdAndUpdateEmail = function(id, email){
	Usuario.findById(id, function(err, user){
		if(err) console.log(err);
		
		user.email = email;

		user.save(function(err, result){
			if(err) console.log(err);
			console.log(result);
		});
	});
};

exports.findAndUpdateEmail = function(id, email){
	Usuario.findOneAndUpdate({_id: id}, {email: email}, {new: true}, function(err, user){
		if(err) console.log(err);
		console.log(user);
	});
};