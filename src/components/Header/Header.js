import React, {useContext} from 'react';
import {AppContext} from '../../provider/appProvider';

const Header = () => {
  const {victory, turns} = useContext(AppContext);
  return (
    <header>
      <h1>Memory Game</h1>
      <h3>Turns: {Math.floor(turns)}</h3>
      {victory && <h2>You Win!</h2>}
    </header>
  )
}

export default Header;