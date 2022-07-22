let fs = require("fs")


function save(data){

    // Remove comma from array and add 'new line'
    data = data.toString().split(",").join("\n") + "\n";

    // let filelength = fs.readFileSync('link-1.txt').toString().split("\n").length

    fs.appendFileSync('link-1.txt', data);
}
 


module.exports = save