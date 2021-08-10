var fs = require("fs");
var zlib = require("zlib");


fs.createReadStream("./tmp.log")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("./tmp.log.gz"));