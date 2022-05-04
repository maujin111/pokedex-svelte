<script context="module">
    export async function load({params}){
        const id = params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokemon = await res.json();
        return {props:{pokemon}};
    }
</script>
<script>
    export let pokemon;
    const weight = pokemon.weight / 10;
    const height = pokemon.height / 10;
</script>

<div class="pokemon">
    
    <h1>{pokemon.name}</h1>
    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
    <p>
        <strong>Type:</strong> {pokemon.types.map(type => type.type.name).join(' - ')} | <strong>height:</strong> {height} M | <strong>weight:</strong> {weight} Kg
    </p>

</div>