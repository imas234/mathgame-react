import React, {useState, useEffect, useRef} from 'react';

function Timer({onReset}) {
    const DEFAULT_TIME = 10;
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
        // testing onReset
        onReset();
        
        // resets timer
        clearTimeout(timerID.current);
        setSeconds(DEFAULT_TIME);
        tick();       
    }; 

    return (
        <React.Fragment>
            <div>
                <p>{seconds}</p>
            </div>
            <div className="bottom">
                <button onClick={reset}>{seconds === 0 ? "Play Again" : "Reset"}</button>
            </div>
        </React.Fragment>
    );
}

export default Timer;