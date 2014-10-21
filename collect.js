const http = require('http');
const bl = require('bl');
var url = process.argv[2];

http.get(url, function (res){
  res.pipe(bl(function(err, data){
    if (err) {
      return console.error(err);
    }
    data = data.toString();
    process.stdout.write(data.length + '\n');
    process.stdout.write(data + '\n');
  }));
});

// my code
// var http = require('http');
// var url = process.argv[2];
// var collection = '';


// http.get(url, function(res){
//   res.on('data', function(chunk){
//     collection += chunk.toString();
//   }).on('end', function(){
//     console.log(collection.length);
//     console.log(collection);
//   });
//   res.on('error', console.error);
// });

// The Official Solution - uses bl
// ────────────────────────────────────────────────────────────────────────────────
//     var http = require('http')
//     var bl = require('bl')
    
//     http.get(process.argv[2], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err)
//           return console.error(err)
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//       }))  
//     })

