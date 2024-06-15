// We can give an alias to a type in TS
type zStr = string; // Now instead of writing "string" for a type, i can write zStr. This is not recommended and shouldn't be used
const myStr: zStr = "Zain"

// Wrote this function in functions.ts file and it works fine but there is a better way to write this
// const returnObj = (name: string, email: string): {} => {
//     return { name: name, email: email }
// }

// const runFunction = returnObj("Zain", "zain@zain.com")

// Creating a User type
type User = {
    name: string;
    email: string;
}

// Now the function adheres to a specific type
const signUp = (userDetails: User): User => {
    return {name: userDetails.name, email: userDetails.email}
}

const signUpUser = signUp({name: "Zain", email: "z@zain.com"});
console.log(signUpUser);

// Readonly keyword
type Course = {
    readonly courseID: number;
    courseName: string;
}

// Creating an object of type Course
const myCourse: Course = {
    courseID: 100,
    courseName: "TypeScript"
}

// Assignment is not allowed as courseID is readonly
// myCourse.courseID = 200;

// What if readonly property is an array, can we push values into it?
type MyArrayType = {
   readonly id: number[];
}

const obj1: MyArrayType = {
    id: [100]
}

// This works
obj1.id.push(200)
console.log(obj1.id)

// Optional properties '?'
type UserType = {
    name: string;
    email: string;
    isAdult?: boolean; // The '?' tells that the property is optional, we won't get an error if this property is not utilized
}

const obj2: UserType = {
    name: "John",
    email: "john@gmail.com"
} // We won't get an error if we don't utilize the isAdult property

// Joining Types to create a new type
type JoinedType = User & Course; // We've joined User and Course types into JoinedType

const obj3: JoinedType = {
    name: "ZZZ",
    email: "z@z.com",
    courseID: 10,
    courseName: "React"
} // We created an object that is of JoinedType which means that we can utilize both User and Course types in a single object