//ch5 practice set
const prompt = require("prompt-sync")();

//Q1

let arr = [1,2,3,4,4,5,5]
let a =  prompt("enter the number ")
a = Number.parseInt(a);
arr.push(a)
console.log(arr);



let b
//Q2
while(b!=0){
    b= prompt("enter the number ")
    b = Number.parseInt(b)
    arr.push(b)
    console.log(arr);

}

Q3
let arr1  = [1,5,37,867,346,587,98,9324]

let fil = arr1.filter((x)=>{
    return x%2 == 0  
})

console.log(fil);


Q4

let arr2  = [1,5,3,6,8,5,4]

let mapp = arr2.map((x)=>{
    return x*x  
})

console.log(mapp);

//Q5

let arr3 = [ 1,2,3,4,5]

let factorial = arr3.reduce((z1,z2)=>{
    return z1*z2
})
console.log(factorial);






