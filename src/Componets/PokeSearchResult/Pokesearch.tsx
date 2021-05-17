import { PokemonSchema } from "../../types/PokemonSchema";
import "./Pokesearch.css"

interface PokesearchProps {
    selectedPokemon: PokemonSchema | undefined
}
const Pokesearch = ({ selectedPokemon }: PokesearchProps) => {
    const { name, height, weight, base_experience, sprites } =
        selectedPokemon || {};
    return (
        <div className="poke-result-card">
            {
                selectedPokemon ? (<div>
                    <img
                        className="pokemon-animated-sprite"
                        alt="pokemon"
                        src={sprites?.animated || sprites?.normal}
                    />
                    <p className="text-capitalise">Name: {name}</p>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                    <p>Base Exp: {base_experience}</p>

                </div>) : (<h2>

                    Welcome to the Pokedex
                </h2>)
            }
        </div>
    )
}

export default Pokesearch
