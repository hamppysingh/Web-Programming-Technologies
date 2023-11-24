
console.log(module);
const logger=require('./logger');//importing logger.js inside this
console.log(logger);
//logger=1;
logger.log("Hello")
//This code is wrapped into module wrapper function
//this code is wrapped inside the function and if any error will come then the function(exports,require,module,__filename,__dirname) 