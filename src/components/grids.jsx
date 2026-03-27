import { useState } from "react";
import { BtnStyle, BtnContainer } from "../styles/grids";

function Grids(){
    const [clicks, setClicks]= useState([0,0,0]);
    const [currScore, setCurrScore]= useState(0);
    const [bestScore, setBestScore]= useState(0);
    const [items, setItems]= useState([0,1,2]);

    function manageScore(e){
        const index= Number(e.target.value);

        const newClicks= [... clicks];

        if(clicks[index] == 0){
            newClicks[index]=1;
            setClicks(newClicks);
            setCurrScore(currScore+1);            
        }
        else{
            setClicks([0,0,0]);

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

    


    return (
        <div>
            
            <ScoreCard />

            <div style={BtnContainer}>
                {items.map(item =>{
                    return(
                        <button
                            key={item}
                            onClick={(e)=>{ manageScore(e); handleClick()}}
                            style={BtnStyle}
                            value={item}
                        >
                            
                            {item}

                        </button>
                    )
                })}
            </div>

        </div>
        
    )
}

export {Grids};