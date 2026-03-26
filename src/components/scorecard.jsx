import { useState } from "react";

function ScoreCard(){
    const [currScore, setCurrScore]= useState(0);
    const [bestScore, setBestScore]= useState(0);

    return (
        <div>
            <p>Score: {currScore}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    )
}

export {ScoreCard};