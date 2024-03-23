//arrays

let marks = [89,78,77,56,87,null,false,"Not Present"]
console.log(marks);

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
console.log(marks[7]);


console.log("the length of array marks is", marks.length);


marks[6] = 67

console.log(marks[6]);

//arrays are mutable they can be changes 
console.log("before changing "+marks[0]);
marks[0]=100
console.log("after changing " + marks[0]);


//printing array elemets usinf loop
for(let i = 0; i < marks.length; i++)
{
    console.log(marks[i]);
}