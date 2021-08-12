const fs = require("fs");
const through = require("through2");
const devnull = require('dev-null');

fs.createReadStream("./data.txt")
    .pipe(through(toUpper))
    .pipe(devnull());

function toUpper(buffer, encoding, next) {
    // next(null, buffer.toString().toUpperCase())
    console.log(buffer.length);
    this.push(buffer.toString().toUpperCase());
    next();
}
