import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";

export const metadata = {
    title: "Favorites",
    description: "Detail Pokemons"
}


export default async function PokemonsFavoritesPage() {

    return (

        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemons Favorites <small className="text-blue-500">Global State</small> </span>
           <FavoritePokemons />
        </div>
    )
}
