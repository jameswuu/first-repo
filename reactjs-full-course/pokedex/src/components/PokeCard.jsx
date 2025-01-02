import { useEffect, useState } from "react"
import { getPokedexNumber } from '../utils'

export function PokeCard(props){
    const { selectedPokemon } = props;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // if loading, exit logic
        if (loading || !localStorage) { return }

        // check if the selected pokemon info is available in the cache
        // 1. define the cache
        let cache = {}
        if(localStorage.getItem('pokedex')) {
            cache = JSON.parse(localStorage.getItem('pokedex'));
        }

        // 2. check if the selected pokemon is in the cache, otherwise fetch api
        if (selectedPokemon in cache) {
            // read from cache
            setData(cache[selectedPokemon])
            return 
        }

        // pokemon is not available in the cache and now need to fetch the data from api
        async function fetchPokemonDate() {
            setLoading(true)
            try {
                const baseUrl = 'https://pokeapi.co/api/v2/'
                const suffix = 'pokemon/' + getPokedexNumber(selectedPokemon)
                const finalUrl = baseUrl + suffix
                const res = await fetch(finalUrl)
                const pokemonData = await res.json()
                setData(pokemonData)
                console.log(pokemonData) // Debugging Line
                
                cache[selectedPokemon] = pokemonData
                localStorage.setItem('pokedex', JSON.stringify(cache))
            } catch (err) {
                console.log(err.messge)
                console.log('Error')
            } finally {
                setLoading(false)
            }
        }

        fetchPokemonDate()

        // 3. if we fetch from api, make sure to save the info to the cache for next time 
    }, [selectedPokemon])

    return(
        <div></div>
    )
}