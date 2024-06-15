var myStr = "Zain";
// Now the function adheres to a specific type
var signUp = function (userDetails) {
    return { name: userDetails.name, email: userDetails.email };
};
var signUpUser = signUp({ name: "Zain", email: "z@zain.com" });
console.log(signUpUser);
// Creating an object of type Course
var myCourse = {
    courseID: 100,
    courseName: "TypeScript"
};
var obj1 = {
    id: [100]
};
// This works
obj1.id.push(200);
console.log(obj1.id);
var obj2 = {
    name: "John",
    email: "john@gmail.com"
}; // We won't get an error if we don't utilize the isAdult property
var obj3 = {
    name: "ZZZ",
    email: "z@z.com",
    courseID: 10,
    courseName: "React"
}; // We created an object that is of JoinedType which means that we can utilize both User and Course types in a single object
