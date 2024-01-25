// Setting kelvin to be a constant value of 293
const kelvin = 293;

var celcius = kelvin - 273;
// Declare a variable called celcius to be equal to kelvin - 273

var fahrenheit = (celcius * (9/5)) + 32;
//Declare a variable called fahrenheit that calculates F using the given formula

var newton = Math.floor(celcius * (33/100));

console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${celcius} degrees Celcius.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${newton} degrees Newton.`)
