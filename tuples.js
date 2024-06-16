// If we want an array to be in specific order, we can use tuples
var arrayInOrder = [10, "Hello", true];
var arr2 = [10, "Hello", true];
// What if we push something into the array
arr2.push(100); // This works and is a flaw in tuples
console.log(arr2);
