function average(arr){
    var sum = 0;
    var avg = 0;
for(var i = 0; i < arr.length; i++){
    sum+=arr[i]
}
avg+=sum/arr.length;
return avg;
}
console.log(average([2,3,4,5]))