const through = require("through2");

// object
process.stdin.pipe(through.obj(write)).pipe(through.obj(totalSize, end));

function write(chunk, encoding, next) {
    next(null, {length: chunk.length});
}

let size = 0;
function totalSize(obj, encoding, next) {
    size += obj.length;
    next();
}

function end() {
    console.log("total size is: ", size);
}