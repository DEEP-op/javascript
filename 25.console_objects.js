console.error("this is an error")

//assert
console.assert(5>34);
console.assert(5<34);

//table
obj  = {a:1 ,b:2, c :3}
console.table(obj)

//info
console.info("its imp info")

//time

console.time("forLoop")

for(let i = 0; i < 5; i++)
{
    console.log("samar");
}

console.timeEnd("forLoop");

//comparing while and for time

console.time("WhileLoop")
let i = 0;

while(i < 5){
    console.log("samar");
    i++
}
console.timeEnd("WhileLoop")
