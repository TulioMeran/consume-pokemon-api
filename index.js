const getPokemonByName = async (name) => {
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const result = await data.json()
        return result
    } catch(ex){
        return ex
    }
}

const getAllPokemon = async (offset = 20, limit = 20) => {
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        const result = await data.json()
        return result
    } catch(ex){
        return ex
    }

}

module.exports = {
    getPokemonByName,
    getAllPokemon
}