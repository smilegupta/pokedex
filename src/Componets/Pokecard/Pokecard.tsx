import "./Pokecard.css"

interface PokecardProps {
    spriteUrl?: string;
    name: string;
    onPokemonClick: (pokemonName: string) => void
}

const Pokecard = ({ name, spriteUrl, onPokemonClick }: PokecardProps) => {
    return (
        <div className="pokecard" onClick = {() => onPokemonClick(name)}>
            <img className="pokemon-sprite" alt="pokemon" src={spriteUrl} />
            <p>
                {name}
            </p>
        </div>
    )
}

export default Pokecard
