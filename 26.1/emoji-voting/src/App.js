import React, { useState } from 'react';
import EmojiCounter from './EmojiCounter';
import './index.css';

const App = () => {
  const initialEmojis = [
    { id: 1, emoji: '😀', votes: 0 },
    { id: 2, emoji: '😊', votes: 0 },
    { id: 3, emoji: '😎', votes: 0 },
    { id: 4, emoji: '🤩', votes: 0 },
    { id: 5, emoji: '😍', votes: 0 },
  ];

  const [emojiData, setEmojiData] = useState(initialEmojis);
  const [showResults, setShowResults] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleVote = (id) => {
    setEmojiData((prevData) =>
      prevData.map((e) => (e.id === id ? { ...e, votes: e.votes + 1 } : e))
    );
  };

  const handleShowResults = () => {
    const maxVotes = Math.max(...emojiData.map((e) => e.votes));
    const winnerEmoji = emojiData.find((e) => e.votes === maxVotes);
    setWinner(winnerEmoji);
    setShowResults(true);
  };

  const handleClearResults = () => {
    setEmojiData(initialEmojis);
    setShowResults(false);
    setWinner(null);
  };

  return (
    <div className="container text-center mt-5">
      <h1>Голосування за найкращий смайлик</h1>
      <div className="d-flex justify-content-center mt-4">
        {emojiData.map((e) => (
          <EmojiCounter
            key={e.id}
            emoji={e.emoji}
            votes={e.votes}
            onVote={() => handleVote(e.id)}
          />
        ))}
      </div>
      <button className="btn btn-success mt-4" onClick={handleShowResults}>
        Показати переможця
      </button>
      <button className="btn btn-danger mt-2" onClick={handleClearResults}>
        Очистити результати
      </button>
      {showResults && winner && (
        <div className="mt-4">
          <h3>Результати голосування:</h3>
          <p>Переможець:</p>
          <div style={{ fontSize: '2rem' }}>{winner.emoji}</div>
          <p>Кількість голосів: {winner.votes}</p>
        </div>
      )}
    </div>
  );
};

export default App;
