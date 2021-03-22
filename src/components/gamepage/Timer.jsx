import React, {useState, useEffect, useRef} from 'react';

function Timer({onReset, setTimeOver}) {
    const DEFAULT_TIME = 10;
    const [seconds, setSeconds] = useState(DEFAULT_TIME);
    const timerID = useRef();

    useEffect(()=>{
        tick();
        return clearTimeout(timerID.current);
    }, []);

    useEffect(()=>{
        if(seconds === 0) setTimeOver(true);
        clearTimeout(timerID.current);
        tick();
    }, [seconds]);

    const tick = () => {
        if(seconds === 0) return;
        timerID.current = setTimeout(()=>{
            setSeconds(seconds - 1);            
        }, 1000);
    };

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
                <p className="timer">{seconds === 0 ? "-" : seconds}</p>
            </div>
            <div className="bottom">
                <button className={"reset"} onClick={reset}>{seconds === 0 ? "Play Again" : "Reset"}</button>
            </div>
        </React.Fragment>
    );
}

export default Timer;