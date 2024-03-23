//array methods

//convert to string
let num  = [ 23,53,4,43,34]
let b = num.toString()
console.log(b);
console.log(typeof b);

// join array elements
console.log("\n");
let c = num.join(" and ")
console.log(c);

//pop array

num.pop()//popped 34
let r = num.pop()//popped 43 and print array and element popped
console.log(num , r);
console.log("\n");

//push
//d returns lenght of array
num.push(43)
let d = num.push(34)
console.log(num ,d);

//shift and unshift

let q = num.shift()
console.log(q,num); 

//in usshift s will return length of array
let s = num.unshift(100)
console.log(s,num);