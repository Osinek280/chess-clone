import Image from "next/image";
import styles from "./title.module.css"

interface Props {
  number: number;
  image?: string;
  cor: string;
  selected: boolean;
}

export default function Tile({ number, image, cor, selected}: Props) {
  return(
    <div 
      className={`${styles[`${number % 2 === 0 ? 'black' : 'white'}-tile`]} ${selected ? styles.selected : null}`}
    >
      {image && 
        <div 
          style={{backgroundImage: `url(${image})`}} 
          className={`${styles["chess-piece"]} ${selected ? styles.selected : null}`} 
          id="chess-piece"
          data-id={cor}
        ></div>
      }
    </div>
  )  
}