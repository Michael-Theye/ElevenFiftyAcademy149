/* TYPES OF FUNCTIONS:
    -Function declartaion
    -Function expression
    -Anonymous functions
*/

//! Function Declaration
function declaration() {
    console.log("This is the function body")
}

//! FUNCTION EXPRESSIONS
//- are not HOISTED after creation... stored within a variable 
let expression =function(){ // <---"anonymous" function
    console.log("this is a function expression")
}
