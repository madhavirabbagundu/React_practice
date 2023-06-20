//callback

//callback function is a function that pass an argument to the other function.
// the one function is wait for the another function excution.

//callback

function callback(){
    var out = "callback"
    main(out)
}
console.log(callback())

function main(out){
console.log(out)  // callback function
}