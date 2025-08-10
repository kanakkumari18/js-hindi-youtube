//primitive 
//7 types :string,number,boolean,null,undefined,symbol,bigint
const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
const bigNumber=747777734444744444n


//reference(non primitive)
//array,object,functions
const heroes=["shaktiman","iron man","spider man"];
let myObj={
    name:"kanak",
    age:20,
}
const myFunction=function(){
    console.log("hello world");
    
}
console.log(typeof heroes);

