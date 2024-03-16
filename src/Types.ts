export enum PieceType {
  PAWN = 'pawn',
  BISHOP = 'bishop',
  KNIGHT = 'knight',
  ROOK = 'rook',
  QUEEN = 'queen',
  KING = 'king',
}

export interface Piece {
  image: string;
  x: number;
  y: number;
  type: PieceType;
}

export interface Position {
  x: number;
  y: number;
}