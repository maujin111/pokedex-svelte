import { writable } from "svelte/store";

export const pokemons = writable([]); // initial value as an array

// fetchPokemon function
const fetchPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((data, index) => {
        return {
            id: index + 1,
            name: data.name,
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (index + 1) + '.png',
        }
    });
    pokemons.set(loadedPokemon);
}

fetchPokemon();