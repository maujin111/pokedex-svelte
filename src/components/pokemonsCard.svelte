<script>
    import {fade} from 'svelte/transition';
    export let pokemons;
</script>

<a class="pokemonsCard" href={`/pokemons/${pokemons.id}`} transition:fade>
    <img class="pokemonsCardImage" src={pokemons.image} alt={pokemons.name}>
    <h2>#{pokemons.id} - {pokemons.name}</h2>
</a>