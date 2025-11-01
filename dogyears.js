// Dog Years

// My Current Age
const myAge = 34;

// The dog's first 2 years count as 10.5 years in human age
let earlyYears = 2 * 10.5;

// Now the later years count as 4 years
let laterYears = (myAge - 2) * 4;


// Checking if the values are correct 
console.log(earlyYears);
console.log(laterYears);

// Adding the values to check my age in dog numbers
let myAgeInDogYears = earlyYears + laterYears;

// My name
let myName = 'Bruno'.toLowerCase();

// Printing the information
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`)
