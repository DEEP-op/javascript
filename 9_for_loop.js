const prompt = require("prompt-sync")();
//for loop
for(let i = 0; i < 5 ;i++)
{
console.log(i)
}

let obj = {
    harry : 87,
    saamr : 77,
    deep : 67,
    niharika : 67,
}

// for in loop

for(let a in obj)
{
    console.log("marks of " + a + "are " + obj[a])
}


//for of loop

for (const b of "harry") {
    console.log(b);
}

//