var mongoose = require('mongoose'),
	crypto   = require('crypto'),
	Schema   = mongoose.Schema;

var UsuarioSchema = new Schema({
	nome: String,
	sobrenome: String,
	email: {
		type: String,
		match: [/.+\@.+\..+/, "Por favor, informe um endereço de e-mail válido"]
	},
	username: {
		type: String,
		unique: true,
		required: 'O campo Nome de Usuário é obrigatório',
		trim: true
	},
	salt: String,
	password: {
		type: String,
		validate: [
			function(password){ return password && password.length >= 6; }, 'A senha deve conter ao menos 6 caracteres'
		]
	},
	permissions: [{ 
		name: {
			type: String, 
			lowercase: true
		} 
	}],
	created: {
		type: Date,
		default: Date.now
	}
});

//instance methods, permite adicionar operações extras ao documento
UsuarioSchema.methods.hashPassword = function(password){
  return crypto.pbkdf2Sync(password, this.salt, 10000, 62, 'sha512').toString('base64');
};

//funções que são executadas antes de salvar um documento
UsuarioSchema.pre('save', function(next){
  if(this.password){
    this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
    this.password = this.hashPassword(this.password);
  }
  next();
});

UsuarioSchema.post('save', function(doc) {
  console.log('%s salvo com sucesso', doc._id);
});

//o virtual é uma propriedade que não está necessariamente no
//banco ou então uma propriedade que você quer tratar antes de
//adicionar no banco.
UsuarioSchema.virtual('fullName').get(function() {
	return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
  if(fullName){
    var splitName = fullName.split(' ');
  	this.firstName = splitName[0] || '';
  	this.lastName = splitName[1] || '';
  }
});

//statics permite adicionar operações extras à model.
UsuarioSchema.statics.findOneByUsername = function(username, callback){
  this.findOne({username: new RegExp(username, 'i')}, callback);
};

//Registramos que estamos utilizando getters e virtuals
UsuarioSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Usuario', UsuarioSchema, 'Usuario');