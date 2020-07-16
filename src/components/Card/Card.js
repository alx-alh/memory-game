import React from 'react';
import './Card.scss';

const Card = ({label, index, selectCard, isSelected, isMatched}) => {
  const handleClick = () => {
    // console.log(label)
    selectCard();
  }
  return (
    <div className={`card${isSelected ? ' selected' : ''}${isMatched ? ' matched' : ''}`} onClick={handleClick} role="button" tabIndex="0" aria-label={`card-${index + 1}`}>
      <div className="card__back"></div>
      <div className="card__front"><span>{label}</span></div>
    </div>
  )
}
export default Card;