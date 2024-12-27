var express= require("express")
var app= express()
app.use(express.json())


// ----- CREATED CONNECTION FOR THE DATABASE -----

var mysql=require('mysql2');
var con = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"1234",
    database:"CRUD"
})


// --- CRETATED ROUTE FOR THE SSERVER TO POST (API) --------

app.post("/",function(req,res){


    var {title,content,author}=req.body
    // ----- CREATED CONNECTION FOR INSERT -----
    con.connect(function(err){
        if(err) console.log("Error connecting : ",err.message)
        console.log("connection established");
        // var sql=`insert into blog (title,content,author) values (${title},${content},${author});`
        var sql=`insert into blog (title,content,author) values ('${title}','${content}','${author}');`
        con.query(sql, function(err){
            if(err) console.log("Error inserting : ", err.message);
            console.log("inserted");
        })
        
        
    // --- TO DISPLAY THE RETRIVED DATA (CREATED OTHER CONNECTION COZ FISRT CONNECTION WILL INSERT AND WHEN IT IS COMPLETED IT WILL SHOW RETRIVE)---
     
    con.connect(function(err){ 
        if(err) console.log("Error connecting (while retrive connect) : ",err);
        console.log("connected 2");
        var sql2=`select * from blog where title='${title}';`
        con.query(sql2, function(err, result){
            if(err) console.log("Error selecting : ",err.message);
            console.log("----- info -----\n");
            console.log(result);
            res.send(result)  
        }) 
    })
    })

    
})

app.listen(3300)