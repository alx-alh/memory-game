import React, {useState} from 'react';
import AppProvider, {AppHookProvider} from './provider/appProvider';
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';
import './App.scss';

function App() {
  const [victory, setVictory] = useState(false);
  const [turns, setTurns] = useState(0);
  const [altTheme, setAltTheme] = useState(false);

  return (
    <div className={`App${altTheme ? ' alt-theme' : ''}`}>
      <AppHookProvider value={{setVictory, setTurns, setAltTheme}}>
        <AppProvider value={{victory, turns, altTheme}} >
          <Header />
          <CardGrid />
        </AppProvider>
      </AppHookProvider>
    </div>
  );
}

export default App;
