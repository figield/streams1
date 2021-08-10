var http = require("http");
// var post = http.request({
//     method: "POST",
//     host: "localhost",
//     port: 3000,
//     url: "/"
// }, function (res) {
//     console.log(res.statusCode);
//     res.pipe(process.stdout);
// });
// post.end("client data\n");

var get = http.request({
    method: "GET",
    host: "localhost",
    port: 3000,
    url: "/"
}, function (res) {
    console.log(res.statusCode);
    res.pipe(process.stdout);
});
get.end();