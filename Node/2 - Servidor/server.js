var http = require('http');
//var fs   = require('fs');

var httpServer = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.end("<img src='http://www.fcamara.com.br/wp-content/uploads/2016/02/fcamara-logo-1.png'>");
	
	// fs.readFile("index.html", function(err, html){
	// 	response.end(html);
	// });
});

httpServer.listen(3000, () => { console.log("Servidor rodando"); })
