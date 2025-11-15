const coding = ["js", "python", "java", 'cpp', "ruby"]
// coding.forEach(function (val){
//     console.log(val);
    
// })

// coding.forEach((item)=>{
//     console.log(item);
    
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const myCoding = [
    {
        langName:"JavaScript",
        fileName:"js"
    },    
    {
        langName:"Java",
        fileName:"java"
    },
    {
        langName:"cpp",
        fileName:"c++"
    }
]

myCoding.forEach((item)=> {
    console.log(item.langName);
    
})