use("CrudDB")
console.log(db)

db.createCollection("courses")


//---Inserting new courses --------------------------------
// db.courses.insertOne(
//     { name : "harry web dev",
//         price:2000
//     }
// )


// db.courses.insertMany([
//     {
//       "name": "java",
//       "price": 7000,
//       "instructor": "harry"
//     },
//     {
//       "name": "python",
//       "price": 6000,
//       "instructor": "john"
//     },
//     {
//       "name": "javascript",
//       "price": 5500,
//       "instructor": "alice"
//     },
//     {
//       "name": "c++",
//       "price": 8000,
//       "instructor": "bob"
//     },
//     {
//       "name": "ruby",
//       "price": 6500,
//       "instructor": "sara"
//     },
//     {
//       "name": "php",
//       "price": 5000,
//       "instructor": "lisa"
//     },
//     {
//       "name": "swift",
//       "price": 7500,
//       "instructor": "tom"
//     },
//     {
//       "name": "kotlin",
//       "price": 7200,
//       "instructor": "jack"
//     },
//     {
//       "name": "go",
//       "price": 6700,
//       "instructor": "jane"
//     },
//     {
//       "name": "rust",
//       "price": 8500,
//       "instructor": "emily"
//     }
//   ]
//   )


  //-----Reading configuration------
//   let a = db.courses.find({name: "rust"})
//   console.log(a)

// //   console.log(a.count())
//   console.log(a.toArray())// used to return all documents in an array

//   let b = db.courses.findOne({name: "rust"})
//   console.log(b)

  //----Update configuration--------
//   db.courses.updateOne( {price: 8500}, {$set: {price: 2}}
//   )

//   db.courses.updateOne( {name: "vaishnav"}, {$set: {price: 1000000000000000}})

  db.courses.updateMany( {name: "ruby"}, {$set: {price: 2}}
      )

      //-----Deleting configuration-------
      db.courses.deleteOne({name: "go"})
      db.courses.deleteMany({price: {$lt: 5000}})

      