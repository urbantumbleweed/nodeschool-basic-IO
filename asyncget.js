const http = require('http');
const bl = require('bl');
var results = [];
var count = 0;

function printResults(){
  for(var i = 0; i < 3 ; i++){
    console.log(results[i]);
  };
};

function httpGet(index) {
  http.get(process.argv[2+index], function(response){
    response.setEncoding('utf8');
    response.on('error', console.error);
    response.pipe(bl(function(err, data){
      if (err) {
        console.error;
      }
      results[index] = data.toString();
      count++;

      if (count === 3) {
        printResults();
      }
    }));
  });
};

for (var i = 0; i < 3; i++) {
  httpGet(i);
}

// // The official response
// ────────────────────────────────────────────────────────────────────────────────
//     var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0
    
//     function printResults () {
//       for (var i = 0; i < 3; i++)
//         console.log(results[i])
//     }
    
//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err)
//             return console.error(err)
    
//           results[index] = data.toString()
//           count++
    
//           if (count == 3) // yay! we are the last one!
//             printResults()
//         }))
//       })
//     }
    
//     for (var i = 0; i < 3; i++)
//       httpGet(i)

// ────────────────────────────────────────────────────────────────────────────────