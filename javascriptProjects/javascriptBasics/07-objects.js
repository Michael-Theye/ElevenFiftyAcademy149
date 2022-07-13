//OBJECTS
//Objects use multiple data type that consist of key/value pairs.
//Objects are denoted by their curly bois {}

/* 
    SYNTAX

    let objectVaraibleName = {
        key (property): value,
        key: value,
        key: value
    }
*/

let name = {
    firstName: "Taylor",
    lastName: "Dickens",
    firstNameLettters: 6
}

console.log(name); //OUTPUT: the object in its entirety

let netflix = {
    name: "Avatar the Last Airbender",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 10,
            episodesInfo:[
                {episode: 1, episodeName: "The boy in the IceBerg"},
                {episode: 2, episodeName: "The Avatar Returns"}
            ],
        },
    },
};

console.log("All data : ", netflix);//Output: netflix object. All the data from above.
console.log("Name of Netflix Series : ", netflix.name);//OUTPUT :Avatar the Last Airbender
// DOT NOTATION: - allows us to step into our object and grab data.
console.log("Season 1 of Avatar the Last Airbender", netflix.seasonInfo.season1);//OUTPUT: all the season 1 information. We can follow the relative path to get the information that we want in our object
console.log("Second Episode Name : ", 
netflix.seasonInfo.season1.episodesInfo[1].episodeName
);//OUTPUT: The Avatar Returns

// ASSIGN NEW KEYS TO OBJECTS USING DOT NOTATION
// SYNTAX: objectVariableName.keyName.KeyNameOfNewKey = value;
netflix.seasonInfo.totalSeason = 3;
console.log(netflix.seasonInfo)//OUTPUT is newly added key
//                              0        1       2       3       4
let bobsBurgerCharacters = ["Linda", "Louise", "Bob", "Tina", "Gene"];
// let bobsBurgerCharacters = {
//     0 :"Linda",
//     1 :"Louise",
//     2 :"Bob",
//     3 :"Tine",
//     4 :"Gene"
// }

// JSON - Javascript Object Notation
/*
    JSON is used to send information from servers and clients and vice versa. JSON looks and acts like an object, but they are different. We can use dot notation and bracket notation to acces the information within these "objects".
    
    NOTe: This is something for later. We will get to this once we get to API'S
*/

let howlsMovingCastle = {
    wizards: {
        wizard1: "Howl",
        wizard2: "Markle",
        wizard3: "The Witch of the Waste",
    },
    humans: {
        human1: "Sophie",
        human2: "Lettie",
        human3: "Honey",

    },
};

//Object.keys() method - this method returns an array of an Object's keys (property) names. 
console.log(Object.keys(howlsMovingCastle.wizards));//OUTPUT: wizard1, wizard2, wizard3
console.log(Object.keys(howlsMovingCastle.wizards.wizard3));//OUTPUTL the indices in the string of wizard 3 because it is looking at a string as an array. AND ARRAY ARE OBJECTS.

//Object.values() method - this method that retunds an array of a given object's values.
console.log(Object.values(howlsMovingCastle.humans))// OUTPUT: "Sophie", "Lettier, "Honey"
console.log(Object.values(howlsMovingCastle.humans.human1))//OUTPUT: 'S', 'o', 'p', 'h', 'i', 'e'