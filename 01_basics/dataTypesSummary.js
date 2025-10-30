// Primitive
// there are 7 types of primitive :- String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100//string or number
const scoreValue = 100.3 //number
const isLoggedIn = false //boolean
const outSideTemp = null //null
let userEmail; // undefined

const id = Symbol('1230')
const anotherId = Symbol('1230') //symbol

// const bigNumber = 1524654484487474874n //bigInt

console.log(id === anotherId)


//Non=primitive or Reference

//Array,Object,Function

const heros = ["shaktiman" , "hero" , "hatim"]
let myObj = {
    name:"Balaram",
    age: 23
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof heros)
 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack (primitive), Heap (None-Primitive)

 let myName = "Balaram"
 let reName = myName
 reName= 'Mr.Balaram'
 
 console.log(myName)
 console.log(reName)

 //it is Stack memory which is only given a copy not an referance so it will change as per you change 

 let userOne = {
    name:"Balaram",
    email:"balaram@gmail.com"
 }

 let userTwo = userOne
 userTwo.email = "odisha@gmail.com"

 console.log(userOne.email)
 console.log(userTwo.email)

 //In heap it take referance not copy so it is change with the original data 

 // stack is (Primitive ) and Heap (Non-Primitive) are memory type