const http = require("http");
const zlib = require("zlib");
const split = require("split2");
const through = require("through2");

// pipes and filters architecture
const server = http.createServer(function (req, res) {
    req.pipe(zlib.createGunzip())
        .pipe(split())
        .pipe(through.obj(parseJson))
        .pipe(through.obj(pick("title")))
        .pipe(through.obj(filter("javascript")))
        .pipe(through.obj(stringify))
        .pipe(res);
});
server.listen(3000);

function parseJson(chunk, encoding, next) {
    next(null, JSON.parse(chunk));
}

function pick(string) {
    return function (obj, encoding, next) {
        next(null, {[string]: obj[string]});
    }
}

function filter(string) {
    return function (obj, encoding, next) {
        if (obj.title.toLowerCase().includes(string)) {
            this.push(obj);
        }
        next();
    }
}

function stringify(obj, encoding, next) {
    next(null, JSON.stringify(obj) + "\n");
}