


import React, { useState, useEffect } from "react";

function Question({ onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timerId = setTimeout(() => {
      
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    
    return () => {
      clearTimeout(timerId);
    };
  }, [timeRemaining, onAnswered]);

  useEffect(() => {

    if (timeRemaining === 0) {
      
      setTimeRemaining(10);
      
      onAnswered(false);
    }
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <p>Time Remaining: {timeRemaining} seconds</p>
      {/* Add the question and list of possible answers here */}
    </div>
  );
}

export default Question;
