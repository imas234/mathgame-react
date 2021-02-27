import React, {useState, useEffect, useRef} from 'react';
import Timer from './gamepage/Timer';
import Expression from './gamepage/Expression';
import Options from './gamepage/Options';


function GamePage(props) {
    const [mathOp, setMathOp] = useState("+");
    const [exp, setExp] = useState([]);

    const generateExpression = () => {
        setExp([getNum(10), mathOp, getNum(10)]);
    };

    const getNum = (max) => {
        let n = Math.floor(Math.random() * max);
        while(n === 0) n = Math.floor(Math.random() * max);
        return n;
    }

    useEffect(() => {
        generateExpression();
    }, []);

    const handleReset = () => {
        generateExpression();
    };

    return (
        <div className="container">
            <Timer onReset={handleReset}/>
            <Expression exp={exp} />
            <Options exp={exp} answer={generateExpression} random={getNum}/>
        </div>
    );
}

export default GamePage;