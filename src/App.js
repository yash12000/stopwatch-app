import React, { useState, useEffect } from 'react';
import './styles.css';

const App = () => {
    const [time, setTime] = useState(0); // time in seconds
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleStartStop = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className="stopwatch-container">
            <h1>Stopwatch</h1>
            <p>Time: {formatTime(time)}</p>
            <div className="button-container">
                <button onClick={handleStartStop}>
                    {isRunning ? 'Stop' : 'Start'}
                </button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default App;
