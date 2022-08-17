
const baseURL = "https://pokeapi.co/api/v2/pokemon/"
const containerDiv = document.getElementById(`container`)
const searchDiv = document.getElementById(`searchContainer`)
let PokeDiv= null;

const getPokeResults = (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("search").value;
    console.log(`Search Input: ${searchInput}`);

    searchContainer.textContent = ""

    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
    .then(res => res.json())
    .then(data => {
        displayData(data);
    })
    .catch((err) => {
        console.log("Pokemon Doesnt Exist", err);
        searchContainer.textContent = "Pokemon Doesn't Exist"
    }) 
}


function displayData(pokemon) {
    console.log(pokemon)
    if(containerDiv.firstElementChild != null) {
        containerDiv.removeChild(PokeDiv)
    }else {null}

    PokeDiv = document.createElement('div')
    const pokeName = document.createElement('h3')
    pokeName.textContent = pokemon.species.name;
    PokeDiv.appendChild(pokeName)
    // screen.orientation.lock({PokeDiv})

    const PokeSprites = document.createElement('img')
    PokeSprites.src = pokemon.sprites.front_default;
    PokeDiv.appendChild(PokeSprites)

    const PokeSpritesS = document.createElement('img')
    PokeSpritesS.src = pokemon.sprites.front_shiny;
    PokeDiv.appendChild(PokeSpritesS)

    // const PokeMoves = document.createElement('p')
    // PokeMoves.textContent = pokemon.
    // PokeDiv.appendChild(PokeMoves)

    const PokeStatsHp = document.createElement('h4')
    PokeStatsHp.textContent = `HP:  ${pokemon.stats[0].base_stat}`
    PokeDiv.appendChild(PokeStatsHp)
    PokeStatsHp.style = "color: black"
    

    const PokeStatsAtk = document.createElement('h4')
    PokeStatsAtk.textContent = `Atk: ${pokemon.stats[1].base_stat}`
    PokeDiv.appendChild(PokeStatsAtk)
    PokeStatsAtk.style = "color: black"


    const PokeStatsDef = document.createElement('h4')
    PokeStatsDef.textContent = `Def: ${pokemon.stats[2].base_stat}`
    PokeDiv.appendChild(PokeStatsDef)
    PokeStatsDef.style = "color: black"


    const PokeStatsSpAtk = document.createElement('h4')
    PokeStatsSpAtk.textContent = `SpAtk: ${pokemon.stats[3].base_stat}`
    PokeDiv.appendChild(PokeStatsSpAtk)
    PokeStatsSpAtk.style = "color: black"


    const PokeStatsSpDef = document.createElement('h4')
    PokeStatsSpDef.textContent = `SpDef: ${pokemon.stats[4].base_stat}`
    PokeDiv.appendChild(PokeStatsSpDef)
    PokeStatsSpDef.style = "color: black"


    const PokeStatsSPD = document.createElement('h4')
    PokeStatsSPD.textContent = `Spd: ${pokemon.stats[5].base_stat}`
    PokeDiv.appendChild(PokeStatsSPD)
    PokeStatsSPD.style = "color: black"



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
        case 4:
            PokeAbilities.textContent = pokemon.abilities[3].ability.name + "/" + pokemon.abilities[2].ability.name + "/" + pokemon.abilities[1].ability.name + "/" + pokemon.abilities[0].ability.name
            break;
        case 3:
            PokeAbilities.textContent = pokemon.abilities[2].ability.name + "/" + pokemon.abilities[1].ability.name + "/" + pokemon.abilities[0].ability.name
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