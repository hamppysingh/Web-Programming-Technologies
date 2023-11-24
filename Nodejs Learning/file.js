const fs=require('fs');

const files=fs.readdirSync('../4');//will show the files in the directory mentioned
console.log(files);

fs.readdir('$',function(err,files){ //will show the error as ../4 replaced with $
    if(err) console.log('Error',err);
    else console.log('Result',files);
})