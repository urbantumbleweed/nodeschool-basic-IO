const http = require('http');
var url = require('url');
var port = Number(process.argv[2]);
var response = {};

var server = http.createServer(function (req, res) {
  if (req.method.toLowerCase() === 'get'){
    var parsedUrl = url.parse(req.url, true);
    var date = new Date(parsedUrl.query['iso']);

    console.log(/^\/api\/parsetime/.test(req.url));
    console.log(req.url, /^\/api\/parsetime/.toString());


    switch (parsedUrl.pathname){
      case '/api/parsetime':
        res.writeHead(200, {'Content-Type': 'application/json'});
        var response = {
          'hour': date.getHours(),
          'minute': date.getMinutes(),
          'second': date.getSeconds()
        };
        res.write(JSON.stringify(response));
        res.end();
        break;
      case '/api/unixtime':
        res.writeHead(200, {'Content-Type': 'application/json'});
        var response = {'unixtime': date.getTime()}
        res.write(JSON.stringify(response));
        res.end();
        break;
      default:
        res.end("Please send 'get' to either '/api/parsetime' or '/api/unixtime'");
    }
  }
});

server.listen(port);


// Here is the official solution
// ────────────────────────────────────────────────────────────────────────────────
//   This is where modules are required  
//     var http = require('http')
//     var url = require('url')
    
    // This is where helper functions are defined
//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }
    
//     function unixtime (time) {
//       return { unixtime : time.getTime() }
//     }
    
    // This is where the main program (server) is created
//     var server = http.createServer(function (req, res) {
  // Local Variables are created (note that result is null)
//       var parsedUrl = url.parse(req.url, true)
//       var time = new Date(parsedUrl.query.iso)
//       var result
    
    // A REGEX object is used to match 'routes'
    // A match sets the value of 'result' so it is no longer null
//       if (/^\/api\/parsetime/.test(req.url))
//         result = parsetime(time)
//       else if (/^\/api\/unixtime/.test(req.url))
//         result = unixtime(time)
    
    // When result has a value, the response is created and sent
//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))

// ────────────────────────────────────────────────────────────────────────────────