import React from "react";
import PokemonList from "../components/PokemonList";
import Button from "../components/Button";
import Pokemon from "../components/Pokemon";

const Pokedex = ()=>{
    return(
        <>
        <h1>Pokedex</h1><hr/>
        <PokemonList/>
        <Pokemon/>
        <Button/>
        </>
    )
};

export default Pokedex;