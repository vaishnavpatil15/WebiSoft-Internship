let http=require("http")
let fs=require("fs")

//  ----- READ FILE -----

// http.createServer(function(req,res){
//     fs.readFile('demo1.html',function(err,data){
//         res.writeHead(200,{"content-type":"text/html"})
//         res.write(data)
//     })
// }).listen(8081)


//  ----- CREATE FILE -----


// fs.appendFile('myNewFile.txt',"hello this is my new file",function(err,data){
//     console.log("saved");
//     console.log(err);
//     console.log(data);
// })


// fs.open('myNewFile.txt','w',function(err,file){
//     console.log("saved");
// })

// fs.writeFile('myNewFile.txt',"new content added",function(err){
//     if(err) throw err
//     console.log("saved");
// })


//  ----- UPDATE FILE -----

 // USE FOLLOWING FOR UPDATING FILE 
 // fs.appendFile()
 // fs.writeFile()
 //above explained in create file


//  ----- DELETE FILE -----

// fs.unlink("myNewFile.txt" ,function(err){
//     console.log("deleted");
// })



//  ----- RENAME FILE -----

// fs.rename("myNewFile.txt","newFile.txt",function(err){
//     console.log("renamed");
// })

