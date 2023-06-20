//objects are three types
//1. object literals
//2. instead of objects
//3. constructor function


var obj = {
   name : "madhavi",
    age : 20,
}
console.log(obj,obj.name)

var data = new Object({
    name   :  "pushpa",
    age:19,
})
console.log(data.name)

function obejct(){
this.name = "amar",
this.age = 20
}
const out = new obejct()
console.log(out.name)