// Immediately Invoked Function Expressions (IIFE)

(function tea(){
    console.log("DB CONNECTED");
    
})();//semicolen need to use after the code end for exicute the second code 

//Named IIFE

//We use IIFE for removing the global scope polution and exicute the code ASAP for this reasion we use IIFE

( (name)=>{
    console.log(`connected to the DB Base ${name}`);
    
})("Balaram")

//UnNamed IIFE