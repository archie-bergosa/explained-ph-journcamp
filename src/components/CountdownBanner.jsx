import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, FileText, X, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isEventStarted, setIsEventStarted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal on component mount (home page visit)
    setShowModal(true);

    const targetDate = new Date('November 23, 2025 18:00:00 GMT+0800');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsEventStarted(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <AnimatePresence>
      {showModal && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="w-full max-w-md">
              <div className="bg-gradient-to-br from-white via-slate-50 to-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 z-10 p-1.5 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>

              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-orange to-brand-teal"></div>

              {/* Content */}
              <div className="p-5">
                <div className="text-center mb-3">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base font-bold mb-1 bg-gradient-to-r from-brand-teal via-brand-dark-teal to-brand-teal bg-clip-text text-transparent"
                  >
                    Day 1 Masterclass Links Sent!
                  </motion.h2>
                </div>

                {/* Announcement Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-3 mb-3 border border-slate-200"
                >
                  <div className="text-xs text-gray-700 space-y-2">
                    <p className="leading-relaxed">
                      <strong>Check your emails</strong> for column and feature writing sessions with <strong>Kirsten Flores</strong> and <strong>Gianela Zapata</strong>.
                    </p>
                    <a 
                      href="https://journcamp.explained.ph" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-brand-teal hover:text-brand-dark-teal font-semibold transition-colors text-xs"
                    >
                      View all guidelines →
                    </a>
                  </div>
                </motion.div>

                {/* Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    onClick={closeModal}
                    className="px-4 py-2.5 border-2 border-slate-300 text-gray-700 rounded-lg font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
                  >
                    Close
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CountdownBanner;
