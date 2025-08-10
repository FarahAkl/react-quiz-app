import { useQuestions } from "../context/QuestionContext";

export default function FinishScreen() {
  const {
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
} = useQuestions()
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji =
    percentage === 0
      ? "😭"
      : percentage <= 25
      ? "😑"
      : percentage <= 50
      ? "🤷‍♂️"
      : percentage <= 75
      ? "😊"
      : "⭐";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ( {Math.ceil(percentage)}% )
      </p>
      <p className="highscore">Highscore : {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        Restart Quiz
      </button>
    </>
  );
}
