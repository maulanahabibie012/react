import { useState } from "react";
import axios from "axios";

const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemon = async () => {
     try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon-species/bulbasaur");
      console.log("data berhasil", response);
      setPokemonList(response.data.genera);
    } catch (error) {
      console.log(error);
    }
  }

  useState(() => {
    getPokemon();
  }, []);

  return {
    pokemonList,
    getPokemon,
   
  };
};
export default usePokemon;
