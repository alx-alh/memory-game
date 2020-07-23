import React, {useContext} from 'react';
import {AppContext} from '../../provider/appProvider';
import imageMap from '../../data/imageMap';
import PropTypes from 'prop-types';
import './Card.scss';
import cardBackSvg from '../../assets/svgs/spade.svg'

const Card = ({label, img, shift, index, selectCard, isSelected, isMatched}) => {
  const {altTheme} = useContext(AppContext);
  const flipCard = () => {
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
        <div className="card__back">
          {!altTheme ? <img src={cardBackSvg} alt='card back graphic'/> : <span>&diams;</span> }
        </div>
        <div className="card__front">
          {!altTheme ? <img draggable='false' style={{filter: `hue-rotate(${shift}deg)`}} src={imageMap[img]} alt='card inside graphic'/> : <span>{label}</span> }
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  label: PropTypes.number.isRequired,
  img: PropTypes.number.isRequired,
  shift: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  selectCard: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isMatched: PropTypes.bool.isRequired,
}
export default Card;