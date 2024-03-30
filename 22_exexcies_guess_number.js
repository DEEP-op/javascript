const prompt = require("prompt-sync")();
let x = Math.random() * 100;
let num
while(x!=num){
     num = prompt("Guess the number ")
    if(num > x){
        console.log("The number you guessed is greater than random number ")
    }
    else if(x > num){
        console.log("The number you guessed is smaller than random number ")
    }
    else if(x == num){
        console.log("Hurrah !!! You Guessed the correct number");
    }
    else{
        console.log("pls enter the valid number from 1-100");
    }
}