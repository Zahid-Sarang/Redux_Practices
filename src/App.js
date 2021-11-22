import React from 'react';
import './App.css'
import Counter from './features/counter/Counter';
import Coin from './features/coin/Coin';
import Them from './features/them/Them';

const App = () => {
  return (
    <div className="App">
      <Counter/>
      <Coin />
      <Them/>
    </div>
  )
}

export default App
