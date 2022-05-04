<script>
    export let pokemons;
</script>

<a class="pokemonsCard" href={`/pokemons/${pokemons.id}`}>
    <img class="pokemonsCardImage" src={pokemons.image} alt={pokemons.name}>
    <h2>#{pokemons.id} - {pokemons.name}</h2>
</a>