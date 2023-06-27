function target(arr,k){
    var i = 0;
    var  j= arr.length-1;
while(i < j){
//    console.log(arr[i],arr[j])/
    if(arr[i]+arr[j] === k){
    return [arr[i],arr[j]]
    }
    else if(arr[i]+arr[j] > k){
        j--
    }
    else{
        i++
    }

}
return [-1,-1]
}
console.log(target([2,2,3,4,5],6))