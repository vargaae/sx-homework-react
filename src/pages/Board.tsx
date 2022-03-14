import React from "react";
import { Navigate } from "react-router-dom";
import { startCardsBoard } from './../data';

const Board = () => {
  console.log(startCardsBoard())
  return <div className="board">GAMEBOARD</div>;
};

export default Board;
