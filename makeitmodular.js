// Module code below

var fs = require('fs');
var path = require('path');


module.exports = function(dirname, ext, callback) {
  var extension = '.' + ext;
  fs.readdir(dirname, function(err, dirlist) {
    if (err) {
      return callback(err);
    }
    else {
      results = [];
      dirlist.forEach(function(file) {
        if (path.extname(file) === extension) {
          results.push(file);
        }
      });

    callback(null, results);

    }
  });
};

// Require module and solve the problem

var program = require('path/to/your/module');
var dirname = process.argv[2];
var ext = process.argv[3];

program(dirname, ext, function(err, data) {
  if (err) {
    return console.error('There was an error: ', err);
  }
  else {
    data.forEach(function(file) {
      console.log(file);
    })
  }
});
