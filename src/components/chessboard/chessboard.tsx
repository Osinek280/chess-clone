"use client"
import { useEffect, useState } from "react";
import Tile from "../tile/tile";
import styles from "./chessboard.module.css"
import { Move, Piece, Position, TeamType } from "@/Types";
import { getPossibleMoves, samePosition } from "@/rules/GeneralRules";
import { HORIZONTALAXIS, initialBoardState, VERTICALAXIS } from "@/Constants";

export default function Chessboard ({color, turn} : {color: string, turn?: 0 | 1}) {
  const [possibleMove, setPossibleMove] = useState<Position[]>([]);
  const [pieces, setPieces] = useState<Piece[]>(initialBoardState);
  const [selected, setSelected] = useState<{x: number, y: number} | null>(null)

  const [movesList, setMovesList] = useState<Move[]>([])

  const verticalAxis = color === 'white' ? VERTICALAXIS.toReversed() : VERTICALAXIS
  const horizontalAxis = color === 'white' ? HORIZONTALAXIS : HORIZONTALAXIS.toReversed()

  function grabPiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const element = e.target as HTMLElement;

    const x = parseInt(element.getAttribute("data-x") || "", 0);
    const y = parseInt(element.getAttribute("data-y") || "", 0);

    if(element.getAttribute("data-selected")) {
      if (!isNaN(x) && !isNaN(y) && selected) {
        const foundPiece = pieces.find((el: Piece) => el.position.x === selected.x && el.position.y === selected.y);

        const foundPosition = possibleMove.find(position => samePosition(position, {x, y}));

        if(foundPosition && foundPiece) {
          setMovesList([...movesList, {
            piece: foundPiece,
            from: foundPiece?.position,
            to: {x, y}
          }])
        }
      }
      
      // STATIONARY
        // zmiana trun na !turn
      // ONLINE
        // zmiana trun na !turn + websockets
      // COMPUTER
        // ruch ai      

      
    }else if (element.id === "chess-piece") {
      console.log(element)    
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
  
  }, [pieces, selected])

  useEffect(() => {
    movesList.forEach((move, index) => {

      const updatedPieces = [...pieces]
      const toIndex = pieces.findIndex((el) => samePosition(el.position, move.to))
      
      if(toIndex != -1) {
        updatedPieces.splice(toIndex, 1)
      }

      const fromPiece = updatedPieces.find((el) => samePosition(el.position, move.from))

      if(fromPiece) {
        fromPiece.position = move.to
      }

      setPieces(updatedPieces)
    });  
    setSelected(null)
    setPossibleMove([])
  }, [movesList])

  return (
    <div className={styles.chessboard} onClick={(e) => grabPiece(e)}>
      {verticalAxis.map((number, j) => (
        horizontalAxis.map((letter, i) => {
          const number = j + i + 2;
          const coordinates = `${horizontalAxis[i]}${verticalAxis[j]}`;
  
          const piece = pieces.find(
            (p) => samePosition(p.position, { x: i, y: color === 'white' ? 7 - j : j })
          );
  
          const image = piece
            ? `/${piece?.type}_${piece?.team === 0 ? "b" : "w"}.png`
            : undefined;
  
          const highlighted: boolean = possibleMove
            ? possibleMove.find((el) => el.x === i && el.y === (color === 'white' ? 7 - j : j)) !== undefined
            : false;
  
          const isSelected: boolean = selected
            ? samePosition({ x: i, y: color === 'white' ? 7 - j : j }, selected)
            : false;
          return (
            <Tile
              key={coordinates}
              x={i}
              y={color === 'white' ? 7 - j : j}
              number={number}
              image={image}
              highlight={highlighted}
              isSelected={isSelected}     
              verticalAxis={verticalAxis}
              horizontalAxis={horizontalAxis}
              team={piece ? piece.team : 0}
            />
          );
        })
      ))}
    </div>
  );
  
  
}