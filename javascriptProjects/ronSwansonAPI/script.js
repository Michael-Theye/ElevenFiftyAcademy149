/*
- "synchronous" programming is lead line by  line
- "asynchronous" programming allows a program to do more than one thing at a time

    API:
    -stands for "Application Programming Interface"
    (the interface you interact with for an application ((!!! not the actual database or server!!!)))(allows for communication with these things (through endpoints))
    

    REST = Representational State Transfer
    - process of creating an object of requested data, and sending values as a response to the user making the request

    CRUD = Creat, Read, Update, Delete
    -( Create (POST REQUEST))
    - Read (Get requests)
    - Update (Put requests)
    -Delete (Delete Request)
    Async/Await
    -allows us to program in a "sychronous" manner using async code deal;iong with APIs
    -makes our sites responsive and user friendly as possible
*/

const quoteContainer = document.querySelector(".quoteContainer")
const logo = document.getElementById("ronLogo")

/* 
-"async" keyword can be used on a normal function to make it "asynchronous"
-this allows for other code to continue running by specifying htat the "async" function is expecting to have to wait to finish executing 
-"async" keyoword gives us access to the "await" keyword
try/catch blocks needed to wrap around code trhat has to be waited on to account for error handling
*/
const fetchQuote = async () => {
    try {
        const res = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
        const data = await res.json()
    
            displayQuote(data[0])
    } catch (err) {
        console.log(`Error: ${err}`)
    }
        
        // .catch(err => {
        //     console.log(`Error: ${err}`)
        // })
}

function displayQuote(data) {
    console.log(data)
    // logic for removing the original logo button from page 
    const logoContainer =document.getElementById("genQuote")
    // *"<element>.firstElementChild" used to check if there is a child element inside of a element being specified
    logoContainer.firstElementChild !=null 
    // If True
    ? logoContainer.removeChild(logo)
    //If False 
    : null

    // adding logic for the new quote on the page

    const author = document.createElement('p')
    author.innerText = "- Ron Swanson"
    author.style = "font-size: 3rem; font-family: billionDreams; color: #3a2718;"

    const quote = document.createElement('h1')
    quote.innerText = data
    quote.style = "font-family: pinewood; color: #3a2718;"

    //checking length of quote to determine font size
    if(data.length >= 50&& data.length <= 150) {
        quote.style.fontSize = "5rem"
    } else if (data.length <50) {
        quote.style.fontSize= "7rem"
    }else {
        quote.style.fontSize= "3.rem"
    }

    const image = document.createElement("img")
    image.src = "./assets/ron.png"
    image.alt = 'Ron Swanson'
    image.style = "height: 100px; width: auto;"

    quoteContainer.appendChild(quote)
    quoteContainer.appendChild(author)
    quoteContainer.appendChild(image)

    image.addEventListener("click", () => {
        quoteContainer.removeChild(quote)
        quoteContainer.removeChild(author)
        quoteContainer.removeChild(image)

        fetchQuote()
    })
}

logo.addEventListener("click", fetchQuote)