
http_var = require("http")
fs = require("fs")  //Getting File system module


// first create the file
http_var.createServer(function (req,res){  
    fs.writeFile("fs_module_check.html","<h1>Welcome</h1>",function(err){  
        if (err){
            return console.log(err);
        }
    })

    // Append the value in Existing file
    fs.appendFile("fs_module_check.html","<br><h2>Learning Node js</h2>",function(err){  
        if (err){
            return console.log(err);
        }
    })

    // Read the file
    fs.readFile("fs_module_check.html",function(err,data){
        if (err){
            res.writeHead(404,{"Content-type" : "text/html"});
            return res.end("404 - File Not Found")
        }
        res.writeHead(200,{"Content-type" : "text/html"});
        res.write("File Created Successfully<br>");
        res.write("Line appended Successfully<br>");
        res.write("File readed Successfully<br>");
        res.write(data.toString())
        res.end()

    })

}).listen(9000)