let http= require("http")

// http.createServer(function (request,response){
//     response.writeHead(200,{'content-type': "html"});
//     response.write("hello this is http server created")
//     response.end()
// }).listen(8081)


// http.createServer(function (request,response){
//     response.writeHead(200,{'content-type': "html"});
//     response.write(request.url)
//     response.end()
// }).listen(8081)

var url=require("url")
http.createServer(function (request,response){
    response.writeHead(200,{'content-type': "html"});
    let q=url.parse(request.url,true).query
    let text=q.year + " "+q.month + " - " + q.name
    response.write(text)
    response.end()
}).listen(8081)