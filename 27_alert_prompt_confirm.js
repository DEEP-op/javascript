alert("hello your script is working fine")
alert("enter the value of A")

let a = prompt("enter a here","100")//100 is default value 

a = Number.parseInt(a)
alert("you entered a of "+ typeof a)

//alert always take value s a string

let write = confirm("do u want to write it ti the page")
if(write){
    document.write(a)
}else{
    document,write("please allow me to write")
}

