const http = require('http');
const fs = require('fs');
var map = require('through2-map');
var port = Number(process.argv[2]);

var server = http.createServer(function (req, res) {
  if(req.method.toLowerCase() === 'post'){
    req.on('error', console.error);
    req.pipe(map(function (chunk){
      return chunk.toString().toUpperCase();
    })).pipe(res);
  }
});
server.listen(port);

// Here is the official solution
// ────────────────────────────────────────────────────────────────────────────────
//     var http = require('http')
//     var map = require('through2-map')
    
//     var server = http.createServer(function (req, res) {
//       if (req.method != 'POST')
//         return res.end('send me a POST\n')
    
//       req.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//       })).pipe(res)
//     })
    
//     server.listen(Number(process.argv[2]))

// ────────────────────────────────────────────────────────────────────────────────