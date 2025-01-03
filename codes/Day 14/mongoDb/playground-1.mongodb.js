

// Select the database to use.
use('SigmaDatabases');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "name": "java",
    "price": 7000,
    "instructor": "harry"
  },
  {
    "name": "python",
    "price": 6000,
    "instructor": "john"
  },
  {
    "name": "javascript",
    "price": 5500,
    "instructor": "alice"
  },
  {
    "name": "c++",
    "price": 8000,
    "instructor": "bob"
  },
  {
    "name": "ruby",
    "price": 6500,
    "instructor": "sara"
  },
  {
    "name": "php",
    "price": 5000,
    "instructor": "lisa"
  },
  {
    "name": "swift",
    "price": 7500,
    "instructor": "tom"
  },
  {
    "name": "kotlin",
    "price": 7200,
    "instructor": "jack"
  },
  {
    "name": "go",
    "price": 6700,
    "instructor": "jane"
  },
  {
    "name": "rust",
    "price": 8500,
    "instructor": "emily"
  }
]
);


// Print a message to the output window.
console.log(`Done inserting the data`);



