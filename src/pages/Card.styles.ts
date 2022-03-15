import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  perspective: 1000px;
  .front.flipped {
    z-index: 1;
    transform: rotateY(180deg);
  }
`;

type Props = {
  flipped: boolean;
  matched: boolean;
};

const sharedStyles = css`
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  backface-visibility: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  filter: grayscale(0);
`;

export const FrontImg = styled.img<Props>`
  ${sharedStyles}
  z-index: ${props => (props.flipped ? 20 : 1)};
  background: ${props => (props.flipped ? 'white' : '')};
  background: ${props => (props.matched && props.flipped ? 'transparent' : '')};
  opacity: ${props => (props.matched ? 0.5 : 1)};
  border: ${props => (props.matched ? 0 : 1)};
  box-shadow: ${props => (props.matched ? '0 0px 0px 0 rgba(0,0,0,0)' : '0 4px 8px 0 rgba(0,0,0,0.2)')};
  transform: ${props => (props.flipped ? 'rotate(0deg)' : 'rotateY(180deg)')};
`;

export const BackImg = styled.img<Props>`
  ${sharedStyles}
  z-index: ${props => (props.flipped ? 1 : 20)};
  background: ${props => (props.flipped ? '' : 'white')};
  transform: ${props => (props.flipped ? 'rotateY(180deg)' : 'rotate(360deg)')};
  position: absolute;
  top: 0px;
  left: 0px;
`;