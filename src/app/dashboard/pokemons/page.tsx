
import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { PokemonsResponse } from "@/pokemons/interfaces/pokemons-response";
import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";


export const metadata = {
    title: "151 Pokemons",
    description: "Detail Pokemons"
}

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());
    const pokemons: SimplePokemon[] = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }));
    //throw new Error('This is error');
    return pokemons;
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(150);

    return (

        <div className="flex flex-col">
            <span className="text-5xl my-2">List of Pokemons <small className="text-blue-500">static</small> </span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    )
}
