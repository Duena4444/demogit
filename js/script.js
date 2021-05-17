//global and local variables
console.log(w)

let k=100 
let x=50
add()//hoisting
//we cannot hoist using let.but with var we can//
let z=20
function demo(){
    let x=100
    let z=30
    console.log("demo function...")
    console.log(x)
    console.log(z)
   
}

demo()
console.log(x) 
function add()
{
let sum=k+x
console.log(sum)
}
var w="welcomw"
add() 
function add(a,b)//pass by
{
    let sum=a+b
    console.log("inside add()")
   // console.log(sum)
    return sum//to return a value 
} let result=add(2,4)
console.log("result=", result)
console.log(add(2,3))

function average(i,j,k)
{
    return(i+j+k)/3
}
console.log("average =",average(5,5,5))
if(true)
{
var message="hello"
}
console.log(message)








