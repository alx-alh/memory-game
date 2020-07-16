import React, {useContext} from 'react';
import setupCards from '../../data/data';
import {AppContext, AppHookContext} from '../../provider/appProvider';

const Header = () => {
  const {victory, turns} = useContext(AppContext);
  const {setCardData, setVictory} = useContext(AppHookContext);

  // const resetClick = async () => {
  //   setCardData([]);
  //   setVictory(false);
  //   let data = await setupCards(4);
  //   setCardData(data);

  // }

  return (
    <header>
      <h1>Memory Game</h1>
      <h3>Turns: {turns}</h3>
      {victory &&
        <>
          <h2>You Win!</h2>
        </>
      }
      
    </header>
  )
}

export default Header;