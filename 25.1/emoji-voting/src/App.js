import React, { useState, useEffect } from 'react';

const emojis = [
  { id: 1, emoji: "😀", votes: 0 },
  { id: 2, emoji: "😊", votes: 0 },
  { id: 3, emoji: "😎", votes: 0 },
  { id: 4, emoji: "🤩", votes: 0 },
  { id: 5, emoji: "😍", votes: 0 },
];

function App() {

  const [emojiData, setEmojiData] = useState(() => {
    const storedData = localStorage.getItem('emojiVotes');
    return storedData ? JSON.parse(storedData) : emojis;
  });

  const [showResults, setShowResults] = useState(false);
  const [winner, setWinner] = useState(null);


  useEffect(() => {
    localStorage.setItem('emojiVotes', JSON.stringify(emojiData));
  }, [emojiData]);

  const handleVote = (id) => {
    setEmojiData(prevData => prevData.map(e => e.id === id ? { ...e, votes: e.votes + 1 } : e));
  };

  const handleShowResults = () => {
    const maxVotes = Math.max(...emojiData.map(e => e.votes));
    const winnerEmoji = emojiData.find(e => e.votes === maxVotes);
    setWinner(winnerEmoji);
    setShowResults(true);
  };

  const handleClearResults = () => {
    setEmojiData(emojis);  
    localStorage.removeItem('emojiVotes');
    setShowResults(false);
    setWinner(null);
  };

  return (
    <div className="container text-center mt-5">
      <h1>Голосування за найкращий смайлик</h1>
      <div className="d-flex justify-content-center mt-4">
        {emojiData.map(e => (
          <div key={e.id} className="mx-3">
            <div style={{ fontSize: "2rem", cursor: "pointer" }} onClick={() => handleVote(e.id)}>
              {e.emoji}
            </div>
            <p>{e.votes}</p>
          </div>
        ))}
      </div>
      <button className="btn btn-success mt-4" onClick={handleShowResults}>Результат голосування</button>
      <button className="btn btn-danger mt-4 ml-2" onClick={handleClearResults}>Очистити </button>

      {showResults && winner && (
        <div className="mt-5">
          <h2>Результати голосування:</h2>
          <p>Переможець:</p>
          <div style={{ fontSize: "2rem" }}>{winner.emoji}</div>
          <p>Кількість голосів: {winner.votes}</p>
        </div>
      )}
    </div>
  );
}

export default App;
