import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectPokemon } from "../store/slices/pokemon.slice";

export const typeColorMapping = {
  normal: "pokemon-type--normal",
  fire: "pokemon-type--fire",
  water: "pokemon-type--water",
  electric: "pokemon-type--electric",
  grass: "pokemon-type--grass",
  ice: "pokemon-type--ice",
  fighting: "pokemon-type--fighting",
  poison: "pokemon-type--poison",
  ground: "pokemon-type--ground",
  flying: "pokemon-type--flying",
  psychic: "pokemon-type--psychic",
  bug: "pokemon-type--bug",
  rock: "pokemon-type--rock",
  ghost: "pokemon-type--ghost",
  dragon: "pokemon-type--dragon",
  dark: "pokemon-type--dark",
  steel: "pokemon-type--steel",
  fairy: "pokemon-type--fairy",
};

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    const pokemonType = pokemon.types[0].type.name;
    dispatch(selectPokemon(pokemon));
    navigate(`/pokedex/${pokemon.id}/${pokemonType}`);
  };

  const pokemonType = pokemon.types[0].type.name;
  const typeClass = typeColorMapping[pokemonType];

  return (
    <div onClick={handleClick} className={`pokemon-card ${typeClass}`}>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Type: {pokemonType}</p>
    </div>
  );
};

export default PokemonCard;


