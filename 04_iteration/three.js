//for of loop 

// const array = [1,2,3,4,5,6,7]

// for (const num of array) {
//     console.log(num);
    
// }

// const greetings = "Helle world"
// for (const greet of greetings) {
//     console.log(`Each character is ${greet}`);
// }
//maps
const map = new Map()
map.set("Odisha","OD")
map.set("AndhraPradesh","AP")
map.set("Dilhi","DL")

// console.log(map);
//destructure the map and write with the [] bracket
for (const [key,value] of map) {
    console.log(key, ":- " ,value);
    
}

const myObject = {
    "game1" : "PUBG",
    "game2" : "SOF",
    "game3" : "MINI MILITIA"
}

for (const [key , value] of myObject) {
    console.log(key, ":- " ,value);
    
}