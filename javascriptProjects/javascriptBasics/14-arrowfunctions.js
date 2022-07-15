// * ARROW FUNCTIONS are not hoisted
//! -"concise" body (no curly braces... whatever is after the "fat arrow" is automatically returned/executed)
//! - "block" body (include curly braces and explicirty need "return" keyword to return and data)

//! CONCISE BODY
// - automatically execute example:
let speak = (noise) => console.log(`${noise}! ${noise}!`)
speak("Bark")

// - automatically return data after the "Fat Arrow"
let showFullName= (first, last) => `${first} ${last}`
 console.log(`dude giving the lecture is named ${showFullName("Tj", "Hindman")}`)

 // ! BLOCK BODY
 // - include extra functionality before specifying a "return" value
 let speakAgain = (noise) => {
    let time = "later"
    
    console.log(`${noise} ${time}! ${noise} ${time}!`  )
 }

 speakAgain("Meow")


 let showDisName = (first, last) => {
   return `${first} ${last}`
 }

 showDisName("Mallory", "Fronterhouse")

 console.log(`This dude is named ${showDisName("Mallory", "Fronterhouse")} `)