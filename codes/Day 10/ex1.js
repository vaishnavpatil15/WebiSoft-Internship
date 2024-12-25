let http = require("http")
http.createServer(function (req, res) {
    res.writeHead(200,{"Content-Type": "text/plain"})
    let a = "shs"
    if (a.split("").reverse().join("") == a) {
        res.write("YES it is a palindrome")
        console.log("YES");
    }
    else {
        res.write("NO it is a palindrome")
        console.log("NO");
    }
    res.end()
}).listen(8080)