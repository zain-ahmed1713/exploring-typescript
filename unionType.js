// Union can be used when we want to give an option for multiple data types
// Games can have levels that could be a number or a string like 1 or beginner and so on.
var displayGameLevel = function (level) {
    if (typeof level === "string") {
        console.log("You're currently a ".concat(level));
    }
    else {
        console.log("You're on level ".concat(level));
    }
};
var printLevelInString = displayGameLevel("Pro");
console.log(printLevelInString);
var printLevelInNumber = displayGameLevel(1);
console.log(printLevelInNumber);
// Strictly accepting values
var gameLevels;
gameLevels = "Beginner"; // All good
// gameLevels = "Newbie" // Not allowed as Newbie is defined as a type
// Arrays
var array1 = [1, 2, 3, 4]; // We already know array can be of a particular type is TS
// What if we want have multiple types of values in our array
// const array2: string[] | number[] = [1, 2, 3, 4, "Zain"]; // We're still getting an error
// To resolve above problem, we can do this
var array2 = [1, 2, 3, 4, "Zain"];
