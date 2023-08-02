import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPokemon } from '../store/slices/pokemon.slice';
import axios from 'axios';
import MoveModal from '../components/MoveModal';

const PokeIdPage = () => {
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const { id, type } = useParams();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      dispatch(selectPokemon(response.data));
    };
    fetchPokemon();
  }, [dispatch, id]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`card-id pokemon-type--${type}`}>
      {selectedPokemon && (
        <>
          <div>
            <h2>{selectedPokemon.name}</h2>
            <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
            <p>Pokedex Number: {selectedPokemon.id}</p>
            <p>Height: {selectedPokemon.height}</p>
            <p>Weight: {selectedPokemon.weight}</p>
            <p>Types: {selectedPokemon.types.map((t) => t.type.name).join(', ')}</p>
            <p>Abilities: {selectedPokemon.abilities.map((a) => a.ability.name).join(', ')}</p>
            <h3>Base Statistics:</h3>
            <ul>
              {selectedPokemon.stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
            <button onClick={handleOpenModal}>See moves by level</button>
          </div>

          {showModal && <MoveModal moves={selectedPokemon.moves} onClose={handleCloseModal} />}
        </>
      )}
    </div>
  );
};

export default PokeIdPage;
