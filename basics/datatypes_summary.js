//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Primitive data types are immutable (cannot be changed) and are compared by value
// Reference or Non-primitive data types are mutable (can be changed) and are compared by reference

// stack => primitive data types
// heap => reference or non-primitive data types

let myname = "IBrahim";
let anotherName = myname;
anotherName = "Muhammad";
console.log(anotherName);
console.log(myname);

let userOne = {
  name: "Muhammad Ibrahim",
  email: "m@example.com",
};
let userTwo = userOne;
userTwo.email = "is@example.com";
console.log(userOne.email);
console.log(userTwo.email);
