import { createContext, useState, useEffect } from "react";
import * as Api from '../service/api';

export const Context = createContext({});

function AuthProvider({ children }) {

    const [api, setApi] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [pok, setPok] = useState([]);

    const getNamePokemon = async (api) => {
        try {
            const res = await Api.getPokemon(api);
            const { results } = res;
            setPok(results);
        } catch (error) {
            console.log(error);
        }
    };

    const handleNextPagination = async () => {
        try {
            const res = await Api.getPokemon(api);
            const { next } = res;
            setApi(next);
            console.log('error');
        } catch (error) {
            console.log(error);
        }
        console.log('error');
    };

    const handlePreviousPagination = async () => {
        try {
            const res = await Api.getPokemon(api);
            const { previous } = res;
            if (previous) {
                setApi(previous);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getNamePokemon(api);
    }, [api]);



    return (
        <Context.Provider
            value={{
                pok,
                setPok,
                handleNextPagination,
                handlePreviousPagination,
                api
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;