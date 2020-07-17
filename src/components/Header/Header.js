import React, {useContext} from 'react';
import {AppContext} from '../../provider/appProvider';
import './Header.scss';

const Header = () => {
  const {victory, turns} = useContext(AppContext);

  return (
    <header>
      <h1>Memory Game</h1>
      <h3>Turns: {turns}</h3>
      <h2 className={`victoryMessage${!victory ? ' victoryMessage--hidden' : ''}`}>You Win!</h2>      
    </header>
  )
}

export default Header;