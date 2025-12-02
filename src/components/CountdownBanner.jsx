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
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal on component mount (home page visit)
    setShowModal(true);

    const targetDate = new Date('November 29, 2025 23:59:59 GMT+0800');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsDeadlinePassed(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // Calculate total hours (including days) for display
      const totalHours = Math.floor(difference / (1000 * 60 * 60));

      setTimeLeft({ days, hours: totalHours, minutes, seconds });
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
                    className="text-lg font-bold mb-1 bg-gradient-to-r from-brand-teal via-brand-dark-teal to-brand-teal bg-clip-text text-transparent"
                  >
                    Contest Now Ongoing! 🎯
                  </motion.h2>
                </div>

                {/* Countdown Timer */}
                {!isDeadlinePassed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mb-3"
                  >
                    <p className="text-center text-gray-700 text-xs font-semibold mb-2">
                      Submission deadline in:
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex flex-col items-center bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg px-3 py-2 min-w-[3rem] shadow-lg">
                        <span className="text-xl font-bold leading-none">{timeLeft.hours}</span>
                        <span className="text-[9px] uppercase mt-1 opacity-90">Hours</span>
                      </div>
                      <span className="text-lg font-bold text-gray-400">:</span>
                      <div className="flex flex-col items-center bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg px-3 py-2 min-w-[3rem] shadow-lg">
                        <span className="text-xl font-bold leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
                        <span className="text-[9px] uppercase mt-1 opacity-90">Mins</span>
                      </div>
                      <span className="text-lg font-bold text-gray-400">:</span>
                      <div className="flex flex-col items-center bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg px-3 py-2 min-w-[3rem] shadow-lg">
                        <span className="text-xl font-bold leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
                        <span className="text-[9px] uppercase mt-1 opacity-90">Secs</span>
                      </div>
                    </div>
                    <p className="text-center text-red-600 text-xs font-bold mt-2">
                      DEADLINE: November 29, 2025 at 11:59 PM PHT
                    </p>
                  </motion.div>
                )}

                {/* Announcement Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-r from-brand-teal/10 to-blue-50 rounded-xl p-4 mb-3 border-2 border-brand-teal/30"
                >
                  <div className="text-sm text-gray-800 space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-teal text-white flex items-center justify-center text-xs font-bold mt-0.5">
                        ✓
                      </div>
                      <div>
                        <p className="font-bold text-brand-dark-teal mb-1">Radio Broadcasting</p>
                        <p className="text-xs leading-relaxed text-gray-700">
                          The contest is <span className="font-bold text-brand-teal">currently ongoing</span>! Please check your registered email for:
                        </p>
                      </div>
                    </div>
                    <ul className="ml-8 space-y-1 text-xs text-gray-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-brand-teal rounded-full"></span>
                        Activity sheet
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-brand-teal rounded-full"></span>
                        Fact sheet
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-brand-teal rounded-full"></span>
                        All other necessary information
                      </li>
                    </ul>
                    <div className="pt-2 border-t border-brand-teal/20">
                      <Link 
                        to="/guidelines/radio-broadcasting" 
                        onClick={closeModal}
                        className="inline-flex items-center gap-1 text-brand-teal hover:text-brand-dark-teal font-bold transition-colors text-sm"
                      >
                        View Contest Guidelines →
                      </Link>
                    </div>
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
