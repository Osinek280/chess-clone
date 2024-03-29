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
  position: Position;
  type: PieceType;
  team: TeamType;
  enPassant?: boolean;
}

export interface Move {
  piece: Piece; 
  from: Position; 
  to: Position;
}

export interface TileProps {
  image?: string;
  number: number;
  highlight: boolean;
  isSelected: boolean;
  x: number;
  y: number;
  verticalAxis: string[]
  horizontalAxis: string[]
  team: 0 | 1
}

export interface UserProps {
  username: string;
  time: number;
  capturedPieces: PieceType[];
  isRunning: boolean;
  advantage: number;
  color: string;
}

export interface User {
  username: string;
  time: number;
  capturedPieces: PieceType[];
}

export type ParamsProps = {
  params?: any;
  searchParams?: Record<string, string> | null | undefined;
};

export interface Game {
  color: string,
  inc: number,
  time: number,
  turn: 0,
  pieces: Piece[]
  ourPieces: []
  opponentPieces: []
}