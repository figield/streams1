const through = require("through2");

// object
const writeStream = through.obj(totalSize);
writeStream.on('finish', finish);

process.stdin.pipe(through.obj(write)).pipe(writeStream);

function write(chunk, encoding, next) {
    next(null, {length: chunk.length});
}

let size = 0;
function totalSize(obj, encoding, next) {
    size += obj.length;
    next();
}

function finish() {
    console.log("total size is: ", size);
}