let names = "harry"
//to find length
console.log(names.length);
//to upper case
console.log(names.toUpperCase());
//to lower case
console.log(names.toLowerCase());
//to get sub string from large string
console.log(names.slice(2,4));
console.log(names.slice(2));
//to replace from string
console.log(names.replace('har' , "per"));
//to concat
let friend = "niharika"
console.log(names.concat(" is my friend " , friend , " ok "));

//trim to remove spaces

let friend2 = "      banana   "
console.log(friend2);
console.log(friend2.trim());


//to print the letter of string using loop
let see = "my name is samar"
for(let i =0 ; i < see.length; i++) 
{
    console.log(see[i]);
}
