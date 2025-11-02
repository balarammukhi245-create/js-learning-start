const marvelHeros = ["tony","ironman","spiderman"]

const dcHeros = ["superman", "flash", "batman"]
// marvelHeros.push(dcHeros)
//push only push the another value as a array to existing array

// console.log(marvelHeros)
// console.log(marvelHeros[3][1])

// const allHeros = marvelHeros.concat(dcHeros)
//concat is joint to array and make a new array but is is some limitation 
// console.log(allHeros)

const allNewHeros = [...marvelHeros,...dcHeros]
//in spared operatior it will work as concat like but more easyer and no limitation
// console.log(allNewHeros);

const newArray = [1,2,3,4,[1,6,6],[5,6,7,[4.5,8]]]

const realNumber = newArray.flat(Infinity)
//flat is used to spred complecated array like this one
// console.log(realNumber)

console.log(Array.isArray("Balaram"))
//isArray find it is array or not result in boolean
console.log(Array.from("Balaram"))
//from covert to arry 
console.log(Array.from({name:"Balaram"}))//Interesting


let score1 = 600
let score2 = 200
let score3 = 100
console.log(Array.of(score1,score2,score3));
// need to read of,isArray, and from array
