const user = {
    userName: "Balaram",
    price: 999,

    WelsomeMessage: function(){
        console.log(`${this.userName} , Welcome to website`)
        console.log(this);
        
    }

}
//this. refer the current context 

// user.WelsomeMessage()
// user.userName = "rahul"
// user.WelsomeMessage()

// console.log(this);
//in side the code space this throw a empty object dut to here no global value  is present 

// but when we console this in ispect in google we get the windows object dut in global there windows is present 

// function chai(){
//     let userName = "balaram"
//     console.log(this.userName);
// }
// chai()

// this only use and work in object not in function 

//Arrow Function
//traditional arrow unction
// const rock = ()=>{
//     console.log("hii")
// }

// rock()

// const superMan =(num1,num2)=>{
//     return num1 + num2
// }

// console.log(superMan(1,9));

//implicit return
// const superMan =(num1,num2)=> num1 + num2
const superMan =(num1,num2)=> (num1 + num2)

console.log(superMan(3,4));
// if we write in querly braces we need to write return but not in implicit return 

const name = ()=>({userName:"balaram"})

console.log(name());
