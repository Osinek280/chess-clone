import styles from "./title.module.css"
import { TileProps } from "@/Types";

export default function Tile({ number, image, highlight, isSelected, x, y, verticalAxis, horizontalAxis, team }: TileProps) {
  return(
    <div
      className={`
        ${styles[`${number && number % 2 === 0 ? 'black' : 'white'}-tile`]} 
        ${isSelected ? styles.selected : null}
        ${highlight ? (image ? styles["highlight-img"] : styles.highlight ) : null}
      `}
      data-selected={isSelected}
      data-x={x}
      data-y={y}
    >
      {x === 0 && <div className={styles.number}>{verticalAxis[y]}</div>}
      {y === 0 && <div className={styles.letter}>{horizontalAxis[x]}</div>}
      {image && 
        <div 
          style={{backgroundImage: `url(${image})`}} 
          className={`${styles["chess-piece"]}`} 
          id="chess-piece"
          data-x={x}
          data-y={y}
          data-team={team}
        ></div>
      }
    </div>
  )  
}