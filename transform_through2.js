const fs = require("fs");
const through = require("through2");


fs.createReadStream("./data.txt")
    .pipe(through(toUpper))
    .pipe(process.stdout);

function toUpper(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}
