"use client"
import React, { useState, useEffect } from "react";
import styles from "../play.module.css";
import { Game, User } from "@/Types";
import UserModal from "@/components/userModal/userModal";
import { calculateCapturedPiecesValue } from "@/rules/GeneralRules";
import Chessboard from "@/components/chessboard/chessboard";

export default function PlayStationary() {
  const gameItem = localStorage.getItem('game');
  const game : Game = gameItem ? JSON.parse(gameItem) : undefined;
  const [turn, setTurn] = useState<0 | 1>(game ? game.turn : 0)
  const [opponent, setOponnent] = useState<User>({
    username: 'Player 2', 
    time: game ? game.time : 60, 
    capturedPieces: game ? game.opponentPieces : []
  })

  const [our, setOur] = useState<User>({
    username: 'Player 1', 
    time: game ? game.time : 60, 
    capturedPieces: game ? game.ourPieces : []
  })

  return (
    <div className={styles.container}>
      <div>
        <UserModal
          username={opponent.username}
          time={opponent.time}
          capturedPieces={opponent.capturedPieces}
          isRunning={turn === 1}
          advantage={
            calculateCapturedPiecesValue(opponent.capturedPieces) 
            - calculateCapturedPiecesValue(our.capturedPieces)
          }
          color={game && game.color === 'white' ? 'black' : 'white'}
        />
        <div className={styles["con"]}>
            <Chessboard 
              color={game ? game.color : 'white'}
              turn={turn}
            />
          <div className={styles["move-list"]}></div>
        </div>
        <UserModal
          username={our.username}
          time={our.time}
          capturedPieces={our.capturedPieces}
          isRunning={turn === 0}
          advantage={
            calculateCapturedPiecesValue(our.capturedPieces) 
            - calculateCapturedPiecesValue(opponent.capturedPieces)
          }
          color={game ? game.color : 'white'}
        />
      </div>
    </div>
  );
}
