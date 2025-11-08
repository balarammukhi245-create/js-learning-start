//declaring the function

// function myName(){
//     console.log("Hii Balaram")
// }
// myName()

function calculation(num1,num2){
    console.log(num1+num2)
}

// calculation(1,6)

function addTwoNumbers(num1,num2){
    return num1+num2
}
const result = addTwoNumbers(5,9)
// console.log(result)


function userLogin(userName="Rahul"){
    if (!userName){
        return `${userName} please enter name`
    }
    else {
    return `${userName} is logged In`
    }
}

// console.log(userLogin("Balaram"))

function calculateCartPrice(...num){// cald as a rest operator ...num
    return num
}
// console.log(calculateCartPrice(500,800,600));
const user = {
    name:"Balaram",
    price: 299
}

function detailsObject(anyObject){
    console.log(`User Name ${anyObject.name} and it's price is ${anyObject.price}`);
    
}
// detailsObject(user)
// detailsObject(
//     {
//         name:"Rahul",
//         price:499
//     }
// )

const myNewArray = [200,400,900,888]
function returnArrayValue(getArray){
    return getArray[3]
}
console.log(returnArrayValue(myNewArray));
console.log(returnArrayValue(
    [600,500,200,800]
));


