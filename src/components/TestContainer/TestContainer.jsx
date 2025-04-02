import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import "./TestContainer.css";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";

const TestContainer = ({ 
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
        <div className="test-container">
            {
                timeRemaining > 0 ? (
  <div data-aos="fade-up" className="typing-challenge-container">
                <TypingChallengeContainer 
                timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                words={words} 
                characters={characters} 
                wpm={wpm} 
                selectedparagraph={selectedparagraph}
                testInfo={testInfo}
                onInputChange={onInputChange}
                />
            </div>
                ) : (
             <div className="try-again-cont">
                <TryAgain 
                words={words} 
                characters={characters}
                 wpm={wpm}
                 startAgain={startAgain}
                 />
            </div> 
                )}
        </div>
    );
};

export default TestContainer;