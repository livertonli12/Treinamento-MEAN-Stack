var assert = require('assert');

describe('minha funcionalidade', function(){
  it('funciona corretamente', function(){
    assert.equal('A', 'A');
  });

  it('estoura exception', function(){
    assert.throws(function(){
      throw 'Error!';
    });
  });
});

describe('minha segunda funcionalidade', function(){
  it('funciona async', function(){
    setTimeout(function(){ done(); }, 25);
  });
});

//"test": "mocha test.js",
//"test-kitten": "mocha -R nyan test.js" especificando o tipo de reporter que utilizaremos
