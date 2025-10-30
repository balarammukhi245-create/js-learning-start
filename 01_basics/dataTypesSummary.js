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
