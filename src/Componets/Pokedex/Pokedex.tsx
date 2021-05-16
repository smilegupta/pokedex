import Pokelist from "../Pokelist/Pokelist"
import Pokesearch from "../PokeSearchResult/Pokesearch"
import SearchBox from "../SearchBox/SearchBox"
import "./Pokedex.css"

const Pokedex = () => {
    return (
        <div className="pokedex-container">
          <div className="pokelist-container">
              <SearchBox />
              <Pokelist />
          </div> 
          <div className="pokedex-search">
              <Pokesearch />
          </div>  
        </div>
    )
}

export default Pokedex
