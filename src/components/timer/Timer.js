import React from "react";
import { useState, useEffect } from 'react';

import './styles.css';

/**
 * Questions
 *  - So we want users to type in single digits into each of the rectangles and that is the time that
 *    the timer starts counting down from?
 *  - Are these hours and minutes or minutes and seconds?
 *      - Do we want the timer to be able to extend to more units (ie: seconds or hours?)
 *  - What's the maximum number of minutes/hours it should be able to set?
 *  - What time should the timer be set to by default? OO:OO?
 *      - Should we have the option to pass in a default initial time?
 *  - Do we need to handle the case of the user typing more than one digit?
 */

export default function Timer() {
    // [tenMins, mins, tenSec, sec]
    const [time, setTime] = useState([0, 0, 0, 0]);
    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const [timeDisplayed, setTimeDisplayed] = useState('00:00');
    const [isRunning, setIsRunning] = useState(false);

    // TODO: input validation for multiple digit and non-number inputs


    useEffect(() => {
        let intervalId;
        if (isRunning) {
            // Calculate seconds
            const countDown = secondsToTime(timeInSeconds);
            setTimeDisplayed(countDown);

            // Call a function every second to count down
            intervalId = setInterval(() => {
                console.log("time left: " + timeInSeconds)
                const newTime = timeInSeconds - 1;
                setTimeInSeconds(newTime);

                const countDown = secondsToTime(newTime);
                setTimeDisplayed(countDown);

                if (newTime === 0) {
                    clearInterval(intervalId);
                    setIsRunning(false);
                }
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isRunning, timeInSeconds])

    const handleChange = (e, key) => {
        const digit = e.target.value;

        // TODO: Handle input validation with non-number values
        const newTime = [...time];
        newTime[key] = Number(digit);
        setTime(newTime);
    }

    const handleStart = () => {
        let timerLength = 600 * time[0] + 60 * time[1] + 10 * time[2] + time[3];
        setTimeInSeconds(timerLength);
        setIsRunning(true);
    }

    const handleStop = () => {
        setIsRunning(false);
        setTimeDisplayed();
    }

    const handleReset = () => {
        setTime([0, 0, 0, 0]);
        setTimeDisplayed('');
        setTimeInSeconds(0);
        setIsRunning(false);
    }

    function secondsToTime(totalSeconds) {
        // Change parsing if we support hours or miliseconds
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        // Add a '0' before the seconds amount if it's a single digit
        const finalTimeString = (seconds < 10) ? (minutes + ':0' + seconds) : (minutes + ":" + seconds);
        return finalTimeString;
    }

    return (
        <div className="timer">
            {isRunning ? (
                <div>
                    {timeDisplayed}
                </div>
            ) :
                <div className="clock">
                    <input className="clock-item" key={0} type="number" min={0} max={9} maxLength={1} onChange={(e) => { handleChange(e, 0) }}></input>
                    <input className="clock-item" key={1} type="number" min={0} max={9} maxLength={1} onChange={(e) => { handleChange(e, 1) }}></input>
                    <div className="colon"> : </div>
                    <input className="clock-item" key={2} type="number" min={0} max={9} maxLength={1} onChange={(e) => { handleChange(e, 2) }}></input>
                    <input className="clock-item" key={3} type="number" min={0} max={9} maxLength={1} onChange={(e) => { handleChange(e, 3) }}></input>
                </div>
            }

            {console.log(timeInSeconds)}

            <div className="controls">
                <button className="control-button" disabled={isRunning} onClick={() => handleStart()}> Start </button>
                <button className="control-button" disabled={!isRunning} onClick={() => handleStop()}> Stop </button>
                <button className="control-button" disabled={!isRunning} onClick={() => handleReset()}> Reset </button>
            </div>
        </div>
    );
}