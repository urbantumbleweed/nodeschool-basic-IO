var fs = require('fs');
var path = require('path');

module.exports = filtered;

function filtered(dir, ext, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err);
    } else {
      list = list.filter(function (file) {
        return '.' + ext === path.extname(file)
      });
    }
    callback(null, list);
  });
};

























// My original code
// var fs = require('fs');
// var path = require('path');

// module.exports = function filter(dirname, extension, callback) {

//   fs.readdir(dirname, function(err, files){
//     if (err) {
//       console.error(err);
//       return callback(err);
//     } else {
//       var selectedFiles = [];
//       files.forEach(function(file){
//         if('.' + extension === path.extname(file)){
//           selectedFiles.push(file);
//         }
//       });
//       callback(null, selectedFiles);
//     }
//   });
// };

// solution_filter.js:

//     var fs = require('fs')
//     var path = require('path')
    
//     module.exports = function (dir, filterStr, callback) {
    
//       fs.readdir(dir, function (err, list) {
//         if (err)
//           return callback(err)
    
//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })
    
//         callback(null, list)
//       })
//     }