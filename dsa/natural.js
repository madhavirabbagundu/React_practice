function natural(arr){
    var EvenSum = 0;
    var OddProdu = 1;
for(var i = 0; i < arr.length; i++){
    if(arr[i]%2===0){
        EvenSum+=arr[i]
    }
    else{
        OddProdu*=arr[i]
    }
}
console.log(EvenSum,OddProdu)
}
console.log(natural([2,3,4,5,7,8,1]))