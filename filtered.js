//my original response
// var fs = require('fs');
// var p = require('path');

// var path = process.argv[2];

// var extension = "." + process.argv[3];


// fs.readdir(path, function(err, list){
//   for(var i = 0, l = list.length; i < l; i++){
//     if (extension === p.extname(list[i])) {
//       console.log(list[i]);
//     }
//   };
// });


var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list){
  list.forEach(function(file){
    if (path.extname(file) === '.' + process.argv[3]){
      console.log(file);
    }
  });
});

// the official answer
// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })