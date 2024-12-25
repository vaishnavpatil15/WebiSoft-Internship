const express = require("express")
const app= express()

// CONFIGURE TEMPLATE ENGINE EJS 
app.set("view engine","ejs")

// MIDDLE WARE THAT EXECUTES EVERYTIME BEFORE ANY ROUTE

// app.use(function(req,res,next){
//     console.log("middleware");
//     // res.send("middleware")    //CANNOT WRITE THIS COZ ONCE WE SEND RESPONSE WE CANT GO TO NEXT ROUTE thus do log for understanding
//     next();
// })
// app.use(function(req,res,next){
//     console.log("middleware 2 ");
//     // res.send("middleware")    //CANNOT WRITE THIS COZ ONCE WE SEND RESPONSE WE CANT GO TO NEXT ROUTE thus do log for understanding
//     next();
// })



//  USE OF STATIC FILES (connecting css and js file to ejs file dynamically)

app.use(express.static('./public'))    



//  THESE ARE ROUTES " / "

app.get("/",function (req,res){
    console.log("first request");
    res.send("hello world!")
})
app.listen(3000)

// THESE ARE ROUTES " / " 
// / WILL GO TO THE / PAGE OF LOCAL HOST  .... AND /PROFULE WILL GO TO  3000/PROFILE PAGE OF LOCAL HOST ....
app.get("/profile",function (req,res){ 
    res.send("Hello from Profile")
})
app.get("/home",function (req,res){ 
    res.send("Hello from Profile")
})
app.get("/profile/home",function (req,res){ 
    res.send("Hello from profile home")
})


//  DYNAMIC ROUTING USING " : "

app.get("/profile/home/:username",function(req,res){
    res.send(`Hello from ${req.params.username}`)
})

// app.get("/profile/ejs",function(req,res){
//     res.render("index",{name: "Harsh"})
// })
app.get("/profile/ejs",function(req,res){
    res.render("landing",{name: "Harsh"})
})


//  ERROR HANDLING

app.get("/error",function(req,res){
    throw new Error("something went wrong")
})
app.use(function errorHandler(err,req,res,next){
    res.render("error",{error:err})
})
 


