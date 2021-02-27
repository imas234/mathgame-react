import React, {useState, useEffect, useRef} from 'react';


function GamePage(props) {
    const DEFAULT_TIME = 60;
    const [seconds, setSeconds] = useState(DEFAULT_TIME);
    const timerID = useRef();

    useEffect(()=>{
        tick();

        return clearTimeout(timerID.current);
    }, []);

    useEffect(()=>{
        clearTimeout(timerID.current);
        tick();
    }, [seconds]);

    const tick = () => {
        if(seconds === 0) return;
        timerID.current = setTimeout(()=>{
            setSeconds(seconds - 1);            
        }, 1000);
    }

    const reset = () => {
        // resets timer
        clearTimeout(timerID.current);
        setSeconds(DEFAULT_TIME);
    }; 

    return (
        <div>
            <p>{seconds}</p>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default GamePage;