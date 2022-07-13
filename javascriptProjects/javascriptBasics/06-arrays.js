// ARRAYS

/* 
    Arrays are containers that hold list of items. They are denoted by there [] (square brackets.) They can hold multiple data types. They are great for creating lists.
*/

/* 
    SYNTAX

    let arrayVaraibleName = [list1, list2, list3, list4,];
*/

let groceryList = [
    "milk",
    "chicken",
    "garlic",
    "apples",
    "swedish fish",
    "avocados"
];

console.log(groceryList)//OUTPUT: Is the entire groceryList.
console.log(groceryList[4]);//OUTPUT: is Swedish Fish.
//Bracket Notation- used to setp into array and grab a list item.
//Note: Arrays start scounting at an index of 0.

let students =["Neslon", "Clarissa", "Laura", "Cassandra", "Noah", 11, true, ["Michael", "Tonya", "Neisha"],];

console.log(typeof students);//OOUTPUT: object. And thats because arrays aren't objects
console.log(students instanceof Array);//OUTPUT: true.
//Note: instanceof operator is used to check the type of an opject at runtime

//Dive into the nested array and print of "Michael".
//Print out "Hello, Michael! Nice to meet you"

console.log(students[7][0])
let sName=students[7][0]
console.log("Hello, " + sName + "! Nice to meet you."); //OUTPUT: Hello, Michael! Nice to meet you. CONCATENTION.
console.log(`Hello, ${sName}! Nice to meet you.`);//OUTPUT: Hello, Michael! Nice to meet you. STRING INTERPOLATION-uses backticks and dollar sign curly 


//ARRAY METHODS
//Array methods allows us to manipulate the data inside of our array or the array itself.
// .length - simply returns the number of items in our array
// let foods = ["pizza", "shrimp", "sushi", "dino nuggies"];
console.log(foods.length)//OUTPUT: 4

// .toString() - This method takes an array and convers it to a string (including all of the items in it).
// let randomArray=[5, "David", "Tiramisu", true, -1000];
// console.log(randomArray.toString());//Output: turns it into a string
let randomArray=[5, "David", "Tiramisu", true, -1000];
console.log(typeof randomArray.toString());//OUTPUT: Converts an array into a string.

// .shift() -this method removes the first item of an array and return the removed items/
let foods = ["pizza", "shrimp", "sushi", "dino nuggies"];
console.log("Before : ", foods);//OUTPUT: Original Array

let firstItem= foods.shift();
console.log("After : ", foods)//OUTPUT: Array removing pizza
console.log("Shifted Item : ", firstItem);//Pizza in my first item variable

// .unshift() - this method adds an item to the beggining of our array.
console.log("Before : ", foods);// OUTPUT: Array without pizza in my firstItem varaible

foods.unshift("rice and chicken");//Adding "rice and chicken" to our foods array

console.log("After : ", foods);// OUTPUT: "rice and chicken" being added to the beginning of our array.

let num =[1, 2, 3, 4, 5,];
num.unshift(0);
console.log(num);


// .pop() - similiar to the shift method, except it removes the last item in an array and returns the removed item.

let sailorScouts =["Moon", "Mars", "Saturn", "Venus", "Jupiter"]
sailorScouts.pop();
console.log(sailorScouts)//OUTPUT: Is our array without Sailor Jupiter.

// .push() - this method adds an item to the NED of our array and retuns the moved item.
sailorScouts.push("Mercury");
console.log(sailorScouts);

let pokemon =["Pikachu", "Charmander", "Squirtle Squad", "Vaporeon", "Bobosaur"];
console.log(pokemon.reverse());//OUTPUT Bobosaur is first.

// .splice() - This method changes the content of our array. It can remove/replace existing items and/or  adding new items in its place.
//NOTE: It CAN take on 3 parameters.

let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");// I start at the index of 1, remove nothing, then add a strong of "Feb"
console.log(months);

months.splice(4, 1, "May");
console.log(months);//OUTPUT: I started at the index of 4 (June), removed one item, and then added a string of "May."

months.splice(5, 0, "June", "July", "Aug")
console.log(months);//OUTPUT: I start at index of 5, remove nothing, and then add multiple strings of "June:", "July", "Aug".

/*
METHODS THAT WE NEED TO LOOK UP
- .join(),**
- .sort(),***
- .some(),**
- .find(),***
- .map(),****
- .includes(),***
*/