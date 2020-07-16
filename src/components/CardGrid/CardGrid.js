import React, {useEffect, useState, useContext} from 'react';
import AppContext from '../../provider/appProvider';
import key from 'weak-key';
import setupCards from '../../data/data';

import Card from '../Card/Card';
import './CardGrid.scss';

const CardGrid = () => {
  const [cardData, setCardData] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState();
  const [victory, setVictory] = useState(false);

  
  useEffect(()=>{
    const fetchCards = async () => {
      const data = await setupCards(24);
      setCardData(data);
    }   
    fetchCards();
  },[]);

  useEffect(()=>{
    matchedCards.length === 24 && setVictory(true);
  }, [matchedCards]);

  const handleClick = (card) => {

    if(firstCard === card || secondCard !== undefined ) return;
    if(!firstCard.label){
      setFirstCard(card);
      
    } else if (firstCard.label === card.label) {
      setSecondCard(card);
      setTimeout(()=>{
        setMatchedCards([...matchedCards, firstCard, card]);
        setFirstCard({});
        setSecondCard();
      }, 1000);
    } else {
      setSecondCard(card);
      setTimeout(()=>{
        setFirstCard({});
        setSecondCard();
      }, 1000);      
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