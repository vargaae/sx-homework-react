import React, { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { CardInterface } from './../data';
import { Wrapper, FrontImg, BackImg } from './Card.styles';

type Props = {
  card: CardInterface;
  callback: (card: CardInterface) => void;
  turnedCard: boolean;
};

const Card: React.FC<Props> = ({ card, callback }) => {
  const handleClick = () => {
    if (card.turnable) callback(card);
  };

  return (
    <Wrapper onClick={handleClick}>
    <FrontImg turnedCard={card.turnedCard} src={card.cardFrontImage} alt='card-front' />
    <BackImg turnedCard={card.turnedCard} src={card.cardBackImage} alt='card-back' />
  </Wrapper>
  );
};

export default Card;
