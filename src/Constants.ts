import { Piece, PieceType, TeamType } from "./Types";

export const VERTICALAXIS = ["1", "2", "3", "4", "5", "6", "7", "8"];
// export const VERTICALAXIS = ["8", "7", "6", "5", "4", "3", "2", "1"];
export const HORIZONTALAXIS = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const initialBoardState: Piece[] = [
  {
    position: {
      x: 0,
      y: 7,
    },
    type: PieceType.ROOK,
    team: TeamType.OPPONENT,
  },
  {
    position: {
      x: 1,
      y: 7,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OPPONENT,
  },
  {
    position: {
      x: 2,
      y: 7,
    },
    type: PieceType.BISHOP,
    team: TeamType.OPPONENT,
  },
  {
    position: {
      x: 3,
      y: 7,
    },
    type: PieceType.QUEEN,
    team: TeamType.OPPONENT,
  },
  {
    position: {
      x: 4,
      y: 7,
    },
    type: PieceType.KING,
    team: TeamType.OPPONENT,
  },
  {
    position: {
      x: 5,
      y: 7,
    },
    type: PieceType.BISHOP,
    team: TeamType.OPPONENT,
  },
  {
    position: {
      x: 6,
      y: 7,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OPPONENT,
  },
  {
    position: {
      x: 7,
      y: 7,
    },
    type: PieceType.ROOK,
    team: TeamType.OPPONENT,
  },
  {
    position: {
      x: 0,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    position: {
      x: 1,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    position: {
      x: 2,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    position: {
      x: 3,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    position: {
      x: 4,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    position: {
      x: 5,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    position: {
      x: 6,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },
  {
    position: {
      x: 7,
      y: 6,
    },
    type: PieceType.PAWN,
    team: TeamType.OPPONENT,
  },

  {
    position: {
      x: 0,
      y: 0,
    },
    type: PieceType.ROOK,
    team: TeamType.OUR,
  },
  {
    position: {
      x: 1,
      y: 0,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OUR,
  },
  {
    position: {
      x: 2,
      y: 0,
    },
    type: PieceType.BISHOP,
    team: TeamType.OUR,
  },
  {
    position: {
      x: 3,
      y: 0,
    },
    type: PieceType.QUEEN,
    team: TeamType.OUR,
  },
  {
    position: {
      x: 4,
      y: 0,
    },
    type: PieceType.KING,
    team: TeamType.OUR,
  },
  {
    position: {
      x: 5,
      y: 0,
    },
    type: PieceType.BISHOP,
    team: TeamType.OUR,
  },
  {
    position: {
      x: 6,
      y: 0,
    },
    type: PieceType.KNIGHT,
    team: TeamType.OUR,
  },
  {
    position: {
      x: 7,
      y: 0,
    },
    type: PieceType.ROOK,
    team: TeamType.OUR,
  },
  {
    position: {
      x: 0,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    position: {
      x: 1,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    position: {
      x: 2,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    position: {
      x: 3,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    position: {
      x: 4,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    position: {
      x: 5,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  {
    position: {
      x: 6,
      y: 1,
    },
    type: PieceType.PAWN,
    team: TeamType.OUR,
  },
  // {
  //   position: {
  //     x: 7,
  //     y: 1,
  //   },
  //   type: PieceType.PAWN,
  //   team: TeamType.OUR,
  // },
];