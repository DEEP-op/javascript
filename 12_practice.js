const prompt = require("prompt-sync")();

//  let marks = {
//     deep : 90,
//     singh : 80,
//     rajpal : 70,
//     niharika : 60

// }
// //Q1
// for(let i=0; i < Object.keys(marks).length; i++)
// {
//     console.log("the marks " + Object.keys(marks)[i]+ " are " + marks[Object.keys(marks)[i]]);
// }

// //Q2

// for(let i in marks)
// {
//     console.log("the marks " + i + " are " + marks[i]); 
// }

// //Q3 the number enterd equal to the number

// let c = 4
// let i
// while(i!= c){
//      i = prompt("enter the number")
//      console.log("try again");
// }

//Q4 the funtion of mean

const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}

console.log(mean(1,2,3,4));
