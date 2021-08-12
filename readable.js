var fs = require("fs");
var stream = fs.createReadStream("./data.txt");

stream.pipe(process.stdout);

// stream.once("data", function() {}) // flowing pushing

stream.on("end", function() {
    console.log("End");
});