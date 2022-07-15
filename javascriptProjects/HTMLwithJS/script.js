let count = 0;

const doSomething = () => {
    const userAge= document.getElementById("age").value //YYYY-MM=DD
    const tDate = new Date();
    const date = tDate.getFullYear() + '-' + '0' + (tDate.getMonth() + 1) + '-' +tDate.getDate();


    const nameInput = document.getElementById("name")
    const savingsInput = document.getElementById("savings")

    const name = nameInput.value
    const savings = savingsInput.value
    // indexing into strings with []
    
    const age= Number (date[0,3]) -Number(userDate[0,3])

    makeNewElement(name, age, savingss)
    nameInput.value=""
    savingsInput.value=""
}
/* 
- Use your google skills to research different types of input tags, and find a way to incorporate the "value" into our current "doSomething()" function
*/

// const hiddenInput = document.getElementById("name")
// const name =hiddenInput.value
// count++
// alert(`The name is hidden which is why its a Sneky Boi`)
// hiddenInput.value=""
//     }

const makeNewElement = (name, age, savings) => {
    const container = documentq.getElementById("container")

    const contentWrapper = document.createElement("div")
    const nameHeader= document.createElement("h3")
    const ageText = document.createElement("p")
    const savingsText= document.createElement("p")
    nameHeader.textContent = name
    ageText.textContent= age
    savingsText.textContent= `$ ${savings}.00`

    ageText.style.backgroundColor= "red"
    ageText.style.color= "white"
    savingsText.style.color="green"
    contentWrapper.appendChild(nameHeader)
    ontentWrapper.appendChild(ageText)
    ontentWrapper.appendChild(savingsText)

    container.appendChild(contentWrapper)
}