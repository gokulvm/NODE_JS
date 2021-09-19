const { error } = require("console")

express = require("express")
body_parser = require("body-parser")
fs = require("fs")
path = require("path")
app = express()

app.use(body_parser.urlencoded({
    extended : true
}))

app.get("/",function(req,res){
    var fileName = '/index.html';
    res.sendFile(path.join(__dirname) + fileName);
})

app.post("/add_user",function(req,res){
    u_name = req.body.name
    dob =req.body.dob
    profes = req.body.prof
    id = req.body.u_id
    obj = {}
    obj[id] = {
        "user_name" : u_name,
        "dob" : dob,
        "profession" : profes
    }
    data = JSON.stringify(obj)
    fs.readFile(path.join(__dirname) +"/user_data.json",function(err,data){
        if (err) throw err;
        data = JSON.parse(data)
        data[id] = obj[id]
        updated_data = JSON.stringify(data)
        fs.writeFile(path.join(__dirname) +"/user_data.json",updated_data,function(err){
            if (err) throw err;
            res.end("User data added successfully ")
        })
    })

})

app.post("/fetch_specific_user",function(req,res){
    u_id = req.body.f_u_id
    fs.readFile(path.join(__dirname) +"/user_data.json",function(err,data){
        if (err) throw err;
        data = JSON.parse(data)
        key = Object.keys(data)
        if (key.includes(u_id)){
            user = data[u_id]
            res.end(JSON.stringify(user))
        }
        else{
            res.end(String(u_id) +" : USER ID NOT FOUND")
        }
        
    })
})

app.post("/del_user",function(req,res){
    u_id = req.body.d_u_id
    fs.readFile(path.join(__dirname) +"/user_data.json",function(err,data){
        if (err) throw err;
        data = JSON.parse(data)
        key = Object.keys(data)
            if (key.includes(u_id)){
            u_name = data[u_id]["user_name"]
            delete data[u_id]
            updated_data = JSON.stringify(data)
            fs.writeFile(path.join(__dirname) +"/user_data.json",updated_data,function(err){
                if (err) throw err;
                res.end(u_name + " User details deleted successfully ")
            })
            }
            else{
                res.end(String(u_id) +" : USER ID NOT FOUND")
            }
    })
})


app.post("/all_user",function(req,res){
    u_id = req.body.f_u_id
    fs.readFile(path.join(__dirname) +"/user_data.json",function(err,data){
        if (err) throw err;
        res.end(data)
    })
})



app.listen(8080,function(){
    console.log("server is running at port 8080")
})