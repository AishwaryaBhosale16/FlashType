import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, characters, wpm, startAgain }) => {
    return (
         <div data-aos="fade-up" className="try-again-container">
        <h1>Test Results</h1>

        <div className="result-container">
            <p>
                <b>Characters:</b> {characters}
            </p>
            <p>
                <b>Words:</b> {words}
            </p>
            <p>
                <b>Speed:</b> {wpm} wpm
            </p>
        </div>

        <div>
            <button onClick={() => startAgain()} className = "end-buttons start-again-btn">Re-try</button>
            <button 
               onClick={() => {
                window.open(
                    "https://www.linkedin.com/in/aishwarya-bhosale-814a30235",
                    "LinkedIn-share-dialog",
                    "width=800,height=600"
                )
               }}
               className="end-buttons share-btn"
               >
                Share
               </button>

               <button
               onClick={() => {
                window.open(
                    "https://x.com/Aishwaryab1609",
                    "Twitter",
                    "width=800,height=600"
                )
               }}
                 className="end-buttons tweet-btn"
               >
                Tweet
               </button>
        </div>
    </div>
    );
};

export default TryAgain;