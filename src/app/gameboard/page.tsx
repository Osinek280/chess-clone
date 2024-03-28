"use client"
import UserModal from "@/components/userModal/userModal"
import styles from "./gameboard.module.css"
import Chessboard from "@/components/chessboard/chessboard"
import { PieceType, TeamType, User } from "@/Types"
import { useState } from "react"
import { calculateCapturedPiecesValue } from "@/rules/GeneralRules"

const whiteOne = TeamType.OUR;

export default function Game() {
  const [turn, setTurn] = useState<TeamType>(TeamType.OUR)
  const [opponent, setOponnent] = useState<User>({username: 'Bot', time: 225, capturedPieces: []})
  const [our, setOur] = useState<User>({username: 'Osinek', time: 258, capturedPieces: []})

  return (
    <div className={styles["container"]}>
      <div>
        <UserModal 
          username={opponent.username} 
          time={opponent.time}
          capturedPieces={opponent.capturedPieces}
          isRunning={turn === 0}
          advantage={calculateCapturedPiecesValue(opponent.capturedPieces) - calculateCapturedPiecesValue(our.capturedPieces)}
          color={whiteOne === TeamType.OUR ? "b" : "w"}
        />
        <div className={styles["con"]}>
            <Chessboard color={whiteOne === TeamType.OUR ? "white" : "black"} />
          <div className={styles["move-list"]}></div>
        </div>
        <UserModal
          username={our.username} 
          time={our.time}
          capturedPieces={our.capturedPieces}
          isRunning={turn === 1} 
          advantage={calculateCapturedPiecesValue(our.capturedPieces) - calculateCapturedPiecesValue(opponent.capturedPieces)}
          color={whiteOne === TeamType.OUR ? "w" : "b"}
        />
      </div>
    </div>
  )
}
