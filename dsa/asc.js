function asc(arr){
    var out = []
    var out1 = []
for(var i= 0; i< arr.length; i++){
    if(arr[i] === 0){
        out.push(arr[i])
    }
    else{
        out1.push(arr[i])
    }
}
for(var j = 0; j < out1.length; j++){
    out.push(out1[j])
}
console.log(out)

}
console.log(asc([4,7,8,1,0,2,0]))