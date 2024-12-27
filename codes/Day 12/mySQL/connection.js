var mysql=require("mysql2")
var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    port: 3306,
    password: "1234",
    database: "webisofttech"
})



// --------------------- CREATE DATABASE ---------------------------

// con.connect(function(err){
//     // if(err) throw err;
//     console.log("connected");
//     con.query("CREATE DATABASE webisofttech;",function(err,result){
//         // if(err) throw err;
//         console.log("Database created");
//     })
// })



//  --------------------- CREATE TABLE ---------------------------

// con.connect(function(err){
//     if(err) console.log("Error connecting : ",err.message);
//     console.log("connected");
//     var sql="create table emp1 (id int primary key,name varchar(255))"
//     con.query(sql,function(err,result){
//         if(err) console.log("Error creating table : ",err.message);
//         console.log("result : ",result);
        
//         console.log("Table created successfully");
//     })
// })



// --------------------- ALTER TABLE ---------------------------

// con.connect(function(err){
//     if (err) console.log("Error while connecting : ",err.message);
//     console.log("connected");
//     var sql="alter table webisofttech add salary int(10)"
//     con.query(sql,function(err,result){
//         if (err) console.log("Error while altering : ",err.message);
//         console.log("altered table");   
//     })
// })



// --------------------- INSERT into TABLE ------------------------

// con.connect(function(err){
//     if(err) console.log("Error while connecting",err.message);
//     console.log("connected");
//     var sql="insert into emp1 values (3,'sohal');"
//     con.query(sql,function(err){
//         if(err) console.log("Error while inserting : ",err.message);
//         console.log("inserted");
//     })
// })



// --------------------- SELECT * TABLE ------------------------

con.connect(function(err){
    if(err) console.log("Error while connecting",err.message);
    console.log("connected");
    // var sql="select * from emp1"
    var sql="select * from emp1 where id=1"
    con.query(sql,function(err,result){
        if(err) console.log("Error while inserting : ",err.message);
        console.log("--------=-- table ----------");
        console.log(result);   
    })
})