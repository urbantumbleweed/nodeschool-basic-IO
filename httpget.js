var http = require('http');
var url = process.argv[2];

http.get(url, function(res){
  //set the encoding to get a string.
  res.setEncoding('utf8');
  //print res data
  res.on('data', function(chunk){
    process.stdout.write(chunk + '\n');
  });
  res.on('error', console.error);
});


// // official answer
// ────────────────────────────────────────────────────────────────────────────────
//     var http = require('http')
    
//     http.get(process.argv[2], function (response) {
//       response.setEncoding('utf8')
//       response.on('data', console.log)
//       response.on('error', console.error)
//     })

// ────────────────────────────────────────────────────────────────────────────────