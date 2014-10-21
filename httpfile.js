const http = require('http');
const fs = require('fs');
const port = Number(process.argv[2]);
const filePath = process.argv[3].toString();

var stream = fs.createReadStream(filePath, {encoding: 'utf8'});

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'content-type': 'text/plain'});
  stream.pipe(response);
});
server.listen(port);

// This is the official answer
// ────────────────────────────────────────────────────────────────────────────────
//     var http = require('http')
//     var fs = require('fs')
    
//     var server = http.createServer(function (req, res) {
//       res.writeHead(200, { 'content-type': 'text/plain' })
    
//       fs.createReadStream(process.argv[3]).pipe(res)
//     })
    
//     server.listen(Number(process.argv[2]))

// ────────────────────────────────────────────────────────────────────────────────