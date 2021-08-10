var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var stream = fs.createReadStream('./data.txt');
    stream.pipe(res);
});
server.listen(8080);