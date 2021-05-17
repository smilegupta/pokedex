import { PokemonSchema } from "../../types/PokemonSchema"
import Pokelist from "../Pokelist/Pokelist"
import Pokesearch from "../PokeSearchResult/Pokesearch"
import SearchBox from "../SearchBox/SearchBox"
import "./Pokedex.css"

interface Pokedexrops {
    searchedPokemons:  PokemonSchema[]
    onInputChange: (inputValue: string) => void;
}

const Pokedex = ({searchedPokemons, onInputChange} : Pokedexrops ) => {
    return (
        <div className="pokedex-container">
          <div className="pokelist-container">
              <SearchBox  onInputChange = {onInputChange} />
              <Pokelist searchedPokemons={searchedPokemons}/>
          </div> 
          <div className="pokedex-search">
              <Pokesearch />
          </div>  
        </div>
    )
}

export default Pokedex
