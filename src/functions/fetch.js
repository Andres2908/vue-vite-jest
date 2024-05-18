const fetch = async(pokemon) => {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = response.json()
        return data
    }catch (error) {
        throw new Error("Error fetching data")
    }
    
}

module.exports = { fetch };
