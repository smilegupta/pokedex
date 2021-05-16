import "./Pokesearch.css"

const Pokesearch = () => {
    const selectedPokemon = false;
    return (
        <div className="poke-result-card">
            {
                selectedPokemon ? (<div> {/* Add the Image Here */}
                <p>Name: Pikachu</p>
                <p>Id: Some id</p>
                <p>Height: Some Height</p>
                <p>Weight: Some Weight</p>
                <p>Base Exp: 100xp</p>
                
                 </div>) : (<h2>

                     Welcome to the Pokedex
                 </h2>)
            }
        </div>
    )
}

export default Pokesearch
