// OPERATORS

// ASSIGNMENT OPERATOR
//The = sign in between our variableNAME and our values. Helps assign values to our decleration.
let r = 5;

// COMPARISON OPERATORS
// EQUAL TO
console.log(3 == 3); //TRUE
console.log("3" == 3); //TRUE
// COERCION is happening and JS assumes that wea re doing "3" == "3" It converd that number into a string

//STRICT EQUAL TO
console.log("3" === 3) //false
// COERCION DOES NOT HAPPEN HERE. So strictly equals to is checking the data type and the value.

//NOT EQUALS TOO
console.log("3" != 3);// false because COERCION is happening and "3" does equal a "3"

// STRICTLY NOT
console.log("3" !== 3); // true becausde the string data type of "3" does not equal the number 3

// GREATER THAN
console.log(3 > 2)

//LESS THAN
console.log(2 < 3)

//GREATER THAN OR EQUAL TO
console.log(3 >= 2);

//LESS THAN OR EQUAL TO
console.log(2 <= 3);

// AND &&
console.log(2 < 3 && 3 > 2);// true because both expression on either side of && are true
console.log(2 < 3 && 3 < 2)// false 3 < 2 and the other expression is true but since one is wrong its still false
// console.log(5 < 4 && 12 > 24); false since both are false

// OR ||
console.log(2 <3 || 3 < 2); // true because one of statements is true with || <-- symbols

// ADDITION
r = r + 1
r += 1;

//SUBTRACION
r = r-1;
r -= 1;

// MULTIPLICATION
r = r * 1;
r *= 1;

//DIVISION
r = r / 1;
r /= 1;

//EXPONNTIAL
r = r ** 2;
r **= 2;

// MODULUS
console.log(5 % 2);



