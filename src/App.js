import { useState } from 'react';
import Board from './components/Board';
import Info from './components/Info';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);

  return (
    <div className="App">
      <Board cards={cards} />
      <Info />
    </div>
  );
}

export default App;
