function ScoreCard({currScore, bestScore}){
    return (
        <div>
            <p>Score: {currScore}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    )
}

export {ScoreCard};