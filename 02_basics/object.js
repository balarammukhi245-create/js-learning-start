// singleton

// object literals

const mySymbol = Symbol("116")

const jsUser = {
    name:"Balaram",
    [mySymbol]:"kay666",// for symbol we need to keep in bracket other wise it wiil not treate as a symbol 
    "full name": "Balaram Mukhi",// for this type of case we need to use the baracket instade of dot
    myNumber: 111122233,
    location:"Balasore",
    gmail:"balaram@111.gmail.com",
    lastLoginDays:["Monday","TuseDay"]
}

// console.log(jsUser.gmail);//it is not right way
// console.log(jsUser["gmail"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);


//for value change in object

// jsUser.gmail= "balaram69@gmail.com"
// Object.freeze(jsUser)//it is the way of freezing in objects
// console.log(jsUser["gmail"])

jsUser.gmail = "Baaa@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hii Balaram")
}
jsUser.greetingTwo = function(){
    console.log(`Hii jsUser ${this["full name"]}`)//string interpolation
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
