import Pokecard from "../Pokecard/Pokecard"
import "./Pokelist.css"

const Pokelist = () => {
    return (
        <div className="pokelist">
        <Pokecard name="pikachu"/>
        <Pokecard name="bulbasaur" />
        <Pokecard name="pikachu"/>
        <Pokecard name="bulbasaur" />
        <Pokecard name="bulbasaur" />
        </div>
    )
}

export default Pokelist
