var fs = require("fs");
var stream = fs.createWriteStream("./tmp.log", {flags: 'a'});
stream.on('finish', function() {
    console.log("finish");
});
stream.write("line 1\n");
stream.write("line 2\n");
stream.write("line 3\n");
stream.end();