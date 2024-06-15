// Type inference doesn't help in function parameters so we have to explicitly define types
const divideByTwo = (num: number) => {
    return num / 2;
}

const result = divideByTwo(8);

const signup = (name: string, age: number, email: string, password: string) => {
    return "User Signed Up"
}

const result1 = signup("Zain", 23, "zain@zain.com", "123abc");

// We can also define return types
const addThree = (val: number): number => {
    return val + 3;
}

// Void type
// Used when a function doesn't return anything
const sayHello = (name: string): void => {
    console.log(`Hello, ${name}`)
}

// never type
// Used when a function is used to throw some errors and doesn't return a value
const throwError = (errMsg: string): never => {
    throw new Error(errMsg)
}

// Object Type
// Used when a function returns an object
const returnObj = (name: string, email: string): {} => {
    return { name: name, email: email }
}

const runFunction = returnObj("Zain", "zain@zain.com")

// Array map method
const languages = ["JS", "CPP", "Python"]
languages.map((val, index): string => {
    return `Value: ${val}, Index: ${index}`;
})