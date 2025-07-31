import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const emojis = ['💖', '💘', '💝', '❤️‍🔥'];
const shuffledEmojis = [...emojis, ...emojis].sort(() => Math.random() - 0.5);

const Card = ({ emoji, isFlipped, onClick }) => (
  <div
    onClick={onClick}
    className={`w-16 h-16 flex items-center justify-center border-2 border-pink-400 rounded-lg cursor-pointer text-3xl shadow-md ${
      isFlipped ? 'bg-pink-100' : 'bg-rose-300'
    }`}
  >
    {isFlipped ? emoji : '❓'}
  </div>
);

export default function Game() {
  const [cards, setCards] = useState(shuffledEmojis);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first] === cards[second]) {
        setMatched([...matched, first, second]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  }, [flipped]);

  const handleClick = (index) => {
    if (flipped.length < 2 && !flipped.includes(index) && !matched.includes(index)) {
      setFlipped([...flipped, index]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-rose-100 flex flex-col items-center justify-center p-4">
      <motion.h1
        className="text-3xl font-bold mb-6 text-pink-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Match the Hearts ❤️‍🔥
      </motion.h1>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((emoji, idx) => (
          <Card
            key={idx}
            emoji={emoji}
            isFlipped={flipped.includes(idx) || matched.includes(idx)}
            onClick={() => handleClick(idx)}
          />
        ))}
      </div>
      {matched.length === cards.length && (
        <motion.p
          className="mt-6 text-green-600 text-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          You matched all hearts! 💘
        </motion.p>
      )}
    </div>
  );
}
