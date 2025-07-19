import { useEffect, useState } from "react";

export default function Timer({ gameWon, resetTrigger, hasStarted }) {
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });

  // Reset timer when game is restarted
  useEffect(() => {
    setTimer({ minutes: 0, seconds: 0 });
  }, [resetTrigger]);

  // Start/stop timer only when hasStarted is true and game is not won
  useEffect(() => {
    if (!hasStarted || gameWon) return;

    const interval = setInterval(() => {
      setTimer(prevTimer => {
        const newSeconds = prevTimer.seconds + 1;
        const newMinutes = newSeconds >= 60 ? prevTimer.minutes + 1 : prevTimer.minutes;
        return {
          minutes: newMinutes,
          seconds: newSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, [hasStarted, gameWon]);

  return (
    <div className="timer">
        Play time {": "}
      {timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}:
      {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
    </div>
  );
}