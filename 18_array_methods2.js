//deleting array element

let num = [1,2,3,4,5,6,7]
delete num[0]
console.log(num);

//concat

let n1 = [6,7,8,9,10]
let n2 = [16,17,18,19,20]
let n3 = [26,27,28,29,30]

let new1 =n1.concat(n2,n3)
console.log(new1);

//sort

let arr1 = [2,8,4,2356,87,767,5]
arr1.sort()//sorts alphabetically bcoz its string
console.log(arr1);


//in acending order
let compare = (a,b) => {
    return a-b
}

let h = [35,5778,34,67,3276,34]
h.sort(compare)
console.log(h);


//reverse
h.reverse()
console.log(h);

splice

let m = [2,345,76,43,24,54,76]
m.splice(0,2,0,0)
console.log(m);

//slice
let t = [2,345,76,43,24,54,76]

let o = t.slice(3)
console.log(o);
let o1 = t.slice(2,6)
console.log(o1);




