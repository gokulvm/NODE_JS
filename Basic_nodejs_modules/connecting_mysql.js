mysql = require("mysql")

conn = mysql.createConnection({
    host : "localhost",
    user : "user_name",
    password : "password",
    database : "database_name"
})

conn.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    sql = "select * from student_table"
    conn.query(sql,function(err,result){
        if (err) throw err;
        console.log(result);
    });
});