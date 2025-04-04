import React from "react";
import "./Challenge.css";
import TestContainer from "../TestContainer/TestContainer";

const Challenge = ({
    selectedparagraph,
    words,
     characters,
     wpm,
      timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    startAgain,

}) => {
    return (
        <div className="challenge-container">
            <h1 data-aos="fade-down" className="challenge-header">
            Take a speed test now!
            </h1>
            <TestContainer 
             selectedparagraph={selectedparagraph}
             timeRemaining={timeRemaining}
             timerStarted={timerStarted}
             words={words}
             characters={characters}
             wpm={wpm}
             testInfo={testInfo}
             onInputChange={onInputChange}
             startAgain={startAgain}
            />
        </div>
    );
};

export default Challenge;