//API (Application Program Interface) endpoint url to GET information back from API
// info will comeback (after the promise has been fulfilled) as a JSON string before its converted into a JS object
const baseURL = "https://rickandmortyapi.com/api/character"
const containerDiv = document.getElementById('container')

const searchDiv = document.getElementById('searchContainer')


// method used by JS to "fetch" information to or from an API and it returns a promise meaning it will "promise" to return data once "fetching" process has finished
fetch(baseURL)
    // first need to transform "fulfilled" promise into JSON 
    .then(res => res.json())
    //".json()" also returns a promise that we "fulfill" using the second ".then()"
    .then(data => {
        console.log(data.results)

        data.results.forEach(chararcter => {
            makeCharDiv(chararcter.image, chararcter.name, chararcter.origin.name, chararcter.status, containerDiv)
        });
    })


const getCharResults = () => {
    const searchInput = document.getElementById("search")
    fetch(`https://rickandmortyapi.com/api/character/?name=${searchInput.value}`)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                const errorMessage = document.createElement("h4")

                errorMessage.textContent = data.error
                errorMessage.style.color = "red"

                searchDiv.appendChild(errorMessage)
            } else {
                data.results.forEach(char => {
                    makeCharDiv(char.image, char.name, char.origin.name, char.status, searchDiv)
                })
            }
            // console.log(data)
        })
    //".catch()" is used to "catch and 400/500 errors that may have occured duyring the fetch request"
    // .catch(error => { 
    //     console.log(error)
    // })

    searchInput.value = ""
}
const makeCharDiv = (image, name, originName, status, divForInfo) => {
    const charDiv = document.createElement('div')

    const charPic = document.createElement('img')
    const charName = document.createElement('h3')
    const charOrigin = document.createElement("p")
    const charStatus = document.createElement('p')

    charPic.src = image
    charName.textContent = name
    charOrigin.textContent = originName
    charStatus.textContent = status === "Alive" ? `${name} is thriving! B-)` : "This mf is dead or lost"

    // putting character information inside of individual "charDiv"
    charDiv.appendChild(charPic)
    charDiv.appendChild(charName)
    charDiv.appendChild(charStatus)
    // putting "charDiv" inside HTML container div
    divForInfo.appendChild(charDiv)
}
