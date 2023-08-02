import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        list: [],
        selectedPokemon: null
    },
    reducers: {
        setPokemonList: (state, action) => {
            state.list = action.payload;
        },
        selectPokemon: (state, action) => {
            state.selectedPokemon = action.payload;
        }
    }
});

export const { setPokemonList, selectPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;

