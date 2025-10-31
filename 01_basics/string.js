// const name = "Balaram"
// const repoCount = 4
// //old method
// console.log(name + repoCount + " Value")
// //morder Method call as string interpolation

// console.log(`Hello My name is ${name} and my repositry count is ${repoCount}`)

const expampleName = new String('Balaram')

// console.log(expampleName)
// console.log(expampleName[0])
// console.log(expampleName.__proto__)


// console.log(expampleName.length);
// console.log(expampleName.toUpperCase());
// console.log(expampleName.charAt(4));
// console.log(expampleName.indexOf("B"));

const newGameName = "SnakeGame"
const newString = newGameName.substring(0,4)
// in substring we can not get the result in negetive string
console.log(newString);

const anotherString = newGameName.slice(-6,4)

// in slice we can give the negative value and get the string from back side 
console.log(anotherString);

const spaceString = "  Balaram  "
console.log(spaceString)
console.log(spaceString.trim())


const url = "https://flipkart.com/localhost%60ontheway"

console.log(url.replace("%60","-"))
console.log(url.includes("flipkart"))

console.log(url.split(":"));
