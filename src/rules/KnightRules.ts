import { Piece, Position } from "@/Types";
import { tileIsEmptyOrOccupiedByOpponent } from "./GeneralRules";

export const getPossibleKnightMoves = (knight: Piece, boardstate: Piece[]): Position[] => {
  const possibleMoves: Position[] = [];

  for (let i = -1; i < 2; i += 2) {
    for (let j = -1; j < 2; j += 2) {
      const verticalMove: Position = { x: knight.position.x + j, y: knight.position.y + i * 2 };
      const horizontalMove: Position = { x: knight.position.x + i * 2, y: + knight.position.y + j };

      if(tileIsEmptyOrOccupiedByOpponent(verticalMove, boardstate, knight.team)) {
        possibleMoves.push(verticalMove);
      }

      if(tileIsEmptyOrOccupiedByOpponent(horizontalMove, boardstate, knight.team)) {
        possibleMoves.push(horizontalMove);
      }
    }
  }

  return possibleMoves;
}