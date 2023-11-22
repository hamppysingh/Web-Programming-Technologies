const fs=require("fs");

var rs=fs.createReadStream("test.txt");//search read file
var ws=fs.createWriteStream("targetfile1.txt");//create write write file
rs.pipe(ws);//create a pipe between read and write file to copy the data
console.log("End of the code")
