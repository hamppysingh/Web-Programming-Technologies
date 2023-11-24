global.bird="sparrow";
global.companyName="IACSD";//declared global

function global(varname){
    console.log(global[varname]) //print global function that return the value of global var
}

console.log(global["bird"]);//value of global bird
console.log(global["companyName"]);//value of global companyName
for(var ob in global){
    console.log(ob+"----->"+global[ob]);//loop to display all the global vars
}