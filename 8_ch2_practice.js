const prompt = require("prompt-sync")();
//que1

let a = prompt("what is your age")
a  = Number.parseInt(a)
if(a>10 && a <20 ){
    console.log("youe age is between 10 and 20")
}
else{
    console.log("youe age is not between 10 and 20")

}




// //que 2
// let age = prompt("enetr your age")
// console.log(age)

//  switch(age){
//     case '12':
//         console.log("your age is 12")
//         break;

//     case '13':
//         console.log("your age is 13")
//         break;

//     case '14':
//         console.log("your age is 14")
//         break;

//     case '15':
//         console.log("your age is 15")
//         break;
    
//  }


//  //que 3

//  let num = prompt("enter the num")

//  if(num%2==0 && num%3==0)
//  {
//     console.log("its divisible")
//  }
//  else{
//     console.log("its not divisible")
//  }

 //que4

//  let num1 = prompt("enter the num")

//  if(num1%2==0 || num1%3==0)
//  {
//     console.log("its divisible")
//  }
//  else{
//     console.log("its not divisible")
//  }

//que5

// let z = 19
// let y = z > 18 ? "you can drive " : "you cannot"
// console.log(y)