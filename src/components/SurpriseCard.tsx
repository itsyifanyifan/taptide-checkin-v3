import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';
import ReactCanvasConfetti from 'react-canvas-confetti';

interface SurpriseCardProps {
  title: string;
  description: string;
  isRevealed: boolean;
  onReveal: () => void;
  onClaim: () => void;
  revealedAt?: Date;
}

const SurpriseCard: React.FC<SurpriseCardProps> = ({
  title,
  description,
  isRevealed,
  onReveal,
  onClaim,
  revealedAt,
}) => {
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [isExpired, setIsExpired] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (revealedAt) {
      const updateCountdown = () => {
        const now = new Date();
        const expirationTime = new Date(revealedAt.getTime() + 24 * 60 * 60 * 1000); // 24 hours
        const timeDiff = expirationTime.getTime() - now.getTime();

        if (timeDiff <= 0) {
          setIsExpired(true);
          setTimeLeft('Expired');
          return;
        }

        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s left`);
      };

      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    }
  }, [revealedAt]);

  const handleReveal = () => {
    setShowConfetti(true);
    onReveal();
    setTimeout(() => setShowConfetti(false), 2000);
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white rounded-2xl shadow-lg overflow-hidden min-h-[200px]"
      >
        <AnimatePresence>
          {!isRevealed && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 z-10"
            >
              <div className="h-full flex flex-col items-center justify-center p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Cafe Luna's Brooklyn Favorites</h3>
                <button
                  onClick={handleReveal}
                  className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white font-medium transition-colors"
                >
                  Scratch to Reveal
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isRevealed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="font-mono">{timeLeft}</span>
                </div>
                <button
                  onClick={onClaim}
                  disabled={isExpired}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    isExpired
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  {isExpired ? 'Expired' : 'Claim Offer'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {showConfetti && (
        <ReactCanvasConfetti
          fire={true}
          particleCount={100}
          spread={70}
          origin={{ y: 0.6 }}
          style={{
            position: 'fixed',
            pointerEvents: 'none',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 999,
          }}
        />
      )}
    </div>
  );
};

export default SurpriseCard; 