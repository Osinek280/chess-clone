import { Piece, Position } from "@/Types";
import { tileIsOccupied, tileIsOccupiedByOpponent } from "./GeneralRules";

export const getPossibleRookMoves = (rook: Piece, boardstate: Piece[]): Position[] => {
  const possibleMoves: Position[] = [];

  // Top movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: rook.position.x, y: rook.position.y + i};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, rook.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Bottom movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: rook.position.x, y: rook.position.y - i};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, rook.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Left movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: rook.position.x - i, y: rook.position.y};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, rook.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Right movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: rook.position.x + i, y: rook.position.y};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, rook.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  return possibleMoves;
}