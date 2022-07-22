let fs = require("fs")


let data = fs.readFileSync('backup.txt').toString().split("\n");
 data = [...new Set(data)].join("\n")


 setTimeout(() => {
 fs.writeFileSync('backup.txt', data)
     
 }, 5000);

 