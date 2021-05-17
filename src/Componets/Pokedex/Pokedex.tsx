import { PokemonSchema } from "../../types/PokemonSchema"
import Pokelist from "../Pokelist/Pokelist"
import Pokesearch from "../PokeSearchResult/Pokesearch"
import SearchBox from "../SearchBox/SearchBox"
import "./Pokedex.css"

interface Pokedexrops {
    searchedPokemons:  PokemonSchema[  ]
}

const Pokedex = ({searchedPokemons} : Pokedexrops ) => {
    return (
        <div className="pokedex-container">
          <div className="pokelist-container">
              <SearchBox />
              <Pokelist searchedPokemons={searchedPokemons}/>
          </div> 
          <div className="pokedex-search">
              <Pokesearch />
          </div>  
        </div>
    )
}

export default Pokedex
