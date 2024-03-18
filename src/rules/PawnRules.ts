import { Piece, Position, TeamType } from "@/Types";
import { samePosition, tileIsOccupied, tileIsOccupiedByOpponent } from "./GeneralRules";

export const getPossiblePawnMoves = (pawn: Piece, boardState: Piece[]): Position[] => {
  const possibleMoves: Position[] = [];

  const specialRow = pawn.team === TeamType.OUR ? 1 : 6;
  const pawnDirection = pawn.team === TeamType.OUR ? 1 : -1;

  const normalMove: Position = { x: pawn.position.x, y: pawn.position.y + pawnDirection };
  const specialMove: Position = { x: normalMove.x, y: normalMove.y + pawnDirection };
  const upperLeftAttack: Position = { x: pawn.position.x - 1, y: pawn.position.y + pawnDirection };
  const upperRightAttack: Position = { x: pawn.position.x + 1, y: pawn.position.y + pawnDirection };
  const leftPosition: Position = { x: pawn.position.x - 1, y: pawn.position.y };
  const rightPosition: Position = { x: pawn.position.x + 1, y: pawn.position.y };

  if (!tileIsOccupied(normalMove, boardState)) {
    possibleMoves.push(normalMove);

    if (pawn.position.y === specialRow &&
      !tileIsOccupied(specialMove, boardState)) {
      possibleMoves.push(specialMove)
    }
  }

  if (tileIsOccupiedByOpponent(upperLeftAttack, boardState, pawn.team)) {
    possibleMoves.push(upperLeftAttack);
  } else if (!tileIsOccupied(upperLeftAttack, boardState)) {
    const leftPiece = boardState.find(p => samePosition(p.position, leftPosition));
    if (leftPiece != null && leftPiece.enPassant) {
      possibleMoves.push(upperLeftAttack);
    }
  }

  if (tileIsOccupiedByOpponent(upperRightAttack, boardState, pawn.team)) {
    possibleMoves.push(upperRightAttack);
  } else if (!tileIsOccupied(upperRightAttack, boardState)) {
    const rightPiece = boardState.find(p => samePosition(p.position, rightPosition));
    if (rightPiece != null && rightPiece.enPassant) {
      possibleMoves.push(upperRightAttack);
    }
  }

  return possibleMoves;
}