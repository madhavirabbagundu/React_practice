//promises

// promise is an object. it will handle the asynchrous operation.
// it will easy to manage when dealing with multiple asynchrous operations.

// promise
var promise = new Promise(function(res,rej){
    var a = 10;
    var b = 10;
    if(a === b){
        res()
    }
    else{
        rej()
    }
    
});
promise.then(function(){
    console.log("sucess")
})
.catch(function(){
    console.log("failure")
})



// primitive datatypes

//primitive data types are can store only one datatype . it is called the primitive dataype
// this is a kind of data structure that cn store only one type.

//ex:int,string,float etc


//non primitive datatype
// non primitive dataype is a data strucure that can store the multiple data types.
// non primitive data types are store the more than one more datypea is called the non primitive dataypes
// ex: objects,arrays


// null
// null means something is currently unavailble.

// undefined
// undefined means something hasn't been initialised is called undefined.
