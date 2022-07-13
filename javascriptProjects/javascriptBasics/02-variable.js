//  Variables

// Variables are name containers that store data.
// Variables are named so that we can refer to them later and put values into them.

/* 
    SYNTAX

    let nameOFVariable = value;
    (1)     (2)        (3) (4)

    1. let is a JS keyword that denotees that this is a bariable and we are creating it.
    2. The name of the variable (which we can use to reference later.)
    3. Assignment operator (=).
    4. The actual value that the variable holds.
*/

let firstName = "Neisha"
console.log(firstName); 

let greeting; //Decleration. This is the left side  of the assignment operator (=).
console.log(greeting)

greeting ="hello there"; //initialization. Everything on the right side of the assignment operator (=). This is getting my variable a value
console.log(greeting)

/*
    3 differnt keywords to declare a variable
    1. Let- This is the standary keyword. We can use let to reinitialze and/or change our value iwth this keyword.
    2. const- This keyword stands for "constant". We can NOT reinitialize or change our value with this keyword
    3. var- This keyword ios a lot like "let" though it's not as good with error handling. Tis deprecated. NO NOT USE THIS KEYWORD This is our "Bruno."
*/

const lastname= "Fouts";
console.log(lastname)
// lastname = "Ervin";
// console.log(lastname)

// Naming Convetions
// There's no limit to the length of your variable name.
// Variable name cannot start with a number cannot use a space either or punctuation.
// $, _ or any letter can be used for naming variables.

let niceGreeting = "Hello there"; //camelCasing

let NiceGreeting = "Oh hi there!"; //PascalCasing

let nice_Greeting = "Howdy"; //snake_Casing

let $niceGreeting = "Hey"

console.log(NiceGreeting);

