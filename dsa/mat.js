function mat(arr){
    console.log(arr)
    var sum = 0;
    var sum1 = 0;
for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
        if(i === j){
            sum+=arr[i][j]
        }
        if(i+j === arr.length-1){
            sum1+=arr[i][j]
        }
    }
}
console.log(sum,sum1)
}
console.log(mat([[1,2,3],[4,5,6],[7,8,9]]))