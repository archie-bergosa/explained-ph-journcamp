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

      {/* Summary Stats Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.3, 0.6)}
        initial="initial"
        animate="animate"
        className="py-12 px-4 bg-slate-50 border-b border-slate-200"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">{totalMedals.gold}</p>
              <p className="text-sm font-semibold text-yellow-600">Gold Medals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center shadow-lg">
                <Medal className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">{totalMedals.silver}</p>
              <p className="text-sm font-semibold text-gray-600">Silver Medals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">{totalMedals.bronze}</p>
              <p className="text-sm font-semibold text-amber-700">Bronze Medals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-brand-teal to-brand-dark-teal flex items-center justify-center shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">{totalMedals.total}</p>
              <p className="text-sm font-semibold text-brand-teal">Total Medals</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Podium Section - Top 3 */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.4, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <Crown className="w-14 h-14 mx-auto mb-4 text-yellow-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Top 3 Regions
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          {/* Podium Display */}
          <div className="max-w-4xl mx-auto mt-16">
            {/* Mobile: Vertical List */}
            <div className="md:hidden space-y-4">
              {sortedData.slice(0, 3).map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="relative"
                >
                  <div className={`bg-white rounded-xl shadow-lg p-6 border-4 ${
                    index === 0 ? 'border-yellow-400' : 
                    index === 1 ? 'border-gray-300' : 
                    'border-amber-600'
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-full ${getRankBadge(index)} flex items-center justify-center shadow-lg`}>
                        <span className="text-3xl">
                          {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="w-4 h-4 text-brand-teal" />
                          <span className="text-xs font-semibold text-gray-500 uppercase">Rank #{index + 1}</span>
                        </div>
                        <h3 className="text-base font-bold text-gray-800 leading-tight">
                          {region.region}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center justify-around pt-4 border-t border-slate-200">
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-1">
                          <Trophy className="w-5 h-5 text-yellow-600" />
                        </div>
                        <p className="text-2xl font-bold text-yellow-600">{region.gold}</p>
                        <p className="text-xs text-gray-500">Gold</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-1">
                          <Medal className="w-5 h-5 text-gray-600" />
                        </div>
                        <p className="text-2xl font-bold text-gray-600">{region.silver}</p>
                        <p className="text-xs text-gray-500">Silver</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-1">
                          <Award className="w-5 h-5 text-amber-700" />
                        </div>
                        <p className="text-2xl font-bold text-amber-700">{region.bronze}</p>
                        <p className="text-xs text-gray-500">Bronze</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-1">
                          <TrendingUp className="w-5 h-5 text-brand-teal" />
                        </div>
                        <p className="text-2xl font-bold text-brand-teal">{region.total}</p>
                        <p className="text-xs text-gray-500">Total</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Desktop: Podium Style */}
            <div className="hidden md:block relative pb-24">
              {/* Podium Platforms with Trophies on Top */}
              <div className="flex items-end justify-center gap-8">
                {/* 2nd Place Platform */}
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
                  className="relative w-1/3"
                  style={{ transformOrigin: 'bottom' }}
                >
                  <div className="bg-gradient-to-t from-gray-400 to-gray-300 rounded-t-2xl shadow-xl h-56 flex flex-col items-center justify-between p-8 border-4 border-gray-500">
                    {/* Region Name at top */}
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-gray-700" />
                      </div>
                      <h3 className="text-sm font-bold text-gray-800 leading-tight">
                        {sortedData[1]?.region}
                      </h3>
                    </div>
                    {/* Rank at bottom */}
                    <div className="text-center">
                      <div className="text-5xl font-bold text-white drop-shadow-2xl mb-2">
                        2
                      </div>
                      <div className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        2nd Place
                      </div>
                    </div>
                  </div>
                  {/* Stats Card Below Pedestal */}
                  <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full px-2">
                    <div className="bg-white rounded-lg shadow-lg p-3 border-2 border-gray-300">
                      <div className="flex justify-around text-xs">
                        <div className="text-center">
                          <p className="text-xl font-bold text-yellow-600">{sortedData[1]?.gold}</p>
                          <p className="text-[10px] text-gray-500">Gold</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-gray-600">{sortedData[1]?.silver}</p>
                          <p className="text-[10px] text-gray-500">Silver</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-amber-700">{sortedData[1]?.bronze}</p>
                          <p className="text-[10px] text-gray-500">Bronze</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-brand-teal">{sortedData[1]?.total}</p>
                          <p className="text-[10px] text-gray-500">Total</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 1st Place Platform */}
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                  className="relative w-1/3"
                  style={{ transformOrigin: 'bottom' }}
                >
                  <div className="bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-t-2xl shadow-2xl h-72 flex flex-col items-center justify-between p-8 border-4 border-yellow-500">
                    {/* Region Name at top */}
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-yellow-900" />
                      </div>
                      <h3 className="text-base font-bold text-yellow-900 leading-tight">
                        {sortedData[0]?.region}
                      </h3>
                    </div>
                    {/* Rank at bottom */}
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white drop-shadow-2xl mb-2">
                        1
                      </div>
                      <div className="text-sm font-bold text-yellow-900 uppercase tracking-wider flex items-center justify-center gap-2">
                        <Crown className="w-4 h-4" />
                        Champion
                      </div>
                    </div>
                  </div>
                  {/* Stats Card Below Pedestal */}
                  <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full px-2">
                    <div className="bg-white rounded-lg shadow-lg p-3 border-2 border-yellow-400">
                      <div className="flex justify-around text-xs">
                        <div className="text-center">
                          <p className="text-xl font-bold text-yellow-600">{sortedData[0]?.gold}</p>
                          <p className="text-[10px] text-gray-500">Gold</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-gray-600">{sortedData[0]?.silver}</p>
                          <p className="text-[10px] text-gray-500">Silver</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-amber-700">{sortedData[0]?.bronze}</p>
                          <p className="text-[10px] text-gray-500">Bronze</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-brand-teal">{sortedData[0]?.total}</p>
                          <p className="text-[10px] text-gray-500">Total</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 3rd Place Platform */}
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
                  className="relative w-1/3"
                  style={{ transformOrigin: 'bottom' }}
                >
                  <div className="bg-gradient-to-t from-amber-800 to-amber-600 rounded-t-2xl shadow-xl h-48 flex flex-col items-center justify-between p-6 border-4 border-amber-700">
                    {/* Region Name at top */}
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-amber-100" />
                      </div>
                      <h3 className="text-sm font-bold text-amber-100 leading-tight">
                        {sortedData[2]?.region}
                      </h3>
                    </div>
                    {/* Rank at bottom */}
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white drop-shadow-2xl mb-2">
                        3
                      </div>
                      <div className="text-xs font-bold text-amber-100 uppercase tracking-wider">
                        3rd Place
                      </div>
                    </div>
                  </div>
                  {/* Stats Card Below Pedestal */}
                  <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full px-2">
                    <div className="bg-white rounded-lg shadow-lg p-3 border-2 border-amber-600">
                      <div className="flex justify-around text-xs">
                        <div className="text-center">
                          <p className="text-xl font-bold text-yellow-600">{sortedData[2]?.gold}</p>
                          <p className="text-[10px] text-gray-500">Gold</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-gray-600">{sortedData[2]?.silver}</p>
                          <p className="text-[10px] text-gray-500">Silver</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-amber-700">{sortedData[2]?.bronze}</p>
                          <p className="text-[10px] text-gray-500">Bronze</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-brand-teal">{sortedData[2]?.total}</p>
                          <p className="text-[10px] text-gray-500">Total</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
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
