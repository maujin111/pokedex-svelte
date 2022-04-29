<script>
    import {pokemons} from '../stores/pokestore';

</script>

<svelte:head>
    <title>POKEDEX</title>
</svelte:head>

<h1>POKEDEX</h1>

    {#each $pokemons as pokemon}
        <p>{pokemon.name}</p>
    {/each}