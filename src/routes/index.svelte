<script>
    import {pokemons} from '../stores/pokestore';
    import PokemonsCard from '../components/pokemonsCard.svelte';

    let searchTerm = '';
    let filteredPokemon = [];
    
    $: {
        if(searchTerm){
            filteredPokemon = $pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
        } else {
            filteredPokemon = $pokemons;
        }
    }

</script>

<svelte:head>
    <title>POKEDEX</title>
</svelte:head>

<h1>POKEDEX</h1>

    <input class="searchPokemon" type="text" placeholder="Buscar Pokemon" bind:value={searchTerm}>
    
    <div class="pokemonsCardParent">
        {#each filteredPokemon as pokemon}
        <PokemonsCard pokemons={pokemon}/>
        {/each}
    </div>