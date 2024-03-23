//Q1
let n = "har\""
console.log(n.length);

//Q2
const s = "the quick brown fox runs over lazy dog ";
const t = "fox";

//returns true or false
console.log(s.includes(s));

//using ternary operator and string interpolation
console.log(`the word ${t} ${s.includes(t) ? 'is' : 'is not'} int  the sentenec `);

//tells it starts with ot not
console.log(s.startsWith(t));

//tells it ends with or not
console.log(s.endsWith(t));


//Q3
let l = "JIM JAM"
console.log(l.toLocaleLowerCase());


//Q4
let str = "pls give Rs 1000"
let amount = Number.parseInt(str.slice(12))
console.log(amount);
console.log(typeof amount);

//Q5
let m = "deepika"
m[3] = "r"
console.log(m);
///strings cannot be changes because they are immutable

