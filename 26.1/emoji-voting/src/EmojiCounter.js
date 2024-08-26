import React from 'react';

const EmojiCounter = ({ emoji, votes, onVote }) => {
  return (
    <div className="mx-3 text-center">
      <div style={{ fontSize: '2rem', cursor: 'pointer' }} onClick={onVote}>
        {emoji}
      </div>
      <p>{votes}</p>
    </div>
  );
};

export default EmojiCounter;
