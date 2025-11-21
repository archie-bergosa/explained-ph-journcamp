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
              <div className="p-6">
                <div className="text-center mb-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-1 bg-gradient-to-r from-brand-teal via-brand-dark-teal to-brand-teal bg-clip-text text-transparent"
                  >
                    {isEventStarted ? 'Event is Live!' : 'Starting Soon!'}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm font-medium text-gray-600"
                  >
                    National Campus Press Summit 2025
                  </motion.p>
                </div>
                {isEventStarted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mb-4"
                  >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-4 py-3 rounded-xl mb-3 border border-green-200">
                      <Calendar className="w-5 h-5 animate-pulse" />
                      <span className="font-semibold text-sm">Summit is happening now!</span>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    {/* Event Details */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-4 mb-4 border border-slate-200"
                    >
                      <div className="flex items-center justify-center gap-6">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Calendar className="w-4 h-4 text-brand-teal" />
                          <div className="text-left">
                            <p className="text-[10px] text-gray-500 uppercase tracking-wide">Date</p>
                            <p className="font-bold text-xs">Nov 23, 2025</p>
                          </div>
                        </div>
                        <div className="w-px h-8 bg-slate-300"></div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock className="w-4 h-4 text-brand-teal" />
                          <div className="text-left">
                            <p className="text-[10px] text-gray-500 uppercase tracking-wide">Time</p>
                            <p className="font-bold text-xs">6:00 PM PHT</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Countdown */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mb-4"
                    >
                      <p className="text-center text-gray-600 text-xs font-medium mb-3">
                        Event starts in:
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <div className="flex flex-col items-center bg-gradient-to-br from-brand-teal to-brand-dark-teal text-white rounded-lg px-3 py-2 min-w-[3.5rem] shadow-lg">
                          <span className="text-2xl font-bold leading-none">{timeLeft.days}</span>
                          <span className="text-[9px] uppercase mt-1 opacity-90">Days</span>
                        </div>
                        <span className="text-xl font-bold text-gray-300">:</span>
                        <div className="flex flex-col items-center bg-gradient-to-br from-brand-teal to-brand-dark-teal text-white rounded-lg px-3 py-2 min-w-[3.5rem] shadow-lg">
                          <span className="text-2xl font-bold leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                          <span className="text-[9px] uppercase mt-1 opacity-90">Hours</span>
                        </div>
                        <span className="text-xl font-bold text-gray-300">:</span>
                        <div className="flex flex-col items-center bg-gradient-to-br from-brand-teal to-brand-dark-teal text-white rounded-lg px-3 py-2 min-w-[3.5rem] shadow-lg">
                          <span className="text-2xl font-bold leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
                          <span className="text-[9px] uppercase mt-1 opacity-90">Mins</span>
                        </div>
                        <span className="text-xl font-bold text-gray-300">:</span>
                        <div className="flex flex-col items-center bg-gradient-to-br from-brand-teal to-brand-dark-teal text-white rounded-lg px-3 py-2 min-w-[3.5rem] shadow-lg">
                          <span className="text-2xl font-bold leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
                          <span className="text-[9px] uppercase mt-1 opacity-90">Secs</span>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col gap-2"
                >
                  <Link
                    to="/guidelines"
                    onClick={closeModal}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-teal to-brand-dark-teal text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <FileText className="w-4 h-4" />
                    View Guidelines
                  </Link>
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
