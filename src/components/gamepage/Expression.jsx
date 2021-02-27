import React from 'react';

function Expression({exp}) {
    return (
        <div>
            {exp.map((x, index) => <span className="exp" key={index}>{x}</span>) }
        </div>
    );
}

export default Expression;