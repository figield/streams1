# Node.js Streams

Unix: a | b | c | d

Node.js: a.pipe(b).pipe(c).pipe(d)

## stream types

* readable - produces data (e.g. fs.createReadStream())
* writable - consumes data (e.g. HTTP response on the server)
* transform - consumes and produces data (e.g. through2)

* readable: `readable.pipe(A)`
* writable: `A.pipe(writable)`
* transform: `A.pipe(transform).pipe(B)`

## writable streams

e.g. HTTP response

* ```res.write(buf)```
* ```res.end()```
* ```res.end(buf)``` - shorthand
* ```res.on('finish', function() {})```
* ```(...).pipe(res)```

## readable streams

e.g. fs.createReadStream()

* ```file.pipe(...)```
* ```file.on("end", function() {})```

## http core streams

server side: req is readable, res is writable
```
http.createServer(function(req, res) {})
```

client side: req is writable, res is readable
```
var req = http.request(options, function(res) {});
```

## exercise

HTTP client should read books.import.txt, gzip it,
send a POST request to the server and print response to stdout.

HTTP server should gunzip request, split it on new lines, filter out only
books with javascript in the title
and return a newline delimited JSON of objects with title property.

Expected output:
```
{"title":"Secrets of the JavaScript Ninja"}
{"title":"Third-Party JavaScript "}
{"title":"Building Well-Structured JavaScript Applications"}
{"title":"Secrets of the JavaScript Ninja pBook upgrade"}
{"title":"JavaScript Application Design"}
```

Hints:
* use those modules: http, fs, zlib, split2, through2 (in object mode)