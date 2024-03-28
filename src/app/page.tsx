"use client"
import styles from "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCrown } from '@fortawesome/free-solid-svg-icons';
import Chessboard from "@/components/chessboard/chessboard";
import { HORIZONTALAXIS, initialBoardState, VERTICALAXIS} from "@/Constants";
import { useState } from "react";
import { samePosition } from "@/rules/GeneralRules";
import { Piece, ParamsProps } from "@/Types";
import Tile from "@/components/tile/tile";
import TileStyles from "@/components/tile/title.module.css"
import chessStyles from "@/components/chessboard/chessboard.module.css"
import MainSelector from "@/components/mainSelector/mainSelector";
import Image from "next/image";
import CreateGame from "@/components/createGame/createGame";


export default function Home({ params, searchParams }: ParamsProps) {
  const partyCode = "sfgfdj";

  const [pieces, setPieces] = useState<Piece[]>(initialBoardState);
  const [selectedOption, setSelectedOption] = useState(1);


  const isComputerModal = searchParams?.["create-computer-game"];
  const isOnlineModal = searchParams?.["create-online-game"];
  const isStationaryModal = searchParams?.["create-stationary-game"];

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(parseInt(event.target.value));
  };

  const colors = [
    'white',
    'random',
    'black'
  ];

  return (
    <>
      <div className={styles["container"]}>
        {isComputerModal || isOnlineModal || isStationaryModal ? (
          <CreateGame mode={isComputerModal ? 'computer' : (isOnlineModal ? 'online' : 'stationary')} />
        ) : null}
        <div>
          <div className={styles["con"]}>
            <div className={chessStyles.chessboard}>
              {VERTICALAXIS.map((number, j) => (
                HORIZONTALAXIS.map((letter, i) => {
                  const number = j + i + 2;
                  const coordinates = `${HORIZONTALAXIS[i]}${VERTICALAXIS[j]}`;

                  const piece = pieces.find(
                    (p) => samePosition(p.position, { x: i, y: j })
                  );

                  const image = piece
                    ? `/${piece?.type}_${piece?.team === 0 ? "b" : "w"}.png`
                    : undefined;

                  return (
                    <div key={`${i}-${j}`}>
                      <div
                        className={`${TileStyles[`${number && number % 2 === 0 ? 'black' : 'white'}-tile`]} `}
                        onClick={() => {
                          console.log(j)
                        }}
                      >
                        {image && 
                          <div 
                            style={{backgroundImage: `url(${image})`}} 
                            className={`${TileStyles["chess-piece"]}`} 
                            id="chess-piece"
                          ></div>
                        }
                      </div>
                    </div>
                  );
                })
              ))}
            </div>
            <MainSelector/>
          </div>
        </div>
      </div>
    </>
  );
}
