function duplicate(arr){
    var out = [];
for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
        if(arr[i] === arr[j]){
            out.push(arr[j])
        }
    }
}
console.log(out)
}
console.log(duplicate([2,4,2,3,1,2,3]))

function duplicate2(arr){
    var temp = {}
    for(var i = 0; i < arr.length; i++){
        var item = arr[i]
        console.log(temp[item])
        if(temp[item]=== undefined){
            temp[item] = 1;
        }
        else{
            var prev = temp[item];
            temp[item] = prev+1
        }
    }
    console.log(temp)
    var out = []
    for(var key in temp){
        if(temp[key] > 1){
            out.push(key);
        }
    }
    return out;
}
console.log(duplicate2([2,4,2,3,1,2,3]))