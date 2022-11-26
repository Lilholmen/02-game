import { useEffect, useState } from 'react';
import Board from './components/Board';
import Header from './components/Header';
import './App.css';

const CARDS_COUNT = 16;

function App() {
  const [cards, setCards] = useState([]);
  const [checked, setChecked] = useState([]);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);

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

  const markChecked = (id) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, isChecked: true } : card
      )
    );
  };

  const markGuessed = (value) => {
    setCards(
      cards.map((card) =>
        card.value === value ? { ...card, isGuessed: true } : card
      )
    );
  };

  const guessHandler = (id) => {
    markChecked(id);

    setChecked([...checked, cards.find((card) => card.id === id)]);
  };

  useEffect(() => initiateCards(), []);
  useEffect(() => {
    if (checked.length === 2) {
      if (checked[0].value === checked[1].value) {
        markGuessed(checked[0].value);

        setChecked([]);
        setCorrect(correct + 1);
      }
      setScore(score + 1);
    }
    if (checked.length === 3) {
      setCards(
        cards.map((card) =>
          card.id === checked[0].id || card.id === checked[1].id
            ? { ...card, isChecked: false }
            : card
        )
      );

      setChecked([checked[2]]);
    }
  }, [checked]);

  return (
    <div className='App'>
      <Header score={score} correct={correct} total={CARDS_COUNT / 2} />
      <Board cards={cards} guess={guessHandler} />
    </div>
  );
}

export default App;
