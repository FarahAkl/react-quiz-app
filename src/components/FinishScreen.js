export default function FinishScreen({ points, maxPossiblePoints, highscore }) {
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
    </>
  );
}
