import React from 'react';

const HighScore = ({highScore}) => {
    return (
        <div>
            <p className="high-score">
                HIGHSCORE: <span className="highlight-score">{highScore}</span>
            </p>
        </div>
    );
}

export default HighScore;