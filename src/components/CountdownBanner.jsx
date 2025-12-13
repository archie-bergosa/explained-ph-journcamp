import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X, Trophy, Star, Heart } from "lucide-react";
import confetti from "canvas-confetti";

const CountdownBanner = () => {
  const navigate = useNavigate();
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
        colors: [
          "#0D9488",
          "#FB923C",
          "#0F766E",
          "#FCD34D",
          "#60A5FA",
          "#F472B6",
        ],
      });
    }, 300);

    const targetDate = new Date("November 29, 2025 23:59:59 GMT+0800");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsDeadlinePassed(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
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
            transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="w-full max-w-md relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-brand-teal/20 relative">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 z-10 p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 hover:scale-110 group"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4 text-gray-600 group-hover:text-gray-900" />
                </button>

                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-teal via-brand-orange to-brand-teal"></div>

                {/* Content */}
                <div className="p-5 pt-6 relative z-10">
                  <div className="text-center mb-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-dark-teal rounded-full shadow-lg mb-3"
                    >
                      <Trophy className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl font-bold text-gray-900 mb-1"
                    >
                      JournCamp+ 2025 Has Concluded! 🎉
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="text-sm text-gray-600"
                    >
                      Thank you for being part of this journey
                    </motion.p>
                  </div>

                  {/* Announcement Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-brand-teal/5 to-blue-50 rounded-xl p-4 mb-4 border border-brand-teal/20"
                  >
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <Heart className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <p className="leading-relaxed">
                          We are incredibly grateful to all the{" "}
                          <span className="font-semibold text-brand-teal">
                            campus journalists, advisers, and schools
                          </span>{" "}
                          who participated in this year's National Campus Press
                          Summit.
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-3 border border-brand-teal/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-brand-orange" />
                          <p className="font-bold text-brand-dark-teal text-sm">
                            JournCamp+ Wrapped is Ready!
                          </p>
                        </div>
                        <p className="text-xs text-gray-600 mb-3">
                          Relive your JournCamp+ 2025 experience with a summary
                          of our journey together.
                        </p>
                        <button
                          onClick={() => {
                            closeModal();
                            navigate("/wrapped");
                          }}
                          className="w-full px-4 py-2.5 bg-gradient-to-r from-brand-orange to-orange-500 text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
                        >
                          <Star className="w-4 h-4" />
                          View Wrapped
                        </button>
                      </div>

                      <p className="text-center text-sm font-bold text-brand-teal">
                        See you in JournCamp+ 2026! 🚀
                      </p>
                    </div>
                  </motion.div>

                  {/* Action Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center"
                  >
                    <button
                      onClick={closeModal}
                      className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium text-sm transition-all duration-200"
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
