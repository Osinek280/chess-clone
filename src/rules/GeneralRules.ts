import { Move, Piece, PieceType, Position, TeamType } from "@/Types";
import { getPossibleBishopMoves } from "./BishopRules";
import { getPossiblePawnMoves } from "./PawnRules";
import { getPossibleRookMoves } from "./RookRules";
import { getPossibleKnightMoves } from "./KnightRules";
import { getPossibleQueenMoves } from "./QueenRules";
import { getPossibleKingMoves } from "./KingRules";

export const getPossibleMoves = (piece: Piece, boardstate: Piece[]): Position[] => {
  const possibleMoves: Position[] = [];

  switch (piece.type) {
    case PieceType.PAWN:
      return getPossiblePawnMoves(piece, boardstate);
    case PieceType.BISHOP:
      return getPossibleBishopMoves(piece, boardstate);
    case PieceType.KNIGHT:
      return getPossibleKnightMoves(piece, boardstate);
    case PieceType.ROOK:
      return getPossibleRookMoves(piece, boardstate);  
    case PieceType.QUEEN:
      return getPossibleQueenMoves(piece, boardstate);
    case PieceType.KING:
      return getPossibleKingMoves(piece, boardstate);
    default:
      return [];
  }

  return possibleMoves;
}

export const tileIsOccupied = (position: Position, boardState: Piece[]): boolean => {
  const piece = boardState.find((p) => samePosition(p.position, position));

  if (piece) {
    return true;
  } else {
    return false;
  }
}

export const  tileIsOccupiedByOpponent = (
  position: Position,
  boardState: Piece[],
  team: TeamType
): boolean => {
  const piece = boardState.find(
    (p) => samePosition(p.position, position) && p.team !== team
  );

  if (piece) {
    return true;
  } else {
    return false;
  }
}

export const tileIsEmptyOrOccupiedByOpponent =(
  position: Position,
  boardState: Piece[],
  team: TeamType
) => {
  return (
    !tileIsOccupied(position, boardState) ||
    tileIsOccupiedByOpponent(position, boardState, team)
  );
}

export function samePosition(p1: Position, p2: Position) {
  return p1.x === p2.x && p1.y === p2.y;
}

export function calculateCapturedPiecesValue(capturedPieces: PieceType[]): number {
  const pieceValues: Record<PieceType, number> = {
    [PieceType.PAWN]: 1,
    [PieceType.KNIGHT]: 3,
    [PieceType.BISHOP]: 3,
    [PieceType.ROOK]: 5,
    [PieceType.QUEEN]: 9,
    [PieceType.KING]: 0
  };

  let totalValue = 0;
  capturedPieces.forEach(piece => {
    totalValue += pieceValues[piece];
  });
  return totalValue;
}