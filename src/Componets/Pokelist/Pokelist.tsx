import { PokemonSchema } from "../../types/PokemonSchema"
import Pokecard from "../Pokecard/Pokecard"
import "./Pokelist.css"

interface PokelistProps {
    searchedPokemons: PokemonSchema[]
}

const Pokelist = ({ searchedPokemons }: PokelistProps) => {
    return (
        <div className="pokelist">
            {
                searchedPokemons.map(({ id, name, sprites }) => {
                    return (
                        <Pokecard key={id}
                            name={name}
                            spriteUrl={sprites === undefined ? null : sprites.normal} />
                    )
                })
            }

        </div>
    )
}

export default Pokelist
