import background from "../assets/hero.png"
import { useState, useEffect } from "react";

function FindUrl(pokemon){
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(function(response){
                return(response.json());
            })
            .then(function(response){
                return response.sprites.back_default;
            });
}


function Button({text,pokemon,handleClick,manageScore,item}){
    const [pokeUrl, setPokeUrl]= useState("");

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(function(response){
                return(response.json());
            })
            .then(function(response){
                setPokeUrl(response.sprites.back_default);
            });
    }, [pokemon]);

    const BtnStyle= {
        height: "250px",
        backgroundColor: "hotpink",
        display: "inline",
        width: "inherit",
        backgroundImage: `URL(${pokeUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
    };

    return(
        <button style={BtnStyle} onClick={(e)=> {manageScore(e); handleClick()}}  value={item}>{}</button>
    );
}



const BtnContainer= {
    display : "grid",
    gridTemplateRows:"repeat(2,1fr)",
    gridTemplateColumns:"repeat(6, 1fr)",
    marginTop: "50px",
};

export {Button, BtnContainer};