form = require("formidable")
http = require("http")
fs = require("fs")
http.createServer(function(req,res){
    if (req.url == "/"){
        res.writeHead(200,{"Content-type" : "text/html"});
        res.write("<form action='data_submitted' method='post' enctype='multipart/form-data'>")
        res.write('Name :      <input type="text" name="name"><br><br>')
        res.write('Age :       <input type="number" name="age"><br><br>')
        res.write(' Sex :      <input type="text" name="sex"><br><br>')
        res.write(' D.O.B :    <input type="date" name="dob"><br><br>')
        res.write('Qualification :     <input type="text" name="qual"><br><br>')
        res.write('Upload your resume :     <input type="file" name="resume"><br><br>')
        res.write('Click submit :   <input type="submit"><br><br>')
        res.end()
    }
    else if (req.url == "/data_submitted"){
        incom_form = form.IncomingForm()
        incom_form.parse(req,function(err,fields,files){
            res.write('<h1>Name : ' + fields.name +'</h1><br>')
            res.write('<h3>Age : ' + fields.age +'</h3><br>')
            res.write('<h3>Sex : ' + fields.sex +'</h3><br>')
            res.write('<h3>Date of birth : ' + fields.dob +'</h3><br>')
            res.write('<h3>Qualification : ' + fields.qual +'</h3><br>')
            old_path = files.resume.path
            new_name = files.resume.name
            new_path = 'C:/Gokul/NODEJS/' + new_name
            fs.rename(old_path,new_path,function(err){
                if (err){
                    console.log(err)
                }
                else{
                    res.write("Your Files Locations")
                    res.write("<h1>Old path " + old_path + "</h1><br>")
                    res.write("<h1>New path " + new_path + "</h1><br>")
                    res.write("<h1>Your file is saved successfully in the new path </h1><br>")
                    res.end()
                }

            })
        })
        

    }

    else{
        res.write("404 error - page not found")
        res.end()
    }
}).listen(9000)