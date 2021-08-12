const http = require("http");
const fs = require("fs");
const zlib = require("zlib");

const post = http.request({
    method: "POST",
    host: "localhost",
    port: 3000,
    url: "/"
}, function (res) {
    res.pipe(process.stdout);
});

fs.createReadStream("./books.import.txt").pipe(zlib.createGzip()).pipe(post);