import { useState } from "react";
import { Button, BtnContainer } from "../styles/GridStyle";
import backGround from "../assets/hero.png";

function Grids(){
    const [clicks, setClicks]= useState([0,0,0,0,0,0,0,0,0,0,0,0]);
    const [currScore, setCurrScore]= useState(0);
    const [bestScore, setBestScore]= useState(0);
    const [items, setItems]= useState([0,1,2,3,4,5,6,7,8,9,10,11]);

    const [pokeArray, setPokeArray]= useState(['ditto', 'charizard', 'pikachu', 'greninja', 'bulbasaur', 'squirtle',
        'snorlax', 'jigglypuff', 'meowth', 'psyduck', 'chikorita', 'blastoise'
    ]);

    


    function manageScore(e){
        const index= Number(e.target.value);

        const newClicks= [... clicks];

        if(clicks[index] == 0){
            newClicks[index]=1;
            setClicks(newClicks);
            setCurrScore(currScore+1);            
        }
        else{
            setClicks([0,0,0,0,0,0,0,0,0,0,0,0]);

            if(currScore > bestScore) setBestScore(currScore);
            setCurrScore(0);            
        }
    }

    function ScoreCard(){
        return (
            <div>
                <p>Score: {currScore}</p>
                <p>Best Score: {bestScore}</p>
            </div>
        )
    }

    function shuffle(arr){
        const newArr= [... arr];

        for(let i=0; i<arr.length; ++i){
            const j= Math.floor(Math.random() * (i+1));
            [newArr[i], newArr[j]]= [newArr[j], newArr[i]];
        }

        return newArr;
    }

    function shufflePokeArray(arr){
        const newArr= [... arr];

        for(let i=0; i<arr.length; ++i){
            const j= Math.floor(Math.random() * (i+1));
            [newArr[i], newArr[j]]= [newArr[j], newArr[i]];
        }

        return newArr;
    }

    function handleClick(){
        setItems(prev=> shuffle(prev));
        setPokeArray(prev => shufflePokeArray(prev));
    }


   

    return (
            <div>            
                <ScoreCard />

                <div style={BtnContainer}>
                    {items.map(item =>{
                        return(
                            <Button
                                key={item}
                                text={item}
                                handleClick={handleClick}
                                manageScore={manageScore}
                                item={item}
                                pokemon={pokeArray[item]}
                            />
                        )
                    })}
                </div>
            </div>        
        )    
}

export {Grids};