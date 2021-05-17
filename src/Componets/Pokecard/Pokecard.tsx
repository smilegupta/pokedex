import "./Pokecard.css"

interface PokecardProps {
    spriteUrl?: string | undefined;
    name: string | undefined;
}

const Pokecard = ({ name, spriteUrl }: PokecardProps) => {
    return (
        <div className="pokecard">
            <img className="pokemon-sprite" alt="pokemon" src={spriteUrl} />
            <p>
                {name}
            </p>
        </div>
    )
}

export default Pokecard
