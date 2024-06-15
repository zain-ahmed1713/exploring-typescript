// Explicitly defining types
var sayHello = "Hello, Zain!";
var age = 22;
var isLoggedIn = true;
// Type inference : TS decides the type based on the value assigned
// Its better to use type inference when things are obvious
var myName = "Zain";
console.log(typeof myName);
// any
var myArr; // We don't know what myArr is gonna contain, so its is of type "any" right now.
myArr = ["JS", "CPP", "Python"]; // myArr now contains an array of string values
myArr = [10, 20, 30]; // Now, myArr contains array of numbers
// "any" type simply means that type checking will be disabled for a particular variable and it is not a good practice to use it.
// arrays
// Explicitly defining array types
var evenNumbers = [2, 4, 6, 8];
var vowels = ['a', 'e', 'i', 'o', 'u'];
