// # primitive  ye call by value hote hai
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 345643576654356754n

 
// # Reference (Non primitive)
// Array, Objects,Functiions


const heros = ["shaktiman","naagraj","doga"];

let myObj ={
    name:"hitesh",
    age:22,
}

const myFunction=function(){
    console.log("Hello World")

}


console.log(typeof myFunction )