var http = require("http");
var fs = require("fs");
var post = http.request({
    method: "POST",
    host: "localhost",
    port: 3000,
    url: "/"
}, function (res) {
    console.log(res.statusCode);
    res.pipe(process.stdout);
});
fs.createReadStream("./data.txt").pipe(post);
// post.end("client data\n");

// request is write?
// var get = http.request({
//     method: "GET",
//     host: "localhost",
//     port: 3000,
//     url: "/"
// }, function (res) {
//     console.log(res.statusCode);
//     res.pipe(process.stdout);
// });
// get.end();