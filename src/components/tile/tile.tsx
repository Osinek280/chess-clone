import { horizontalAxis, verticalAxis } from "@/Constants";
import styles from "./title.module.css"
import { TileProps } from "@/Types";

export default function Tile({ number, image, highlight, isSelected, x, y }: TileProps) {
  return(
    <div
      onClick={() => {
        // console.log(number)
        console.log(horizontalAxis[x || 0], verticalAxis[y || 0])
      }}
      className={`
        ${styles[`${number && number % 2 === 0 ? 'black' : 'white'}-tile`]} 
        ${isSelected ? styles.selected : null}
        ${highlight ? (image ? styles["highlight-img"] : styles.highlight ) : null}
      `}
      data-selected={isSelected}
    >
      {x === 0 && <div className={styles.number}>{verticalAxis[y || 0]}</div>}
      {y === 0 && <div className={styles.letter}>{horizontalAxis[x || 0]}</div>}
      {image && 
        <div 
          style={{backgroundImage: `url(${image})`}} 
          className={`${styles["chess-piece"]}`} 
          id="chess-piece"
          data-x={x}
          data-y={y}
        ></div>
      }
    </div>
  )  
}