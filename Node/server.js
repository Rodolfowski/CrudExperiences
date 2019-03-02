var http=require('http');
http.createServer(function(request,response){
response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Oi cliente \n');
}).listen(8080,'localhost');

console.log('Server rodando na porta 8080');



