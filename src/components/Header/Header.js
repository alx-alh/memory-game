import React, {useContext} from 'react';
import {AppContext} from '../../provider/appProvider';
import Toggle from '../Toggle/Toggle';
import './Header.scss';

const Header = () => {
  const {turns} = useContext(AppContext);

  return (
    <header>
      <h1>Memory Game</h1>
      <h3>Turns:{turns}</h3>
      <Toggle/>
    </header>
  )
}

export default Header;