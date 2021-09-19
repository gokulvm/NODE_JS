http_var = require("http") // Getting HTTP module to create the server

http_var.createServer(function(req,res){
    res.writeHead(200,{"Content-type" : "text/html"});
    res.write("Server is Healthy");
    res.end()
}).listen(8080) // Port number