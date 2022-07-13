// TYPES

// Anything on the right side of the assignment operator (=). They are the 'values', the data that we store for later. There are two types of data types (at least what we'll be going over today: Primitive and Complex).

//BOOLEANS
//A boolean has only two types of possible values: True or False

let on = true;
console.log(on);

let off = false;
console.log(off)

// STRINGS
// String are going to represent plain text and will be wrapped in either single or doubnle qoutes. 
//NOTE: We can use single or double quotes. JS can read them both as strings. HOWEVER, the opening quotation should match the closing quotation.

let quote = "Hello there!";
console.log(quote)

// let quotation = '"This is a quotation"'
let quotation = "\"Hello there\""; //<-------- THIS METHOD OVER HERE SUCKS
console.log(quotation)

let loremIpsum = "Cupcake ipsum dolor sit amet soufflé cookie cake carrot cake. Toffee chocolate brownie sweet roll jelly beans gingerbread. Sweet roll pie lollipop cupcake chupa chups cotton candy sweet roll tiramisu. Dessert cake chupa chups muffin marzipan chocolate shortbread ice cream. Halvah cake croissant tootsie roll muffin cotton candy bonbon candy tart. Toffee oat cake candy bonbon soufflé cheesecake sweet roll.";

//  NOTE: You can have 9 quadrillion characters in your string.
let noWords ="";

// NUMBERS
//NUMBERS are gonna be quite literally numbers. No special characters required.
//  NOTE: You can have 9 quadrillion characters for out numbers.

let temp = 38;
console.log(temp)

let precise = 999999999999999; //15 9's
console.log(precise)

let rounded = 9999999999999999; //16 9's
console.log(rounded) //OUTPUT is 10000000000000000 JS is terriblle at math like me. IT likes to round up after a specific amount of characters

let someMATH = 0.2 + 0.1
console.log(someMATH); //JS at a certain number starts to round up. (16th Place) If math is needed BE AWARE.

let numberAREHARD = (0.2 * 10 + 0.1 * 10) / 10; //JS CAN do math, it just needs some extra steps.
console.log(numberAREHARD) //OUTPUT: 0:3

// NUMBERS VS STRINGS
let first=1050 + 100;
console.log(first) //OUTPUT: 1150

let second= "1050"+ "100";
console.log(second) //OUTPUT: 1050100; Concatenation, This is a string.
// CONCATENTAION - adding one string with another string to combine them to create a new single string. We are just appending them together

console.log(typeof first);
console.log(typeof second);

let firstName ="Michael";
let lastName ="Theye";

let fullName = firstName + " " + lastName
console.log(fullName); //Outcome will be "Michael Theye"

let third = 1050 + "100";
console.log(third) //OUTPUT: 1050100; Coercion.
//COERCION - Is when JS assumes when we are adding a numver and a string together that they are both gonna be strings. 

//NULL
//NULL acts as an empty container. It has nothing in it, but it still exist as a space to be filled.

let empty = null;
console.log(null)

//UNDEFINED
//Undefined has NO value to be assigned and does NOT act as an empty container/
let correct;
console.log(correct)

//let incorrect = undefined;
//NOTE you can technically do this, its just bet not to practice

// NULL VS UNDEFINED
// NULL is a contained with nothing in it
// UNDEFINED is when a variable has not been assigned a value, nor has it been created yet

// Think of an UPS store.
// NULL is a package that has been assembled. It is waiting for something to be put inside of this assembled box.
// Undefined is a package that is not assembled yet. It still needs to bne assembled and have something packed inside of it.

let password ="ascd1234";