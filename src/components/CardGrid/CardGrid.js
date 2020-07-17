import React, {useEffect, useState, useReducer, useContext} from 'react';
import {AppContext, AppHookContext} from '../../provider/appProvider';
import key from 'weak-key';
import setupCards from '../../data/data';
import cardReducer from '../../reducers/cardReducer';

import Card from '../Card/Card';
import './CardGrid.scss';

let totalCards = 24;

const CardGrid = () => {
  const initialState = {
    firstCard: undefined,
    secondCard: undefined,
    matchedCards: [],
  
  }
  
  const {turns, victory} = useContext(AppContext);
  const {setVictory, setTurns} = useContext(AppHookContext);
  const [state, dispatch] = useReducer(cardReducer, initialState);
  const { matchedCards, firstCard, secondCard} = state;
  const [cardData, setCardData] = useState([]);
  
  useEffect(()=>{
    const fetchCards = async () => {
      const data = await setupCards(totalCards);
      setCardData(data);
    }   
    fetchCards();
  },[]);

  useEffect(()=>{
    if(matchedCards.length === totalCards && !victory) {
      setVictory(true)
    };

  }, [matchedCards, victory, setVictory]);

  const handleClick = (card) => {
    if(firstCard === card || secondCard !== undefined ) return;
    if(firstCard === undefined){
      dispatch({type:'setFirstCard', payload: card})
    } else if (firstCard.label === card.label) {
      setTurns(turns + 1);
      dispatch({type:'setSecondCard', payload: card})
      setTimeout(()=>{
        dispatch({type:'matchSelected'})
      }, 500);
    } else {
      setTurns(turns + 1);
      dispatch({type:'setSecondCard', payload: card})
      setTimeout(()=>{
        dispatch({type:'resetSelection'})
      }, 500);
    }
  }

  const resetClick = async () => {
    dispatch({type: 'resetMatches'});
    setCardData([]);
    setVictory(false);
    setTurns(0);
    let data = await setupCards(totalCards);
    setCardData(data);
  }

  return (
    <main className="main">
      <div className="resetContainer">
        {victory &&    <button className={`btn${victory? ' btn--hidden' : ''}`} disabled={!victory} onClick={() => resetClick()}>Play Again</button>}
      </div>
      <div className="cardGrid">
        {cardData.map( (card,i) => (
          <Card
            {...card}
            index={i}
            key={key(card)}
            isMatched={matchedCards.includes(card)}
            isSelected={firstCard === card || secondCard === card}
            selectCard={() => handleClick(card)}
          />
        ))}
      </div>
    </main>
  )
}
export default CardGrid;