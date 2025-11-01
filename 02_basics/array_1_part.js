//Array
//this is one of type we of declaring the arrya 
const myArray = [0,1,2,3,4,5,6,7]
//this is anothe type we acn  of declaring the arrya 
const myArray2 = new Array(1,2,2,3,4)

// console.log(myArray[0]);
// console.log(myArray2)

//Array Method
// myArray.push(6)
//push add the value in last of array
// myArray.push(9)
// myArray.pop()
//pop is remove the last value in array

// myArray.unshift(7)
// myArray.shift()
//unshift is insert the value in starting and shift remove the first value from array 
// console.log(myArray)

// console.log(myArray.includes(4));
//result in true or false
// console.log(myArray.indexOf(4));
//result in index number if it is not present it returns -1


// const newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);
// join return value in string with out any brackets 


//slice and splice

console.log("A " , myArray);

const myA1 = myArray.slice(0,5)
//slice won't manipulate the original data it just cut the array as per the given order 


console.log(myA1)
console.log("B", myArray)

const myA2 = myArray.splice(1,4)
//splice manipulate the origina array and modify for the result 
console.log(myA2)
console.log("c " , myArray)

