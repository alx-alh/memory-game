import React, {useState} from 'react';
import AppProvider, {AppHookProvider} from './provider/appProvider';
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';
import './App.scss';

const initialState = {
  victory: false,
  turns: 0,
}


function App() {
  const [victory, setVictory] = useState(false);
  const [turns, setTurns] = useState(0);

  return (
    <div className="App">
      <AppHookProvider value={{setVictory, setTurns}}>
        <AppProvider value={{victory, turns}} >
          <Header />
          <CardGrid />
        </AppProvider>
      </AppHookProvider>
    </div>
  );
}

export default App;
