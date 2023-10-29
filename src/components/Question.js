// import React, { useState } from "react";

// function Question({ question, onAnswered }) {
//   const [timeRemaining, setTimeRemaining] = useState(10);

//   // add useEffect code

//   function handleAnswer(isCorrect) {
//     setTimeRemaining(10);
//     onAnswered(isCorrect);
//   }

//   const { id, prompt, answers, correctIndex } = question;

//   return (
//     <>
//       <h1>Question {id}</h1>
//       <h3>{prompt}</h3>
//       {answers.map((answer, index) => {
//         const isCorrect = index === correctIndex;
//         return (
//           <button key={answer} onClick={() => handleAnswer(isCorrect)}>
//             {answer}
//           </button>
//         );
//       })}
//       <h5>{timeRemaining} seconds remaining</h5>
//     </>
//   );
// }

// export default Question;
import React, { useState, useEffect } from "react";

function Question({ onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timerId = setTimeout(() => {
      // Decrease the time remaining by 1 every second
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(timerId);
    };
  }, [timeRemaining, onAnswered]);

  useEffect(() => {
    // Check if time has run out
    if (timeRemaining === 0) {
      // Reset the timer for the next question
      setTimeRemaining(10);
      // Trigger the onAnswered callback with a value of false
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
