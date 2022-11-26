import { useEffect, useState } from 'react';
import Board from './components/Board';
import Header from './components/Header';
import './App.css';

import levels from './data/levels';
import colors from './data/colors';

const STARTING_LEVEL = 4;

function App() {
  const [cards, setCards] = useState([]);
  const [checked, setChecked] = useState([]);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [level, setLevel] = useState({
    isPlaying: true,
    current: levels[STARTING_LEVEL],
  });

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

  const changeLevel = (transitionalLevel) => {
    setLevel({ ...level, current: levels[transitionalLevel] });
  };

  const restartLevel = () => {
    setLevel({ ...level });
  };

  useEffect(() => {
    const initiateCards = () => {
      const cardsArray = [];

      for (let i = 0; i < level.current.amount; i++) {
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

    initiateCards();
  }, [level]);

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

  useEffect(() => {
    if (correct === level.current.pairs) {
      console.log('WIN');
    }
  }, [correct]);

  return (
    <div className='App'>
      <Header
        score={score}
        correct={correct}
        total={level.current.pairs}
        change={changeLevel}
        restart={restartLevel}
      />
      <Board cards={cards} guess={guessHandler} />
    </div>
  );
}

export default App;
