var fs = require('fs');

var lines = 0;

fs.readFile(process.argv[2], 'utf8', function(err, data){
  lines = data.split('\n').length-1;
  console.log(lines);
});

// the official answer
// var fs = require('fs');
// var file = process.argv[2];

// fs.readFile(file, function(err, contents){
//   var lines = contents.toString().split('\n').length-1;
//   console.log(lines);
// });