"use client"
import { useState, useEffect } from 'react';
import styles from "./userModal.module.css";
import { PieceType, UserProps } from '@/Types';

export default function UserModal({username, time, capturedPieces, isRunning, advantage, color}: UserProps) {
  const [seconds, setSeconds] = useState(time || 300);
  const [timerRunning, setTimerRunning] = useState(isRunning);

  useEffect(() => {
    if (timerRunning && seconds > 0) {
      const timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timerRunning, seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const handleTimer = () => {
    setTimerRunning(prevValue => !prevValue);
  };

  return (
    <div className={styles["user-box"]}>
      <p>{username}</p>
      <ul className={styles["list-pieces"]}>
        {capturedPieces?.map((piece, index) => (
          <div 
            key={index} 
            style={{backgroundImage: `url(${`/${piece}_${color}.png`})`}}
            className={styles["piece"]}
          ></div>
        ))}
        {advantage && advantage > 0 ? advantage : null}
      </ul>
      <p>{minutes}:{remainingSeconds < 10 ? '0' : ''}{remainingSeconds}</p>
    </div>
  );
}
