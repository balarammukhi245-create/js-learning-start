const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.map( (num)=> num+10 )

// console.log(newNum);

// const newNumber = []
// myNum.forEach( (num)=> newNumber.push(num+10) )
// console.log(newNumber);
//chaning
const myNewNums = myNum.map((num)=> num+10).map((num)=> num+1).filter((num)=> num >=10)

console.log(myNewNums);

