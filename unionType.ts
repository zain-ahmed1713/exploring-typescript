// Union can be used when we want to give an option for multiple data types

// Games can have levels that could be a number or a string like 1 or beginner and so on.
const displayGameLevel = (level: number | string): void => {
    if(typeof level === "string") {
        console.log(`You're currently a ${level}`);
    } else {
        console.log(`You're on level ${level}`);
    }
}

const printLevelInString = displayGameLevel("Pro");
console.log(printLevelInString);

const printLevelInNumber = displayGameLevel(1);
console.log(printLevelInNumber);

// Strictly accepting values
let gameLevels: "Beginner" | "Intermediate" | "Pro";
gameLevels = "Beginner"; // All good

// gameLevels = "Newbie" // Not allowed as Newbie is defined as a type

// Arrays
const array1: number[] = [1, 2, 3, 4] // We already know array can be of a particular type is TS

// What if we want have multiple types of values in our array
// const array2: string[] | number[] = [1, 2, 3, 4, "Zain"]; // We're still getting an error

// To resolve above problem, we can do this
const array2: (string | number)[] = [1, 2, 3, 4, "Zain"];
