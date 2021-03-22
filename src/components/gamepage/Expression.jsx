import React from 'react';

const Expression = ({exp}) => {
    return (
        <div className="exp-container">
            {exp.map((x, index) => <span className="exp" key={index}>{x}</span>) }
        </div>
    );
}

export default Expression;