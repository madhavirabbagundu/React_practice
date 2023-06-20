// the scope are three types are global variable , local variable and block scope.
// Global scope means. when declare the variable inside or outside of an function.
// when the variable is assed from outside or inside of an function . it is called the global scope.

// local scope:
// when the variable is assigned in between the function. it does not allow the outside of an function is called local scope.


// block scope
// block scpe means the when the variable is assigned in between the blocks otherwise it does not allowed to outer. 
// here only let and const are the block scopes.

//Global scope example
var out = "global";
let out1 = "local";
const out2 = "block"
function globlaScope(){
    var res = "global1";
    let res1 = "local1";
    const res2 = "block1"
console.log(out,res)
console.log(out1,res1)
console.log(out2,res2)
}
console.log(globlaScope());

// functional scope
function functionalScope(){
    var data =  "local"
    console.log(data,'in between the function it will display otherwise it doesnot')
}

// return functionalScope();

//block scope
function block(){
    // var data = "block"
    const data1 = "madhavi"
    console.log(data1)
}
// return block();
console.log(block());