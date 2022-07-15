// HOISTING: Storing a variable in memory so that it can be referenced/used through out the program.
//* Creation Phase: any variables (var, cont, let) OR functions being stored in memory.
//* Execution Phase: values being assigned to the variable/function that were stored in the memory during creating phase.

/*
    (create) (execute)
    let variables(creation) = value(execution)
*/

// let num = 18
// console.log(num)

// !Function DECLARATION
// sayHi()

// function sayHi() {
//     console.log("Hi!")

//     let hi= "Waddup"
//     console.log(hi)
// }

// ! Function EXPRESSION

let varFunc=function(){
    console.log("fart")
}
varFunc()