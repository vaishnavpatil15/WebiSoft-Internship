const fs=require("fs")
const express=require("express")
const app=express()
const mysql=require("mysql2")

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "jobData",
})
app.set('view engine', 'ejs');


app.get("/",function(req,res){
    console.log("home page");
    // res.send("hi")
    res.render("jobdata")
})


app.get("/insert",function(req,res){

    fs.readFile('jobData_all.json',(err,data)=>{
        if (err) console.log("error : ",err.message);
        const jsonData= JSON.parse(data)
        
        con.connect(function(err){
            if(err)console.error("error connecting...");
            console.log("connected");

            for(i=0;i<20;i++){
                
                var sql= `insert into jobData (id,jobTitle, companyName, location, postedToday, numOfCandidate, salaryMin, salaryMax, phoneNumber) values(${i},'${jsonData.returnvalue.jobs[i].jobInfo.jobTitle}','${jsonData.returnvalue.jobs[i].company.companyName}','${jsonData.returnvalue.jobs[i].location}',${jsonData.returnvalue.jobs[i].jobMetadata.postedToday},${jsonData.returnvalue.jobs[i].jobMetadata.numOfCandidate},${jsonData.returnvalue.jobs[i].salaryInfo.salaryMin},${jsonData.returnvalue.jobs[i].salaryInfo.salaryMax},${jsonData.returnvalue.jobs[i].jobMetadata.phoneNumber});`

                con.query(sql,function(err){
                    if (err) console.error("Error inserting : ",err.message);
                    console.log("inserted");
                }) 
            }

        })
        res.send("inserted")
    })

})
app.get("/retrive",function (req,res){
        con.connect(function(err){
            if(err) console.log("Error connecting : ",err.message);
            console.log("connected");
            var sql="select * from jobData;"
            con.query(sql,function(err,result){
                if(err) console.log("Error retriving  : ",err.message);                
                console.log("retrived");
                console.log(result);
                
                res.send(result)
            })
        })
})
    

app.listen(3000)