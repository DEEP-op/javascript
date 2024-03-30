//here we use going to impement array usning loop

let num = [3,54,1,3,6]

for(let i = 0; i < num.length; i++)
{
    console.log(num[i]);
}
console.log("\n");

//for each loop
num.forEach((Element)=>{
    console.log(Element*Element);
}
)

//Arrayfrom

let me = "samar"
let arr = Array.from(me)//converts my string to array
console.log(arr);

// for of -- is a shortcut way to access the elements of array
for(let item of num){//returns keys
    console.log(item);
}

//for in loop
for(let i in num){
    console.log(num[i]);
}
