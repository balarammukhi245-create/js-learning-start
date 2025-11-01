// //Dates
// //it is date object
// const myDates = new Date()
// console.log(myDates);
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleString());

// console.log(typeof myDates)

let myCreatedDate = new Date(2023,0,28)
// let myCreatedDate = new Date(2023,0,28, 5,24)
// let myCreatedDate = new Date("2024-01-14")
// let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate .getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getSeconds())

console.log(`${newDate.getDay()} is now`)

newDate.toLocaleString("default", {
    weekday:"short"
})
console.log(newDate)