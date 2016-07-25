var Usuario   = require('../model.usuario.js');

exports.save = function(){
		var user = new Usuario ({
		nome: 'Líverton',
		sobrenome: 'Oliveira',
		email: 'liverton.oliveira@fcamara.com.br',
		username: 'liverton.oliveira',
		password: '1234567'
	});

	user.save(function(err, doc){
		if(err) console.log(err);
		else console.log(doc);
	});
}

exports.create = function(){
	var user = {
		nome: 'Líverton',
		sobrenome: 'Oliveira',
		email: 'liverton.oliveira@fcamara.com.br',
		username: 'liverton.oliveira',
		password: '1234567'
	};

	Usuario.create(user, function(err, doc){
		if (err) console.log(err);
		else console.log(doc);
	});
}