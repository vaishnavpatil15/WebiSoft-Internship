// console.log("hello world");

// let http = require("http")
// let obj = require("./myModules")

// http.createServer(function(req,res){
//     res.writeHead(200,{"content-type": "text/html"});
//     res.write('<h>hello world</h>');
//     res.end();
// }).listen(8081)
    


// let a =require("./myModules")
// console.log(a);
// console.log(a.a);
// console.log(a.default);

// ---- IF ME CHANGE TYPE IN THE PACKAGE FILE TO 'MODULE THEN WE USE IMPORT INSTEAD OF REQUIRE ----

// import {a,b} from "./myModules.js"    // IMPORT THE NAMED VALUE A , WE USE {a} to get named 
// console.log(a);
// console.log({b});
// console.log({a,b});
 
// import abc from "./myModules.js" // IMPORT THE DEFAULT VALUE (by any name abc,obj,harry,etc) TO GET HT EDEFAULT EXPORT PACKAGE OBJ NO NEED FOR {}
// console.log(abc);
// console.log(abc.x);
 

// ----- FOR THE module.exprots part --------------------------------

let mod= require("./myModules.js");
console.log(mod);  // a module for module main(mod)

// --------- WE CAN USE BOH IMPORT AND REQUIRE but if in modules file if there is module.export then use import----------------


//         ---------------------------


// console.log(__dirname); // gives path of folder or directory
// console.log(__filename);//gives name of file (abc.js ) along with the path



