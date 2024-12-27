var mysql=require('mysql2');
var con = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"1234",
    database:"CRUD"
})

// --- CREATE DATABASE ---

// con.connect(function(err){
//     if(err) console.log("Error connecting : ",err.message);
//     console.log("connection established");
//     con.query("create database CRUD;",function(err){
//         if(err) console.log("Error creating database : ",err.message);
//         console.log("Database created ");
//     })   
// })


// ----- CREATE TABLE -----

// con.connect(function(err){
//     if (err) console.log("Error connecting : ",err.message);
//     console.log("connection established");
//     var sql= "create table blog ( id int primary key, title char(255) ,content text, author char(255) ,status enum('draft','archive','published') default 'published' ,is_deleted boolean default'0', created_at datetime default now(),updated_at datetime default now());"
//     con.query(sql, function(err){
//         if(err) console.log("Error creating table : ",err);
//         console.log("table created");
//     })   
// })


// ----- MODIFY TABLE -----

// con.connect(function(err){
//     if (err) console.log("Error connecting : ",err.message);
//     console.log("connection established");
//     var sql= "alter table blog modify id int auto_increment "
//     con.query(sql, function(err){
//         if(err) console.log("Error modifying table : ",err);
//         console.log("table modified");
//     })   
// })


// ----- INSERT TABLE -----

// con.connect(function(err){
//     if (err) console.log("Error connecting : ",err.message);
//     console.log("connection established");
//     var sql= "insert into blog(title,content,author) values ('blog1', 'content_1','author_1');"
//     con.query(sql, function(err){
//         if(err) console.log("Error inserting : ",err);
//         console.log("inserted ");
//     })   
// })


// ----- DELETE RECORD (UPDATE) -----


// con.connect(function(err){
//     if(err) log("Error connecting : ",err.message)
//     console.log("connection established");
//     var sql="update blog set is_deleted = 1,updated_at = now() where id=2"
//     // var sql="update blog set status='archive',updated_at = now() where id=3"
//     con.query(sql, function(err){
//         if(err) console.log("Error updating : ",err);
//         console.log("deleted ");
//     })
// })

// ----- PERMANENTLY DELETE -----
// con.connect(function(err){
//     if(err) log("Error connecting : ",err.message)
//     console.log("connection established");
//     var sql="delete from blog where title='a'"
//     con.query(sql, function(err){
//         if(err) console.log("Error deleting : ",err);
//         console.log("deleted");
//     })
// })







// ----- RETRIVE BLOG -----

// con.connect(function(err){
//     if(err) log("Error connecting : ",err.message)
//     console.log("connection established");
//     var sql="SELECT * FROM blog WHERE id=2;"
//     con.query(sql, function(err,result){
//         if(err) console.log("Error retriving : ",err);
//         console.log("----- info -----");
//         console.log(result);
        
//     })
// })

