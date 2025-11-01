// Kelvin Weather
// Today's temperature
let kelvin = 293;

// Today's temperature in Celsius degrees
let celsius = kelvin - 273;

// Today's temperature in F degrees
let fahrenheit =  celsius * (9/5) + 32;

// Round the temperature to an integer number
fahrenheit = Math.floor(fahrenheit);


// Degrees Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.\nAlso, it's ${celsius} degrees Celsius and ${kelvin} degrees Kelvin.\nAnd finally ${newton} degrees Newton!`);
