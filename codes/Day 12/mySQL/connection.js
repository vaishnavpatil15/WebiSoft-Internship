var mysql=require("mysql2")
var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    port: 3306,
    password: "1234",
    database: "webisofttech"
})
// con.connect(function(err){
//     // if(err) throw err;
//     console.log("connected");
//     con.query("CREATE DATABASE webisofttech;",function(err,result){
//         // if(err) throw err;
//         console.log("Database created");
//     })
// })
con.connect(function(err){
    // if(err) throw err;
    console.log("connected");
    var sql="create table webisofttech (id int primary key,name varchar(255))"
    con.query(sql,function(err,result){
        console.log("Table created successfully");
    })
})
