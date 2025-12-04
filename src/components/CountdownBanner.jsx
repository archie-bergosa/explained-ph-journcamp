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
                <div className="text-center mb-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-teal to-brand-dark-teal rounded-full mb-3 shadow-lg"
                  >
                    <Trophy className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold mb-2 bg-gradient-to-r from-brand-teal via-brand-dark-teal to-brand-teal bg-clip-text text-transparent"
                  >
                    Congratulations! 🎉
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-sm text-gray-600"
                  >
                    All Competitions Have Concluded
                  </motion.p>
                </div>

                {/* Announcement Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-r from-brand-teal/10 to-blue-50 rounded-xl p-5 mb-4 border-2 border-brand-teal/30"
                >
                  <div className="text-sm text-gray-800 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-brand-teal to-brand-dark-teal text-white flex items-center justify-center text-xs font-bold mt-0.5 shadow-md">
                        ✓
                      </div>
                      <div>
                        <p className="text-sm leading-relaxed text-gray-700 mb-3">
                          All competitions have now <span className="font-bold text-brand-dark-teal">ended</span> and are currently undergoing the <span className="font-bold text-brand-teal">screening and judging process</span>.
                        </p>
                        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-brand-teal/20">
                          <p className="font-bold text-brand-dark-teal mb-1 text-sm">Winners Announcement</p>
                          <p className="text-xs leading-relaxed text-gray-700">
                            Winners will be announced at the <span className="font-semibold text-brand-teal">National Campus Press Summit Closing Ceremony</span> online via live stream at the <span className="font-semibold">JournCamp+ Facebook page</span>.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center pt-3 border-t border-brand-teal/20">
                      <p className="text-base font-bold text-brand-orange">
                        Good luck to all participants! 🍀
                      </p>
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
