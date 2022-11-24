import { useEffect, useState } from 'react';
import Board from './components/Board';
import Info from './components/Info';
import './App.css';

const CARDS_COUNT = 16;

function App() {
  const [cards, setCards] = useState([]);

  const colors = [
    '#7F1D1D',
    '#365314',
    '#164E63',
    '#4C1D95',
    '#F87171',
    '#A3E635',
    '#22D3EE',
    '#A78BFA',
  ];

  const initiateCards = (countRequest = CARDS_COUNT) => {
    const cardsCount =
      countRequest % 2 === 0
        ? Math.abs(countRequest)
        : Math.abs(countRequest) + 1;

    const cardsArray = [];
    console.log(cardsCount);
    for (let i = 0; i < cardsCount; i++) {
      cardsArray.push({
        id: i + 1,
        value: Math.floor(i / 2),
        color: colors[Math.floor(i / 2)],
        isChecked: false,
        isGuessed: false,
      });
    }

    cardsArray.sort(() => Math.floor(Math.random() - 0.5));
    setCards(cardsArray);
  };

  const toggleCheckedHandler = (id) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, isChecked: !card.isChecked } : card
      )
    );
  };

  const markGuessedHandler = (value) => {
    setCards(
      setCards(
        cards.map((card) =>
          card.value === value ? { ...card, isGuessed: true } : card
        )
      )
    );
  };

  useEffect(() => initiateCards(), []);

  return (
    <div className="App">
      <Board
        cards={cards}
        toggleChecked={toggleCheckedHandler}
        markGuessed={markGuessedHandler}
      />
      <Info />
    </div>
  );
}

export default App;
