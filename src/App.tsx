import React from "react"
import Pokedex from './Componets/Pokedex/Pokedex';
import {
  PokemonSchema,
  PokemonSpritesSchema,
  UnpatchedPokemonSchema,
} from "./types/PokemonSchema";
import { pokemonData } from "./Data/pokeData";


export interface AppState {
  searchField: string;
  allPokemons: PokemonSchema[];
  searchedPokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
}

class App extends React.Component<any, AppState> {
  state = {
    searchField: "",
    allPokemons: [],
    searchedPokemons: [],
    selectedPokemon: undefined,
  };

  patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
    const patchedPokemons = pokemons.map((pokemon) => {
      let parsedSprites: PokemonSpritesSchema = {
        normal: undefined,
        animated: undefined,
      };

      try {
        parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
      } catch (e) {
        console.log("Exception while parsing sprites: ", e);
      }

      const patchedPokemon: PokemonSchema = {
        ...pokemon,
        sprites: parsedSprites,
      };

      return patchedPokemon;
    });

    return patchedPokemons;
  };

  componentDidMount() {
    // patch the stringified pokemons
    const patchedPokemons: PokemonSchema[] = this.patchPokemonData(
      pokemonData
    );

    // Update the state with patched pokemons
    this.setState({
      allPokemons: patchedPokemons,
      searchedPokemons: patchedPokemons,
    });
  }

  handleInputChange = (inputValue: string) => {
    const { allPokemons } = this.state;
    const searchedPokemons = allPokemons.filter(
      (pokemon: PokemonSchema) => {
        return (
          pokemon.name && pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
        )
      }
    )
    this.setState({
      searchField: inputValue,
      searchedPokemons,
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex searchedPokemons={this.state.searchedPokemons}
        onInputChange = {this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;