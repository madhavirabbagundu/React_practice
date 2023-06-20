// higher ordered function

// higher ordered function is a function it will pass argument to the another function. it will receive the function as a argument and return the function as a output.

//ex: reduce, filter, map,foreach

//map

// it will return the array. in map we can use the chaining methods. like filter.

const data = [2,3,4,5]
const res = data.map(data=>data)
    // console.log(data)

// console.log(res)

//foreach
//foreach method doesnot return new array. in foreach method we cannot use the chaing methods.

const res1 = data.filter(data=>data === 2)
console.log(res1)