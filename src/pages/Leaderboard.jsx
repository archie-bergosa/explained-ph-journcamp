import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { useLeaderboard } from '@/contexts/LeaderboardContext';
import { 
  Trophy,
  Medal,
  Award,
  MapPin,
  Crown,
  TrendingUp,
  Filter
} from 'lucide-react';

const Leaderboard = () => {
  const { getSortedData, getTotalMedals } = useLeaderboard();
  const [selectedLevel, setSelectedLevel] = useState('all');

  const sortedData = getSortedData();
  const totalMedals = getTotalMedals();

  const getRankIcon = (index) => {
    if (index === 0) return <Crown className="w-6 h-6 text-yellow-500" />;
    if (index === 1) return <Medal className="w-6 h-6 text-gray-400" />;
    if (index === 2) return <Medal className="w-6 h-6 text-amber-700" />;
    return null;
  };

  const getRankBadge = (index) => {
    if (index === 0) return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
    if (index === 1) return "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800";
    if (index === 2) return "bg-gradient-to-r from-amber-600 to-amber-800 text-white";
    return "bg-slate-100 text-slate-700";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-600"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 0.6)}
            initial="initial"
            animate="animate"
            className="text-center text-white"
          >
            <Trophy className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Regional Medal Tally
            </h1>
            <div className="h-1 w-24 bg-white mx-auto mb-4"></div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              JournCamp+: National Campus Press Summit 2025
            </p>
            <p className="text-lg mt-2 opacity-90">
              Track medal counts across all Philippine regions
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Full Leaderboard Table */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.5, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <Award className="w-14 h-14 mx-auto mb-4 text-brand-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Complete Regional Standings
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          {/* Responsive Table - All Screen Sizes */}
          <div className="shadow-lg rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-brand-teal to-brand-dark-teal text-white">
                  <th className="px-2 sm:px-3 md:px-4 lg:px-6 py-3 md:py-4 text-left text-xs sm:text-sm font-bold uppercase">Rank</th>
                  <th className="px-2 sm:px-3 md:px-4 lg:px-6 py-3 md:py-4 text-left text-xs sm:text-sm font-bold uppercase">Region</th>
                  <th className="px-2 sm:px-3 md:px-4 lg:px-6 py-3 md:py-4 text-center text-xs sm:text-sm font-bold uppercase">
                    <div className="flex flex-col items-center justify-center gap-0.5 sm:flex-row sm:gap-2">
                      <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden xs:inline">Gold</span>
                      <span className="xs:hidden text-[10px]">G</span>
                    </div>
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 lg:px-6 py-3 md:py-4 text-center text-xs sm:text-sm font-bold uppercase">
                    <div className="flex flex-col items-center justify-center gap-0.5 sm:flex-row sm:gap-2">
                      <Medal className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden xs:inline">Silver</span>
                      <span className="xs:hidden text-[10px]">S</span>
                    </div>
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 lg:px-6 py-3 md:py-4 text-center text-xs sm:text-sm font-bold uppercase">
                    <div className="flex flex-col items-center justify-center gap-0.5 sm:flex-row sm:gap-2">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden xs:inline">Bronze</span>
                      <span className="xs:hidden text-[10px]">B</span>
                    </div>
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 lg:px-6 py-3 md:py-4 text-center text-xs sm:text-sm font-bold uppercase">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {sortedData.map((region, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                    className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${
                      index < 3 ? 'bg-gradient-to-r from-amber-50/30 to-yellow-50/30' : ''
                    }`}
                  >
                    <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className={`text-sm sm:text-base md:text-lg font-bold ${
                          index === 0 ? 'text-yellow-500' :
                          index === 1 ? 'text-gray-400' :
                          index === 2 ? 'text-amber-700' :
                          'text-gray-600'
                        }`}>
                          {index + 1}
                        </span>
                        <span className="hidden md:inline">{getRankIcon(index)}</span>
                      </div>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4">
                      <div className="flex items-start gap-1 sm:gap-2">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                        <span className="font-semibold text-gray-800 text-[10px] xs:text-xs sm:text-sm md:text-base leading-tight">{region.region}</span>
                      </div>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md sm:rounded-lg bg-yellow-100 text-yellow-700 font-bold text-sm sm:text-base md:text-lg">
                        {region.gold}
                      </span>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md sm:rounded-lg bg-gray-100 text-gray-700 font-bold text-sm sm:text-base md:text-lg">
                        {region.silver}
                      </span>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md sm:rounded-lg bg-amber-100 text-amber-700 font-bold text-sm sm:text-base md:text-lg">
                        {region.bronze}
                      </span>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4 text-center">
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-brand-teal">{region.total}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* Note Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.6, 0.6)}
        initial="initial"
        animate="animate"
        className="py-12 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <p className="text-sm text-gray-700">
              <span className="font-bold text-brand-teal">Note:</span> Medal counts are updated as competitions conclude. Rankings are determined first by gold medals, then silver, then bronze.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Leaderboard;
