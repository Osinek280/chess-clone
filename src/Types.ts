export enum PieceType {
  PAWN = 'pawn',
  BISHOP = 'bishop',
  KNIGHT = 'knight',
  ROOK = 'rook',
  QUEEN = 'queen',
  KING = 'king',
}

export interface Position {
  x: number;
  y: number;
}

export enum TeamType {
  OPPONENT,
  OUR,
}

export interface Piece {
  image: string;
  position: Position;
  type: PieceType;
  team: TeamType;
  enPassant?: boolean;
}

export interface TileProps {
  image?: string;
  number: number;
  highlight: boolean;
  isSelected: boolean;
  x: number;
  y: number;
}

export interface UserProps {
  username?: string;
  time?: number;
  capturedPieces?: PieceType[];
  isRunning?: boolean;
  advantage?: number;
  color?: string;
}

export interface User {
  username: string;
  time: number;
  capturedPieces: PieceType[];
}