import { PokemonSchema } from "../../types/PokemonSchema"
import Pokecard from "../Pokecard/Pokecard"
import "./Pokelist.css"

interface PokelistProps {
    searchedPokemons: PokemonSchema[]
    onPokemonClick: (pokemonName: string) => void
}

const Pokelist = ({ searchedPokemons, onPokemonClick }: PokelistProps) => {
    return (
        <div className="pokelist">
            {
                searchedPokemons.map(({ name, sprites }, idx) => {
                    return (
                       name && (
                        <Pokecard key={idx}
                        onPokemonClick={onPokemonClick}
                        name={name}
                        spriteUrl={sprites === undefined ? undefined : sprites.normal} />
                       )
                    )
                })
            }

        </div>
    )
}

export default Pokelist
