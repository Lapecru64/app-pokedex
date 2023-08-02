import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPokemonList } from "../store/slices/pokemon.slice";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";
import Line from '../components/Line';
import Pagination from "../components/Pagination";

const PokedexPage = () => {
  const trainer = useSelector((state) => state.trainer);
  const pokemons = useSelector((state) => state.pokemon.list);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  useEffect(() => {
    fetchPokemons();
  }, [type]); 

  const fetchPokemons = async () => {
    if (type !== "") {
      const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
      const pokemonData = await Promise.all(
        response.data.pokemon.map(async (pokemon) => {
          let pokemonRecord = await axios.get(pokemon.pokemon.url);
          return pokemonRecord.data;
        })
      );
      dispatch(setPokemonList(pokemonData));
    } else if (search !== "") {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
      dispatch(setPokemonList([response.data]));
    }
  };

  const handleSearch = () => {
    fetchPokemons();
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = pokemons.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(pokemons.length / cardsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pokedex-body">
      <Line color="red"  />
      <h2 className="pokedex-title">POKÉDEX</h2>
      <Line color="black" />
      <h2>Welcome, {trainer}! Choose your favorite Pokemon</h2>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <select value={type} onChange={(e) => { setType(e.target.value); setSearch(""); }}>

        <option value="">--Select Type--</option>
        <option value="normal">Normal</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="bug">Bug</option>
        <option value="rock">Rock</option>
        <option value="ground">Ground</option>
        <option value="poison">Poison</option>
        <option value="fighting">Fighting</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="fairy">Fairy</option>
        <option value="dragon">Dragon</option>
        <option value="ghost">Ghost</option>
        <option value="ice">Ice</option>
        <option value="dark">Dark</option>
        <option value="steel">Steel</option>
        <option value="flying">Flying</option>
        </select>
      <button onClick={handleSearch}>Search by Type</button>
      <div className="pokedex-container">
      {currentCards.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      /> 
    </div>
  );
};

export default PokedexPage;

