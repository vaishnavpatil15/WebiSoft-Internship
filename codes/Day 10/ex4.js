// function divide(a,b){
//     if(b==0){
//         // console.error("error");
//         throw new TypeError("divisor can't be zero");
//     }
//     return a/b;
// }

// try {
//     divide(4,2)
//     divide(4,0)
// } catch (error) {
//     console.error("Error : ", error.message);
//     // console.log("error : ", error.message);
    
// }



let fs = require ("fs");
const { json } = require("stream/consumers");
// try {
//     fs.writeFile("message.txt","Hello world!",function(err,data){
//         if(err){
//             console.error("ERROR : ", err.message);
//         }
//         else{
//             console.log("saved");   
//         }
//     })
// } catch (error) {
//     console.error("Unexpected error : ", error.message);
// }



// let jsonData= {
//     id:1,
//     name: "Alice",
//     age: 25,
// }
// fs.writeFile("data.json", JSON.stringify(jsonData) , function(err,data){
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log("saved");   
//     }
//     })
// fs.readFile("data.json",function(err,data){
//     if(err){
//         console.error(err);
//     }
//     else{
//         d=JSON.parse(data)
//         console.log(d);
//     }
// })




// fs.rename("data.json","newData.json", function(err){
//     if(err){
//         console.error(err.message);
//     }
//     else{
//         console.log("renamed");   
//     }
// })




// fs.unlink("mssessage.txt",function(err){
//     if(err){
//         console.error("ERROR : " + err.message);
//     }
//     else{
//         console.log("deleted");
//     }
// })





// fs.appendFile("message.txt","\n appended content",function(err){
//     if(err){
//         console.error("ERROR : " + err.message);
//     }
//     else{
//         console.log("appended");   
//     }
// })



 

