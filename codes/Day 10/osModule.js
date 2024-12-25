// import os from "os"
var os=require("os");
const { uptime } = require("process");
console.log("platform : " , os.platform());
// console.log(os.cpus());
console.log("CPU architechture : ",os.arch());
console.log("total memory : ",os.totalmem());
console.log("total memory : ",os.uptime());
console.log(`System has been running for ${os.uptime} seconds.`);

console.log(`Total amount of system memory : ${os.totalmem()}`);
console.log(`Amount of free memory : ${os.freemem()}`);


