import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

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

    // Trigger confetti when modal opens
    const confettiTimer = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0D9488', '#FB923C', '#0F766E', '#FCD34D', '#60A5FA', '#F472B6']
      });
    }, 300);

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
    const countdownTimer = setInterval(updateCountdown, 1000);

    return () => {
      clearTimeout(confettiTimer);
      clearInterval(countdownTimer);
    };
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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.6, bounce: 0.4 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="w-full max-w-lg relative">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-brand-teal/20 relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:rotate-90 group"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
              </button>

              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-teal via-brand-orange to-brand-teal"></div>

              {/* Content */}
              <div className="p-8 relative z-10">
                <div className="text-center mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 0.2, 
                      type: 'spring', 
                      stiffness: 200,
                      damping: 15 
                    }}
                    className="relative inline-block mb-4"
                  >
                    <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-teal via-brand-dark-teal to-teal-700 rounded-full shadow-2xl">
                      <Trophy className="w-10 h-10 text-white relative z-10" />
                    </div>
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-brand-teal via-brand-orange to-brand-dark-teal bg-clip-text text-transparent leading-tight"
                  >
                    Congratulations! 🎉
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-base font-semibold text-gray-700"
                  >
                    All Competitions Have Concluded
                  </motion.p>
                </div>
                {/* Announcement Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-white via-brand-teal/5 to-blue-50 rounded-2xl p-6 mb-6 border-2 border-brand-teal/30 shadow-lg relative overflow-hidden"
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-orange/5 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="text-sm text-gray-800 space-y-4 relative z-10">
                    <div className="flex items-start gap-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                        className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-brand-teal to-brand-dark-teal text-white flex items-center justify-center text-base font-bold shadow-lg"
                      >
                        ✓
                      </motion.div>
                      <div className="flex-1">
                        <motion.p
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.55 }}
                          className="text-base leading-relaxed text-gray-800 mb-4"
                        >
                          All competitions have now <span className="font-bold text-brand-dark-teal">ended</span> and are currently undergoing the <span className="font-bold text-brand-teal">screening and judging process</span>.
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="bg-white rounded-xl p-4 border-2 border-brand-teal/20 shadow-md"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="w-5 h-5 text-brand-orange" />
                            <p className="font-bold text-brand-dark-teal text-base">Winners Announcement</p>
                          </div>
                          <p className="text-sm leading-relaxed text-gray-700">
                            Winners will be announced at the <span className="font-semibold text-brand-teal">National Campus Press Summit Closing Ceremony</span> online via live stream at the <span className="font-semibold text-brand-orange">JournCamp+ Facebook page</span>.
                          </p>
                        </motion.div>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.65 }}
                      className="text-center pt-4 border-t-2 border-brand-teal/20"
                    >
                      <p className="text-lg font-extrabold bg-gradient-to-r from-brand-orange via-brand-teal to-brand-dark-teal bg-clip-text text-transparent">
                        Good luck to all participants! 🍀
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex justify-center"
                >
                  <button
                    onClick={closeModal}
                    className="group relative px-8 py-3 bg-gradient-to-r from-brand-teal to-brand-dark-teal text-white rounded-xl font-bold text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Got it!
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ✨
                      </motion.span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-brand-dark-teal to-brand-teal"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
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
