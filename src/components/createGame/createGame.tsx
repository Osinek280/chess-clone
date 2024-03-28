"use client"
import { useState } from 'react';
import styles from './createGame.module.css';
import { useRouter } from 'next/navigation';
import { Game, ParamsProps } from '@/Types';


interface game {
  color: string
  inc: number
  oponent: {
    time: number
  }
  our: {
    time: number
  }
}

const colors = [
  'white',
  'random',
  'black'
] as const;

const timeOptions = [
  {
    title: 'Recent',
    options: [
      {time: 120, inc: 0},
      {time: 300, inc: 2},
      {time: 540, inc: 0},
    ]
  },
  {
    title: 'Bullet',
    options: [
      {time: 60, inc: 0},
      {time: 60, inc: 1},
      {time: 120, inc: 1},
    ]
  },
  {
    title: 'Blitz',
    options: [
      {time: 180, inc: 0},
      {time: 180, inc: 2},
      {time: 300, inc: 0},
    ]
  }   
]

function chooseColor(selectedOption: number): string {
  if (selectedOption === 1) {
      return "white";
  } else if (selectedOption === 3) {
      return "black";
  } else if (selectedOption === 2) {
      const randomColorIndex = Math.random() < 0.5 ? 0 : 1; 
      const colors = ["black", "white"];
      return colors[randomColorIndex];
  } else {
      return "Niepoprawna opcja";
  }
}

export default function CreateGame({ mode }: {mode?: string}) {
  const [selectedOption, setSelectedOption] = useState<number>(1); 
  const [selectedTime, setSelectedTime] = useState<{ time: number; inc: number }>(timeOptions[0].options[0]); 

  const router = useRouter();

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(parseInt(event.target.value, 10)); 
  };

  function onSubmit() {
    const GameData: Game = {
      color: chooseColor(selectedOption),
      inc: selectedTime.inc,
      time: selectedTime.time,
      turn: 0,
      pieces: [],
      ourPieces: [],
      opponentPieces: []
    };
    
    localStorage.setItem('game', JSON.stringify(GameData));     

    router.push(`/play/${mode}`)
  }

  return (
    <div
      className={styles["model-container"]}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          router.back();
        }
      }}
    >
      <div className={styles["model"]}>
        <p>I PLAY AS</p>
        <div className={styles["radio-container"]}>
          {[1, 2, 3].map((option) => (
            <label
              htmlFor={option.toString()}
              key={option}
              className={styles["box-radio"]}
            >
              <input
                type="radio"
                id={option.toString()}
                value={option.toString()}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className={styles["radio-input"]}
              />
              <div
                className={`${styles["radio-icon"]} ${styles[colors[option - 1]]}`}
              >{option === 2 ? '?' : null}</div>
            </label>
          ))}
        </div>
        {timeOptions.map((section, i) => (
          <div className={styles['section-container']} key={i}>
            <p>{section.title}</p>
            <div className={styles["option-container"]}>
              {section.options.map((op, j) => (
                <label
                  htmlFor={`${op.time}-${op.inc}`}
                  key={`${op.time}-${op.inc}`}
                  className={styles["time-label"]}
                >
                  <input
                    type="radio"
                    id={`${op.time}-${op.inc}`}
                    value={`${op.time}-${op.inc}`}
                    checked={selectedTime.time === op.time && selectedTime.inc === op.inc}
                    onChange={() => {
                      setSelectedTime(op);
                    }}
                    className={styles["time-input"]}
                  />
                  <div className={`${styles["time-option"]} ${selectedTime.time === op.time && selectedTime.inc === op.inc ? styles.selected : ''}`}>{op.time / 60} {op.inc !== 0 ? `| ${op.inc}` : 'min'}</div>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button className={styles["play-btn"]} onClick={onSubmit} type='submit'>Play</button>
      </div>
    </div>
  );
}
