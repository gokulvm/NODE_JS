// Reading the file by location
// Enter file path in url
http_var = require("http") 
fs = require('fs')
url = require("url")
http_var.createServer(function(req,res){
    link = url.parse(req.url,true)
    path_to_file = "."+link.pathname
    fs.readFile(path_to_file,function(err,datas){
        if (err){
            res.writeHead(404,{"Content-type" : "text/html"})
            res.end('404 - File not found')
        }
        res.writeHead(200,{"Content-type" : "text/html"});
        res.write(datas);
        res.end()

    })
   
}).listen(8080) // Port number
