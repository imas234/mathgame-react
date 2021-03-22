import React, { useEffect, useState } from 'react';

const Options = ({exp, answer, random, isDisabled}) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        setOptions(
            reorderOptions(
                generateOptions()
            )
        );
    },[]);

    useEffect(() => {
        setOptions(
            reorderOptions(
                generateOptions()
            )
        );
    },[exp]);

    const reorderOptions = (opt) => {
        const orders = [123, 132, 312, 321, 231, 213];
        const selectedOrder = orders[random(6)];

        const reorderedOptions = [
            opt[Math.floor(selectedOrder / 100) - 1],
            opt[Math.floor(selectedOrder % 100 / 10) - 1],
            opt[selectedOrder % 10 - 1],
        ];

        return reorderedOptions;
    };

    const generateOptions = () => {
        const result = solve();
        let roll = random(3);
        while(roll === 2 && result < 8) {
            roll = random(3);
        }
        if(roll === 1){
            return [result, result + 1, result + 2];
        }
        if(roll === 2){
            return [result, result - 2, result - 1];
        }
        return [result, result - 1, result + 1];        
    };

    const solve = () => {
        if(exp[1] === "+") return exp[0] + exp[2];
    };

    const evaluate = (selected) => {
        const result = solve();
        answer(selected === result);
    }

    return (
        <div className="options-container">
            { options.length > 0 ? options.map((op, index) => 
                <button key={index} className="option" onClick={() => evaluate(op)}>{String(op)}</button>
            ) : null }
        </div>
    );
}

export default Options;