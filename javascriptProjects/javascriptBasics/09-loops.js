// LOOPS
// Loops allow developers to repeat a bit of code over and over.

/*
    FOR LOOPS - 3 different parameters. 1. Initial expression (declaration), 2. condition, 3. increment expression

    SYNTAX:
    for (initial expression, condition, increment expression) {
        NESTED LOGIC
    }
*/

let i = 9;

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("This is coming from line 18", i);

for (i = 0; i <= 20; i++) {
    console.log(i);
}

for (i = 10; i >= 0; i--) {
    console.log("Oh hey there, Nelson");
}

let name = "Mallory";

for (let j = 0; j < name.length; j++) {
    console.log(name[j]);
}

// FOR IN - These loops are great for iterating over objects (enumerable properties).=countable

let student = {
    name: "Michael",
    awesome: true,
    degree: "JavaScript",
    week: 3,
};

for (item in student) {
    console.log(item); //output: name awesome degree week
    console.log(student[item])//OUTPUT: Michael, True, JavaScript, 3
}

let catArray = [
    "tabby",  //0
    "calico", //1
    "bengal", //2
    "junkyardcat", //3
    "siamese", //4
    "maine coon", //5 
    "hairles"] //6
for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

//FOR OF - great for iterating over arrays. They will iterate over the values of an iterable object (array).

let catArray2 = ["tom cat", "tiger", "shothair", "persian", "catdog", "serbal"];
for (cat of catArray2) {
    console.log(cat, "says meow");
}
//WILL NOT RUN BECAUSE OBJECTS ARE NOT ARRAYS AND NOT ITERABLE
let student2 = {
    name: "David",
    awesome: true,
    language: "Spanish",
    hobbies: "music",
};

for (item of student2) {
    console.log(item);
}


function solve(x, y, op) {
    let result
    switch (op) {
        case 1: result = x + y
            break
        case 2: result = x - y
            break
        case 3: result = x * y
            break
        case 4: result = x / y
            break
    }
    return result
}

let answer = solve(2,4,3)
console.log(answer)