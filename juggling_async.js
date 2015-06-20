var http = require('http');
var bl = require('bl');
var results = [];
var resultscount = 0;

function printResults() {
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  };
};

function getHttp (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function(err, data) {
      if (err) {
        console.error("There was an error: ", err)
      };

      results[index] = data.toString();
      resultscount++;

      if (resultscount == 3) {
        printResults();
      };
    }))
  })
}

for (var i = 0; i < 3; i++) {
  getHttp(i);
}
