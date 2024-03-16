import styles from "./gameboard.module.css"
import Chessboard from "@/components/chessboard/chessboard"

export default function Game() {
  return (
    <div className={styles["container"]}>
      <div className={styles["con"]}>
        <Chessboard />
        <div className={styles["move-list"]}></div>
      </div>
    </div>
  )
}
