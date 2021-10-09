var express = require('express')
var app = express()
// var myLogger = function (req, res, mukund) {
//     console.log('LOGGED')
//     mukund()
//   }
  
  var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }

  app.use(express.json({limit:'1mb'}));
  app.use(myLogger);
  
  
  app.post('/', function (req, res) {
    res.send('Hello World!')
  })
  
  app.listen(3000)