import './App.css';
import { useState } from 'react';

function App(){

  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {
    setCount(count + multiplier);
  }

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  };

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  };

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  };

  return (
    <div className="App">
        <div className="header">
           
            <h1>Samosa Selector</h1>
              <h2>Count:{count}</h2>
              <img className='samosa' src="data:image/jpeg;base64,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"alt="Samosa" onClick={updateCount}/>

        </div>  
        <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
      </div>  
    </div>
  )
}

export default App