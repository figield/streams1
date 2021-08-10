var fs = require("fs");
var zlib = require("zlib");


fs.createReadStream("./tmp.log.gz")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream("./tmp.log.1"));