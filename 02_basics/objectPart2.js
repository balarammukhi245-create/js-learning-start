//this are the way to declear of object
//singleton  object
const tinderUser = new Object();
//non singleton  object
// const tinderUser2 = {}
// console.log(tinderUser)

tinderUser.id = "456abs"
tinderUser.name = "Balaram"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
    email: "bbb@gmail.com",
    fullName: {
        userFullName:{
            firstName:"Balaram",
            lastName:"Mukhi"
        }
    }
}

// console.log(regularUser.fullName.userFullName.lastName)


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4 = {obj1,obj2}

// const obj4 = Object.assign({}, obj1,obj2,obj3)
// console.log(obj4)

//combine all abject with the assign operator 


const obj4 = {...obj1,...obj2}
// joint as sprade operator
// console.log(obj4);

console.log(Object.keys(tinderUser));
//out out as a array

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));
//checking there property are avaliable or not



