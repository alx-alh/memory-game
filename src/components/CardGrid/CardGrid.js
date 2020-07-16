import React, {useEffect, useState, useReducer, useContext} from 'react';
import {AppContext, AppHookContext} from '../../provider/appProvider';
import key from 'weak-key';
import setupCards from '../../data/data';
import cardReducer from '../../reducers/cardReducer';

import Card from '../Card/Card';
import './CardGrid.scss';

let totalCards = 4;

const initialState = {
  firstCard: undefined,
  secondCard: undefined,
  matchedCards: [],

}

const CardGrid = () => {
  const [state, dispatch] = useReducer(cardReducer, initialState);
  const [cardData, setCardData] = useState([]);
  // const [matchedCards, setMatchedCards] = useState([]);
  // const [firstCard, setFirstCard] = useState();
  // const [secondCard, setSecondCard] = useState();
  // const [victory, setVictory] = useState(false);
  const {turns} = useContext(AppContext);
  const {setVictory, setTurns} = useContext(AppHookContext);

  console.log(setVictory);

  const { matchedCards, firstCard, secondCard} = state;

  
  useEffect(()=>{
    const fetchCards = async () => {
      const data = await setupCards(totalCards);
      setCardData(data);
    }   
    fetchCards();
  },[]);

  useEffect(()=>{
    matchedCards.length === totalCards && setVictory(true);
  }, [matchedCards]);

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

  return (
    <main className="main">
      <div className="cardGrid">
        {cardData.map( (card,i) => (
          <Card
            {...card}
            index={i}
            key={key(card)}
            isMatched={matchedCards.includes(card)}
            isSelected={firstCard === card || secondCard === card}
            // isSelected={firstCard.includes(card)}
            selectCard={() => handleClick(card)  }
          />
        ))}
      </div>
    </main>
  )
}
export default CardGrid;