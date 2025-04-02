import React from "react";
import "./TypingChallengeContainer.css";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";


const TypingChallengeContainer = ({ 
    selectedparagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,

 }) => {
    return (
        <div className="typing-challenge-container">
            {/* Details section */}
            <div className="details-container">
                {/* Words Typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={words} />

                {/* Characters Typed */}
                 <ChallengeDetailsCard 
                 cardName="Characters" 
                 cardValue={characters} />

                {/* Speed */}
                 <ChallengeDetailsCard cardName="wpm" cardValue={wpm} />

            </div>

            {/* The REAL Challenge */}
            <div className="typewriter-container">
                <TypingChallenge 
                onInputChange={onInputChange}
                testInfo={testInfo}
                timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                selectedparagraph={selectedparagraph}/>
            </div>
        </div>
    );
};

export default TypingChallengeContainer;