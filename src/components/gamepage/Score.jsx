import React from 'react';

const Score = ({points}) => {
    return (
        <div className="points-container">
            <p className="points-text">YOU SCORED</p>
            <p className="points">{points}</p>
        </div>
    );
}

export default Score;