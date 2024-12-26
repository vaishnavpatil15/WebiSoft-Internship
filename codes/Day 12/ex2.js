const express=require('express')
const app = express()

// app.post('/',function(req,res){
//     res.send("POST req called")
// })

app.use(express.json()) // PARSE THE JSON DATA INTO THE REQ.BODY (without this it will not be directly stored in req.body)

app.post('/submit',function(req,res){
    // console.log(req.body);
    
    const {username} = req.body   
    // const username = req.body.username  
    const {name} = req.body   
    res.send(`Received username : ${username} , name : ${name}`)
})




app.listen(3000,()=>{
    console.log("server listening on port");
})

 









