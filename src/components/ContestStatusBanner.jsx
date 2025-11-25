import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { useContestCountdown } from '@/hooks/useContestCountdown';

/**
 * Reusable Contest Status Banner Component
 * @param {string} startDate - Competition start date (YYYY-MM-DD format)
 * @param {string} endDate - Competition end date (YYYY-MM-DD format)
 * @param {string} categoryName - Name of the contest category
 */
const ContestStatusBanner = ({ startDate, endDate, categoryName }) => {
  const { timeLeft, status } = useContestCountdown(startDate, endDate);

  const getBannerConfig = () => {
    switch (status) {
      case 'before':
        return {
          bgColor: 'bg-gradient-to-r from-blue-600 to-blue-700',
          icon: <AlertCircle className="w-5 h-5" />,
          title: 'Contest Starting Soon',
          message: 'Competition starts in:',
        };
      case 'ongoing':
        return {
          bgColor: 'bg-gradient-to-r from-red-600 to-red-700',
          icon: <Clock className="w-5 h-5 animate-pulse" />,
          title: 'Contest Ongoing',
          message: 'Time Remaining:',
        };
      case 'ended':
        return {
          bgColor: 'bg-slate-600',
          icon: <CheckCircle className="w-5 h-5" />,
          title: 'Contest Concluded',
          message: 'The submission deadline has passed.',
        };
      default:
        return null;
    }
  };

  const config = getBannerConfig();
  if (!config) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`sticky top-0 z-40 ${config.bgColor} text-white py-3 px-4 shadow-lg`}
    >
      <div className="container mx-auto max-w-6xl">
        {status === 'ended' ? (
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              {config.icon}
              <p className="text-lg font-bold">{config.title}</p>
            </div>
            <p className="text-sm opacity-90">{config.message}</p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              {status === 'ongoing' && (
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              )}
              {config.icon}
              <span className="font-bold text-base md:text-lg">{config.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm md:text-base">{config.message}</span>
              <div className="flex items-center gap-1">
                <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded font-bold text-sm">
                  {String(timeLeft.hours).padStart(2, '0')}h
                </div>
                <span>:</span>
                <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded font-bold text-sm">
                  {String(timeLeft.minutes).padStart(2, '0')}m
                </div>
                <span>:</span>
                <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded font-bold text-sm">
                  {String(timeLeft.seconds).padStart(2, '0')}s
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ContestStatusBanner;
