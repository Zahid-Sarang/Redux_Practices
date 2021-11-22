import React from 'react';
import './App.css'
import Counter from './features/counter/Counter';
import Coin from './features/coin/Coin';

const App = () => {
  return (
    <div className="App">
      <Counter/>
      <Coin />
    </div>
  )
}

export default App
