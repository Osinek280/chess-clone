"use client"
import { useState } from "react";
import Tile from "../tile/tile";
import styles from "./chessboard.module.css"
import { PieceType, Piece } from "@/Types";
import { getPossibleBishopMoves } from "@/referee/referee";

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const pieces: Piece[] = [];

for(let i = 1; i < 9; i++) {
  pieces.push({ image: "/pawn_b.png", x: i, y: 7, type: PieceType.PAWN })
}

for(let i = 1; i < 9; i++) {
  pieces.push({ image: "/pawn_w.png", x: i, y: 2, type: PieceType.PAWN })
}

pieces.push({ image: "/rook_b.png", x: 1, y: 8, type: PieceType.ROOK })
pieces.push({ image: "/rook_b.png", x: 8, y: 8, type: PieceType.ROOK })
pieces.push({ image: "/knight_b.png", x: 2, y: 8, type: PieceType.KNIGHT })
pieces.push({ image: "/knight_b.png", x: 7, y: 8, type: PieceType.KNIGHT })
pieces.push({ image: "/bishop_b.png", x: 3, y: 8, type: PieceType.BISHOP })
pieces.push({ image: "/bishop_b.png", x: 6, y: 8, type: PieceType.BISHOP })
pieces.push({ image: "/queen_b.png", x: 4, y: 8, type: PieceType.QUEEN })
pieces.push({ image: "/king_b.png", x: 5, y: 8, type: PieceType.KING })

pieces.push({ image: "/rook_w.png", x: 1, y: 1, type: PieceType.ROOK })
pieces.push({ image: "/rook_w.png", x: 8, y: 1, type: PieceType.ROOK })
pieces.push({ image: "/knight_w.png", x: 2, y: 1, type: PieceType.KNIGHT })
pieces.push({ image: "/knight_w.png", x: 7, y: 1, type: PieceType.KNIGHT })
pieces.push({ image: "/bishop_w.png", x: 3, y: 1, type: PieceType.BISHOP })
pieces.push({ image: "/bishop_w.png", x: 6, y: 1, type: PieceType.BISHOP })
pieces.push({ image: "/queen_w.png", x: 4, y: 1, type: PieceType.QUEEN })
pieces.push({ image: "/king_w.png", x: 5, y: 1, type: PieceType.KING })

export default function Chessboard () {
  const [selected, setSelected] = useState<string | null>(null)
  let board = [];

  function grabPiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const element = e.target as HTMLElement;
    if(element.id === "chess-piece") {
      setSelected(element.getAttribute("data-id"))
    }
  }

  for (let j = verticalAxis.length; j >= 1; j--) {
    for (let i = 1; i < horizontalAxis.length + 1; i++) {
        const number = j + i + 2;
        let image = undefined;
        const coordinates = `${horizontalAxis[i - 1]}${verticalAxis[j - 1]}`

        pieces.forEach((p) => {
          if(p.x === i && p.y === j) {
            image = p.image
          }
        })

        board.push(
          <Tile 
            key={coordinates}
            cor={coordinates}
            selected={coordinates === selected}
            number={number} 
            image={image}  
          />
        );
    }
  }

  return (
    <div 
      className={styles.chessboard}
      onClick={e => grabPiece(e)}
    >{board}</div>
  );
}