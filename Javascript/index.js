// Factory function  - Factory Angular

var criarPessoa = function (nome, idade) {
	return { 
		nome: nome, 
		idade: idade
	};
};

var maria = criarPessoa("Maria", 20);
console.log(maria);

// Constructor Function - Service Angular
var Pessoa = function (nome, idade) {
	this.nome = nome;
	this.idade = idade;
};

var carlos = new Pessoa("Carlos", 25);
console.log(carlos);

var pedro = {};
Pessoa.call(pedro, "Pedro", 15);
console.log(pedro);