const fs = require("fs");
fs.createReadStream("./data.txt").pipe(process.stdout);