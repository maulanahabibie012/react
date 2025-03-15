import Navbar from "../../Components/Navbar";
import usePokemon from "../../hooks/usePokemon";

const Pokemon = () => {
  const { pokemonList } = usePokemon();
  return (
    <div>
      <Navbar />
      <div className="container bg-yellow">
        <h1 className="text-center text-amber-200">Pokemon</h1>
        {pokemonList.map((item, index) => (
          <div key={index}>
            <h1>{item.genus}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
