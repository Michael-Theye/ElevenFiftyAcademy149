
const baseURL = "https://pokeapi.co/api/v2/pokemon/"
const containerDiv = document.getElementById(`container`)

const searchDiv = document.getElementById(`searchContainer`)


const getPokeResults = (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("search").value;
    console.log(`Search Input ${searchInput}`);
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                const errorMessage = document.createElement("h2")

                errorMessage.textContent = data.error
                errorMessage.style.color = "blue"

                searchDiv.appendChild(errorMessage)
            } else {

                searchDiv.innerHTML = ""


                displayData(data);
            }

        })

    searchInput.value = ""
}

function displayData(pokemon) {
    console.log(pokemon.species.name)
    const PokeDiv = document.createElement('div')
    const pokeName = document.createElement('h3')
    pokeName.textContent = pokemon.species.name;
    PokeDiv.appendChild(pokeName)

    const PokeSprites = document.createElement('img')
    PokeSprites.src = pokemon.sprites.front_default;
    PokeDiv.appendChild(PokeSprites)

    // const PokeMoves = document.createElement('p')
    // PokeMoves.textContent = pokemon.
    // PokeDiv.appendChild(PokeMoves)

    const PokeStatsHp = document.createElement('h4')
    PokeStatsHp.textContent = pokemon.stats[0].base_stat
    PokeDiv.appendChild(PokeStatsHp)
    PokeStatsHp.style = "color: green"

    const PokeStatsAtk = document.createElement('h4')
    PokeStatsAtk.textContent = pokemon.stats[1].base_stat
    PokeDiv.appendChild(PokeStatsAtk)
    PokeStatsAtk.style = "color: red"

    const PokeStatsDef = document.createElement('h4')
    PokeStatsDef.textContent = pokemon.stats[2].base_stat
    PokeDiv.appendChild(PokeStatsDef)
    PokeStatsDef.style = "color: orange"

    const PokeStatsSpAtk = document.createElement('h4')
    PokeStatsSpAtk.textContent = pokemon.stats[3].base_stat
    PokeDiv.appendChild(PokeStatsSpAtk)
    PokeStatsSpAtk.style = "color: purple"

    const PokeStatsSpDef = document.createElement('h4')
    PokeStatsSpDef.textContent = pokemon.stats[4].base_stat
    PokeDiv.appendChild(PokeStatsSpDef)
    PokeStatsSpDef.style = "color: yellow"

    const PokeStatsSPD = document.createElement('h4')
    PokeStatsSPD.textContent = pokemon.stats[5].base_stat
    PokeDiv.appendChild(PokeStatsSPD)
    PokeStatsSPD.style = "color: blue"

    const PokeTypes = document.createElement('p')
    // PokeTypes.textContent = pokemon.type[0].type.name

    switch (pokemon.types.length) {
        case 2:
            PokeTypes.textContent = pokemon.types[0].type.name + "/" + pokemon.types[1].type.name
            break;
        case 1:
            PokeTypes.textContent = pokemon.types[0].type.name
            break;
        default:
            break;


    }
    PokeDiv.appendChild(PokeTypes)

    const PokeAbilities = document.createElement('p')

    switch (pokemon.abilities.length) {
        // case 4:
        //     PokeAbilities.textContent = pokemon.abilities[3].ability.name + "/" + pokemon.abilities[2].ability.name + "/" + pokemon.abilities[1].ability.name + "/" + pokemon.abilities[0].ability
        //     break;
        case 3:
            PokeAbilities.textContent = pokemon.abilities[2].ability.name + "/" + pokemon.abilities[1].ability.name + "/" + pokemon.abilities[0].ability
            break;
        case 2:
            PokeAbilities.textContent = pokemon.abilities[1].ability.name + "/" + pokemon.abilities[0].ability.name
            break;
        case 1:
            PokeAbilities.textContent = pokemon.abilities[0].ability.name
            break;
        default:
            break;
    }


    PokeAbilities.style = "font-weight: bold;"
    PokeDiv.appendChild(PokeAbilities)

    containerDiv.appendChild(PokeDiv)
}

