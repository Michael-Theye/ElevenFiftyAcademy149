//! PARAMETERS" a newly defined "variable" in the context of a function that hasn't been provided yet

/*
   -name of the parameter should reflect some type of relationship with the data expected to be passed in when the function is being executed
    function nameFunc(name, age, parameter3){
    console.log(`This is ${name}. They are ${age} years old`)
}
*/

function coffeePot(filter){
    console.log(`This is a ${filter} coffee`)
}

coffeePot("dark roast")
coffeePot("caramel")
coffeePot("peppermint")


//! FUNCTION REFERENCE
let kettle= coffeePot

kettle("nachos")

//multiple parameters (\n=new line on the console)

function tellBio(name, age, hairColor, height){
    console.log(`This is ${name}\nAge: ${age}\nHeigh: ${height}\nHair Color: ${hairColor}`)
}

tellBio("Michael Jordan", "63", "bald","198cm")
tellBio("Beyonce", "50", "dirty blonde","170cm")

//! RETRUN VALUES
function calc(num1, num2, num3){
    let total =num1 + num2 + num3
    let avg = Math.round(total / 3)
    
    return avg 
}
// results will not show anywhere
calc(1, 2, 3)

let avgNum = calc(152, 23042, 249)
console.log(`Average: ${avgNum}`)

/*

CHALLENGE



- Write a function that accepts name and grade as parameters, and then

prints "NAME got a GRADE in social studies" to the console.

*/

function student(name, grade){
    console.log(`${name} got a ${grade} in social studies`)
}

student("Tj", "B")

