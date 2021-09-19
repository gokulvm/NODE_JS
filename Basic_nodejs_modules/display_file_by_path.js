http_var = require("http") 
fs = require('fs')
url = require("url")
form = require("formidable")

http_var.createServer(function(req,res){
    if (req.url == "/"){
        res.writeHead(200,{"Content-type" : "text/html"});
        res.write("<form action='data_set' method='post' enctype='multipart/form-data'>")
        res.write('Enter the File name :    <input type="text" name="name"><br><br>')
        res.write('Click submit :   <input type="submit"><br><br>')
        res.end()
    }
    
    else if (req.url == "/data_set"){
        input_form = form.IncomingForm()
        input_form.parse(req,function(err,fields,files){
            path = "./" + fields.name
            fs.readFile(path,function(err,datas){
                if (err){
                    res.writeHead(404,{"Content-type" : "text/html"})
                    res.end('404 - File not found')
                }
                res.writeHead(200,{"Content-type" : "text/html"});
                res.write(datas.toString());
                res.end()

            })
        })   
    }
   
}).listen(8080) // Port number