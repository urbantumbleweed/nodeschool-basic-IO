var mymodule = require('./myModule');
var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function (err, files) {
  if (err) {
    return console.error('There was an error with mymodule', err);
  } else {
    files.forEach(function (file) {
      console.log(file);
    });
  }
});
































// My original Code
// var mymodule = require('./myModule');

// mymodule(process.argv[2], process.argv[3], function(err, files){
//   if(err) {
//       console.error(err);
//       return;
//   } else {
//     files.forEach(function(file){
//       console.log(file);
//     });
//   }
// });

// solution.js:

//     var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]
    
//     filterFn(dir, filterStr, function (err, list) {
//       if (err)
//         return console.error('There was an error:', err)
    
//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })
