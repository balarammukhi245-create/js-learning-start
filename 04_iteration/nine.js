const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and curr : ${currval}`);
    
//     return acc + currval
// },0)

const myTotal = myNum.reduce((acc,curr)=>(acc+curr),0)

console.log(myTotal);

const shoppingCart = [
    {
    itemName: "js course",
    price:2999
},
{
    itemName: "py course",
    price:4999
},
{
    itemName: "c++ course",
    price:1999
},
{
    itemName: "mobile dev course",
    price:19999
},
]

const totalPrice = shoppingCart.reduce((acc,item)=>{
    return acc+item.price 
},0)
console.log(totalPrice);
