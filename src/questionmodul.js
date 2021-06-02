import { useState } from "react";
import styles from "./modulstyle.scss";

export default function Modul(props) {
  const score = props.score;
  const { question, choices, answer, points } = props.currentQuestion;
  // console.log(choices);

  const [answerValue, setAnswerValue] = useState(false);
  // create hook to change value

  // creating score hook to update stat
  const [scoreValue, setScoreValue] = useState(score);

  //decide whether is correct answer then update score value
  // if (answerValue === true) return setScoreValue(scoreValue + points);
  // console.log("scoreeeee--", scoreValue);

  // alert("button was clicked");

  function handleClick(index, answer) {
    console.log(index);
    if (index === answer) {
      console.log("you clicked the right answer", answerValue);
      setAnswerValue(true);
      return answerValue;
    }
    return answerValue;
  }
  const wrongChoice = "sorry you got it wrong!";
  const rightChoice = "you got it right!!";

  return (
    <div className="modal">
      <div className="questiontext"> {question}</div>
      {choices.map((choice, index) => (
        <div>
          <button
            id="buttonChoices"
            className="buttonchoices"
            onClick={() => handleClick(index, answer)}
          >
            {choice}
          </button>
        </div>
      ))}
      {answerValue === false ? wrongChoice : rightChoice}
    </div>
    // if (button.cliked && wrong choice)
    //return wrong
    // else if (button is clicked && right choice)
    //return right + add points
  );
}
//
//<button
//onClick={() => setCurrentScore(currentScore + props.pointsEarned)}
//   >
