import React from 'react';
import './Card.scss';

const Card = ({label, index, selectCard, isSelected, isMatched}) => {
  const flipCard = () => {
    // console.log(label)
    !isSelected && selectCard();
  }
  
  const handleCardClick = () => {
    flipCard();
  }

  const handleCardKeyDown = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      flipCard();
    }
  };

  return (
    <div onClick={handleCardClick} onKeyDown={handleCardKeyDown} className={`card${isSelected ? ' card--selected' : ''}${isMatched ? ' card--matched' : ''}`} aria-hidden={isMatched} role="button" tabIndex="0" aria-label={`card-${index + 1}`}>
      <div className="card__inner">
        <div className="card__back">&diams;</div>
        <div className="card__front"><span>{label}</span></div>
      </div>
    </div>
  )
}
export default Card;