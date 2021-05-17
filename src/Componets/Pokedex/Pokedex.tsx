import { PokemonSchema } from "../../types/PokemonSchema"
import Pokelist from "../Pokelist/Pokelist"
import Pokesearch from "../PokeSearchResult/Pokesearch"
import SearchBox from "../SearchBox/SearchBox"
import "./Pokedex.css"

interface Pokedexrops {
    searchedPokemons:  PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    onInputChange: (inputValue: string) => void;
    onPokemonClick: (pokemonName: string) => void

}

const Pokedex = ({searchedPokemons, onInputChange, selectedPokemon, onPokemonClick} : Pokedexrops ) => {
    return (
        <div className="pokedex-container">
          <div className="pokelist-container">
              <SearchBox  onInputChange = {onInputChange} />
              <Pokelist searchedPokemons={searchedPokemons} onPokemonClick={onPokemonClick}/>
          </div> 
          <div className="pokedex-search">
              <Pokesearch selectedPokemon={selectedPokemon}  />
          </div>  
        </div>
    )
}

export default Pokedex
