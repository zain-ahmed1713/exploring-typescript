// If we want an array to be in specific order, we can use tuples
const arrayInOrder: [number, string, boolean] = [10, "Hello", true]
// const arrayInOrder: [number, string, boolean] = ["hello", false, 10]; // Will Produce an Error

// We can also use a type here too
type Order = [number, string, boolean]
const arr2: Order = [10, "Hello", true]

// What if we push something into the array
arr2.push(100) // This works and is a flaw in tuples
console.log(arr2)