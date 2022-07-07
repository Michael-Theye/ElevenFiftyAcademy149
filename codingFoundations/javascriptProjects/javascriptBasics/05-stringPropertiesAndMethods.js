// STRING PROPERTIES

/*
    Properties are qualities associated with a datatype
    Strings have 3 properties
    The length property is t he most popular one that developers prominently use.
*/

/*
SYNTAX
string.propertyName
*/

// length property - detemines the length of a string.

// let myName = "Taylor"; // output is 6
let myName="Taylor is my first name!"; //Output is 24
//The length propery accounts for spaces and punctuation in your string
console.log(myName.length)

// STRING METHODS
    // syntax
    // string.methodname()

    // toUpperCase method - capitalizes your string.
    let yourNameis = "CaSsAnDrA";
    console.log(yourNameis.toUpperCase()); //OUTPUT: CASSANDRA

    // includes method- this method checks to see if a certain string is "included" (or nested) inside of your string.
    let home ="My home is Texas";
    console.log(home.includes("Texas")); //OUTPUT: true because "Texas" exists in our string.
    console.log(home.includes("texas"));//OUTPUT false because "texas" DOES not exist innour string  JS is case sensitive

    let home2 = "My home is Texas part 2"
    console.log(home2.includes(2)); //OUTPUT: True becaused the includes method is NOT comparing Data TYPES.
    // NOTE: the includes method is NOT exclusive to just strings.