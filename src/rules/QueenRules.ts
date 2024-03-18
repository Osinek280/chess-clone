import { Piece, Position } from "@/Types";
import { tileIsOccupied, tileIsOccupiedByOpponent } from "./GeneralRules";

export const getPossibleQueenMoves = (queen: Piece, boardstate: Piece[]): Position[] => {
  const possibleMoves: Position[] = [];

  // Top movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: queen.position.x, y: queen.position.y + i};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, queen.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Bottom movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: queen.position.x, y: queen.position.y - i};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, queen.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Left movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: queen.position.x - i, y: queen.position.y};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, queen.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Right movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: queen.position.x + i, y: queen.position.y};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, queen.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Upper right movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: queen.position.x + i, y: queen.position.y + i};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, queen.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Bottom right movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: queen.position.x + i, y: queen.position.y - i};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, queen.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Bottom left movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: queen.position.x - i, y: queen.position.y - i};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, queen.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  // Top left movement
  for(let i = 1; i < 8; i++) {
    const destination: Position = {x: queen.position.x - i, y: queen.position.y + i};

    if(!tileIsOccupied(destination, boardstate)) {
      possibleMoves.push(destination);
    } else if(tileIsOccupiedByOpponent(destination, boardstate, queen.team)) {
      possibleMoves.push(destination);
      break;
    } else {
      break;
    }
  }

  return possibleMoves;
}