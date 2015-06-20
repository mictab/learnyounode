var fs = require('fs');

var file = process.argv[2];

fs.readFile(file, function callback(err, data) {
  console.log(data.toString().split('\n').length - 1);
})
