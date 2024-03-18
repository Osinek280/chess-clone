import { Piece, Position } from "@/Types";
import { tileIsOccupied, tileIsOccupiedByOpponent } from "./GeneralRules";

export const getPossibleBishopMoves = (bishop: Piece, boardstate: Piece[]): Position[] => {
  const possibleMoves: Position[] = [];

  // Upper right movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: bishop.position.x + i, y: bishop.position.y + i};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, bishop.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Bottom right movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: bishop.position.x + i, y: bishop.position.y - i};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, bishop.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Bottom left movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: bishop.position.x - i, y: bishop.position.y - i};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, bishop.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Top left movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: bishop.position.x - i, y: bishop.position.y + i};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, bishop.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  return possibleMoves;
}