"use client"
import { useEffect, useState } from "react";
import Tile from "../tile/tile";
import styles from "./chessboard.module.css"
import { Piece, Position, TeamType } from "@/Types";
import { getPossibleMoves, samePosition } from "@/rules/GeneralRules";
import { horizontalAxis, initialBoardState, verticalAxis } from "@/Constants";

export default function Chessboard ({color} : {color: string}) {
  const [possibleMove, setPossibleMove] = useState<Position[] | null>(null);
  const [pieces, setPieces] = useState<Piece[]>(initialBoardState);
  const [selected, setSelected] = useState<{x: number, y: number} | null>(null)
  const [turn, setTurn] = useState<TeamType>(TeamType.OUR)
  let board = [];

  function grabPiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const element = e.target as HTMLElement;

    if(element.getAttribute("data-selected")) {
      // strefa ruchu
    }else if (element.id === "chess-piece") {
      const x = parseInt(element.getAttribute("data-x") || "", 0);
      const y = parseInt(element.getAttribute("data-y") || "", 0);
    
      if (!isNaN(x) && !isNaN(y)) {
        setSelected({ x, y });
      }
    }    
  }

  useEffect(() => {
    if(selected) {
      const piece = pieces.find((el) => samePosition(el.position, selected))
      if(piece) {
        setPossibleMove(getPossibleMoves(piece, pieces))
      }
    }
  
  }, [selected])

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      const coordinates = `${horizontalAxis[i]}${verticalAxis[j]}`;
  
      const piece = pieces.find(
        (p) => samePosition(p.position, { x: i, y: j })
      );
  
      const image = piece
        ? `/${piece?.type}_${piece?.team === 0 ? "b" : "w"}.png`
        : undefined;
  
      const highlighted: boolean = possibleMove
        ? possibleMove.find((el) => el.x === i && el.y === j) !== undefined
        : false;
  
      const isSelected: boolean = selected
        ? samePosition({ x: i, y: j }, selected)
        : false;
  
      board.push(
        <Tile
          key={coordinates}
          x={i}
          y={j}
          number={number}
          image={image}
          highlight={highlighted}
          isSelected={isSelected}
        />
      );
    }
  }

  return (
    <div className={styles.chessboard} onClick={(e) => grabPiece(e)}>
      {verticalAxis.map((number, j) => (
        horizontalAxis.map((letter, i) => {
          const number = j + i + 2;
          const coordinates = `${horizontalAxis[i]}${verticalAxis[j]}`;
  
          const piece = pieces.find(
            (p) => samePosition(p.position, { x: i, y: j })
          );
  
          const image = piece
            ? `/${piece?.type}_${piece?.team === 0 ? "b" : "w"}.png`
            : undefined;
  
          const highlighted: boolean = possibleMove
            ? possibleMove.find((el) => el.x === i && el.y === j) !== undefined
            : false;
  
          const isSelected: boolean = selected
            ? samePosition({ x: i, y: j }, selected)
            : false;
      
          return (
            <Tile
              key={coordinates}
              x={i}
              y={j}
              number={number}
              image={image}
              highlight={highlighted}
              isSelected={isSelected}     

            />
          );
        })
      ))}
    </div>
  );
  
  
}