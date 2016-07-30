var express             = require('express');
var app                 = express();

require('./router/main')(app);

app.set('views', __dirname + '/views'); //Define onde nossos arquivos HTML são colocados, para que o servidor possa localizar e renderizar
app.set('view engine', 'ejs'); //seta a view engine
app.engine('html', require('ejs').renderFile); //Essa linha comunica ao servidor que nós estamos usando o EJS para renderizar nossas páginas

// app.get('/',function(req,res){
//     res.send('Hello world');
// });

app.listen(3000, function(){
    console.log("Iniciamos nosso servidor na porta 3000");
});