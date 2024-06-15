// Type inference doesn't help in function parameters so we have to explicitly define types
var divideByTwo = function (num) {
    return num / 2;
};
var result = divideByTwo(8);
var signup = function (name, age, email, password) {
    return "User Signed Up";
};
var result1 = signup("Zain", 23, "zain@zain.com", "123abc");
// We can also define return types
var addThree = function (val) {
    return val + 3;
};
// Void type
// Used when a function doesn't return anything
var sayHello = function (name) {
    console.log("Hello, ".concat(name));
};
// never type
// Used when a function is used to throw some errors and doesn't return a value
var throwError = function (errMsg) {
    throw new Error(errMsg);
};
// Object Type
// Used when a function returns an object
var returnObj = function (name, email) {
    return { name: name, email: email };
};
var runFunction = returnObj("Zain", "zain@zain.com");
// Array map method
var languages = ["JS", "CPP", "Python"];
languages.map(function (val, index) {
    return "Value: ".concat(val, ", Index: ").concat(index);
});
