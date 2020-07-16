import React, {useReducer} from 'react';
import appReducer from './reducer/appReducer';
import AppProvider from './provider/appProvider';
import Header from './components/Header/Header';
import CardGrid from './components/CardGrid/CardGrid';
import './App.scss';

const initialState = {
  victory: false,
  turns: 0,
}


function App() {
  const state = useReducer(appReducer, initialState);
  return (
    <div className="App">
      <AppProvider value={state} >
        <Header />
        <CardGrid />
      </AppProvider>
    </div>
  );
}

export default App;
