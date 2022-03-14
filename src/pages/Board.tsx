import React from "react";
import { Navigate } from "react-router-dom";
import { startCardsBoard, shuffleCards, CardInterface } from './../data';

const Board = () => {
  const [cards, setCards] = React.useState<CardInterface[]>(shuffleCards(startCardsBoard()));
  const [gameWon, setGameWon] = React.useState(false)
  const [matchedPairs, setMatchedPairs] = React.useState(0);
  const [turnedCard, setTurnedCard] = React.useState<undefined | CardInterface>(undefined);
  return ( <div className="board">
    {cards.map(card => (
    <div key={card.id}>{card.id} </div>
    ))}
    </div>
    );
};

export default Board;
