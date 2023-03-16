import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'

export default function Pokemon() {
    const [pokemonData, setPokemonData] = useState({})
    const [loadingState, setLoadingState] = useState("LOADING")
    const [pokemonId, setPokemonId] = useState(1)
    const [currSearch, setCurrSearch] = useState(null)
    const { getPokemonData } = useContext(DataContext)

    useEffect(() => {
        // async function getPokemonData() {
        //     const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        //     const data = await response.json()
        //     setPokemonData(data)
        //     setLoadingState("LOADED")
        // }
        // getPokemonData()
        async function handleLoad() {
            const data = await getPokemonData(pokemonId)
            setPokemonData(data)
            setLoadingState("LOADED")
    
        }
        handleLoad()

    }, [pokemonId])

   
    function incrementPokemonId(incrementor) {
        setPokemonId(Number(pokemonId) + incrementor)
        setCurrSearch(pokemonId + incrementor)
        
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        setPokemonId(currSearch)
    }

    return (
        <div>
            <h1>Pokemon</h1>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="number" 
                    name="id" 
                    id="id" 
                    min={1} 
                    max={1010}
                    value={currSearch}
                    onChange={(event) => setCurrSearch(parseInt(event.target.value))}
                />
                <button>Search</button>
            </form>
            {
                (loadingState === "LOADING") ?
                <p>Loading...</p> :
                <div className='pokemon'>
                    <img src={pokemonData.sprites.front_default} alt="" />
                    <h2>{pokemonData.name}</h2>
                    {
                        (pokemonId > 1) ?
                        <button onClick={() => incrementPokemonId(-1)}>Previous</button> :
                        <></>
                    }
                    <button onClick={() => incrementPokemonId(1)}>Next</button>

                </div>
            }
            
        </div>
    )

}