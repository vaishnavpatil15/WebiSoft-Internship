const mongoClient=require("mongodb").MongoClient
var url="mongodb://localhost:27017/mongoDatabase"


mongoClient.connect(url, function(err,db){
    console.log("hi");
    if (err) console.log("Error connecting : ",err.message);
    db.close();
}) 