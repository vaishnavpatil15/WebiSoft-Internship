var dt=require('./myFirstModule')//MY OWN MODULE WHICH IS DATE
var http= require('http')

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type': 'text/plain'})
    response.write("this is date and time : "+dt.myDateTime1())
    response.end()
}).listen(8081)
