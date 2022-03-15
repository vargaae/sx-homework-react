import React from 'react';
import { CardType } from './../data';
import { Wrapper, FrontImg, BackImg } from './Card.styles';

type Props = {
  card: CardType;
  callback: (card: CardType) => void;
};

const Card: React.FC<Props> = ({ card, callback }) => {
  const handleClick = () => {
    if (card.clickable) callback(card);
  };

  return (
    <Wrapper onClick={handleClick}>
      <FrontImg flipped={card.flipped} matched={card.matched} src={card.frontImage} alt='card-front' />
      <BackImg flipped={card.flipped} matched={card.matched} src={card.backImage} alt='card-back' />
    </Wrapper>
  );
};

export default Card;