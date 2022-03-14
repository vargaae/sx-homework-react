import card1 from './images/cards/angular.png';
import card2 from './images/cards/d3.png';
import card3 from './images/cards/jenkins.png';
import card4 from './images/cards/postcss.png';
import card5 from './images/cards/react.png';
import card6 from './images/cards/redux.png';
import card7 from './images/cards/sass.png';
import card8 from './images/cards/splendex.png';
import card9 from './images/cards/ts.png';
import card10 from './images/cards/webpack.png';
import cardBack from './images/cards/white.png';

export type CardInterface = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

const cardsArray: string[] = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];