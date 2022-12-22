import axios from "axios";

export async function getPokemon(api) {
    console.log(api)
    const service = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    });

    const res = await service
        .get(api)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error)
        });
    return res
};
