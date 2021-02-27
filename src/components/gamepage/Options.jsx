import React, { useEffect, useState } from 'react';

function Options({exp, answer, random, isDisabled}) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        setOptions(generateOptions());
    },[exp]);

    const generateOptions = () => {
        const result = solve();
        const roll = random(3);
        if(roll === 1){
            return [result, result + 1, result + 2];
        }
        else if(roll === 2 && result > 8){
            return [result, result - 2, result - 1];
        }
        else{
            return [result, result - 1, result + 1];
        }
    };

    const solve = () => {
        if(exp[1] === "+") return exp[0] + exp[2];
    };

    return (
        <div>
            {options.map((op, index) => <button key={index} className="option" onClick={answer}>{op}</button>)}
        </div>
    );
}

export default Options;