import React, {useEffect, useState} from 'react';
import key from 'weak-key';
import setupCards from '../../data/data';

import Card from '../Card/Card';
import './CardGrid.scss';

const CardGrid = () => {
  const [cardData, setCardData] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});

  useEffect(()=>{
    const fetchCards = async () => {
      let totalCards = 24;
      const data = await setupCards(totalCards);
      setCardData(data);
    }   
    fetchCards();
  },[]);

  const handleClick = (card) => {
    console.log(!firstCard.label);
    if(!firstCard.label){
      setFirstCard(card);
      
    } else if(firstCard.label === card.label) {
      setMatchedCards([...matchedCards, firstCard, card]);
      setFirstCard({});
      // firstCard.matched = true;
      // card.matched = true;
    }
    console.log(card.label);
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
            isSelected={firstCard === card}
            selectCard={() => handleClick(card)  }
          />
        ))}
      </div>
    </main>
  )
}
export default CardGrid;