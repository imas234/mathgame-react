import React, {useState, useEffect, useRef} from 'react';
import Timer from './gamepage/Timer';
import Expression from './gamepage/Expression';
import Options from './gamepage/Options';
import Score from './gamepage/Score';


function GamePage(props) {
    const [mathOp, setMathOp] = useState("+");
    const [exp, setExp] = useState([]);
    const [timeOver, setTimeOver] = useState(false);
    const points = useRef();

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
        points.current = 0;
    }, []);

    const answer = (correct) => {
        if(correct) points.current++;
        else points.current--;
        generateExpression();
    }

    const handleReset = () => {
        generateExpression();
        setTimeOver(false);
        points.current = 0;
    };

    return (
        <div className="container">
            <Timer onReset={handleReset} setTimeOver={setTimeOver}/>
            {
                !timeOver ? 
                    <>
                        <Expression exp={exp} />
                        <Options exp={exp} answer={answer} random={getNum}/>                    
                    </>
                    : 
                    <Score points={points.current}/>
                }
        </div>
    );
}

export default GamePage;