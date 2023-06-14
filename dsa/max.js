function maximum(arr){
    var max = 0;
    var min = arr[0];
for(var i = 0; i < arr.length; i++){
if(arr[i] > max){
    max = arr[i]
}
if(arr[i] < min){
min  = arr[i];
}
}
console.log(max,min)
}
console.log(maximum([2,7,9,2,6]))