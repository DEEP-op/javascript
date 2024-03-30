
let arr = [1,2,3,4,5]
//map method (value,index,array)
let a = arr.map((value,index,array)=>
{
    console.log(value,index,array);
    return value+index
})

console.log(a);//we will gwt the new array with operation

//filter method
console.log("Filter method");
let arr2=[45,23,21,0,3,5]

let z= arr2.filter((value)=>{
    return value <10
})

console.log(z);

//reduce method 
//adds 1+2=result , result+3= result, result+4 = result.....
let arr3 = [1,4,6,7,4,4,7,]
let x = arr3.reduce((h1 ,h2)=>{
    return h1 +h2
})

console.log(x);