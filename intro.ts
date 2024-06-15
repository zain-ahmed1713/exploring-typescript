const user = {
    uid: 1001,
    name: "zain",
    email: "zainahmed1713@gmail.com"
}

// Works fine
console.log(user.uid);
console.log(user.name);
console.log(user.email);

// Will produce error
// console.log(user.age)

// In JS this works but not in TS because of type checking
user.name = 1234