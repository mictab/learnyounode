var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var filetype = process.argv[3];

files = fs.readdir(directory, function callback(err, list) {
  for (var i = 0; i < list.length; i++) {
    if (path.extname(list[i]) == '.' + filetype) {
      console.log(list[i]);
    };
  }
});
