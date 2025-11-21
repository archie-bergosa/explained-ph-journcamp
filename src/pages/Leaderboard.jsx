import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { useLeaderboard } from '@/contexts/LeaderboardContext';
import { 
  Trophy,
  Medal,
  Award,
  Crown,
  TrendingUp
} from 'lucide-react';

const Leaderboard = () => {
  const { getSortedData, getTotalMedals } = useLeaderboard();
  const [selectedLevel, setSelectedLevel] = useState('all');

  const sortedData = getSortedData();
  const totalMedals = getTotalMedals();

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
              Medal Tally
            </h1>
            <div className="h-1 w-24 bg-white mx-auto mb-4"></div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              JournCamp+: National Campus Press Summit 2025
            </p>
          </motion.div>
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
          <div className="max-w-4xl mx-auto mt-8 md:mt-16">
            {/* Podium Style - All Screens */}
            <div className="relative pb-14 sm:pb-16 md:pb-20 lg:pb-22">
              {/* Podium Platforms with Trophies on Top */}
              <div className="flex items-end justify-center gap-2 md:gap-8">
                {/* 2nd Place Platform */}
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
                  className="relative w-1/3"
                  style={{ transformOrigin: 'bottom' }}
                >
                  <div className="bg-gradient-to-t from-gray-400 to-gray-300 rounded-t-xl md:rounded-t-2xl shadow-xl h-32 sm:h-36 md:h-48 lg:h-56 flex flex-col items-center justify-between p-2 sm:p-3 md:p-5 lg:p-6 border-2 md:border-4 border-gray-500">
                    {/* Region Logo and Name at top */}
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-white overflow-hidden shadow-md">
                          <img 
                            src={`/regions/${sortedData[1]?.image}`}
                            alt={`${sortedData[1]?.region} logo`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = '<span class="flex items-center justify-center w-full h-full text-[8px] font-bold text-gray-500">LOGO</span>';
                            }}
                          />
                        </div>
                      </div>
                      <h3 className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-bold text-gray-800 leading-tight px-1">
                        {sortedData[1]?.total === 0 ? 'N/A' : sortedData[1]?.region}
                      </h3>
                    </div>
                    {/* Rank at bottom */}
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-2xl mb-0.5">
                        2
                      </div>
                      <div className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-bold text-gray-700 uppercase tracking-wide">
                        2nd Place
                      </div>
                    </div>
                  </div>
                  {/* Stats Card Below Pedestal */}
                  <div className="absolute -bottom-12 sm:-bottom-14 md:-bottom-16 lg:-bottom-18 left-1/2 transform -translate-x-1/2 w-full px-1">
                    <div className="bg-white rounded-md shadow-lg p-1.5 sm:p-2 md:p-2.5 border border-gray-300">
                      <div className="flex justify-around">
                        <div className="text-center">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-yellow-600">{sortedData[1]?.gold}</p>
                          <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500">Gold</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-600">{sortedData[1]?.silver}</p>
                          <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500">Silver</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-amber-700">{sortedData[1]?.bronze}</p>
                          <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500">Bronze</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-brand-teal">{sortedData[1]?.total}</p>
                          <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500">Total</p>
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
                  <div className="bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-t-xl md:rounded-t-2xl shadow-2xl h-40 sm:h-44 md:h-56 lg:h-64 flex flex-col items-center justify-between p-3 sm:p-4 md:p-5 lg:p-7 border-2 md:border-4 border-yellow-500">
                    {/* Region Logo and Name at top */}
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full bg-white overflow-hidden shadow-md">
                          <img 
                            src={`/regions/${sortedData[0]?.image}`}
                            alt={`${sortedData[0]?.region} logo`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = '<span class="flex items-center justify-center w-full h-full text-[8px] font-bold text-gray-500">LOGO</span>';
                            }}
                          />
                        </div>
                      </div>
                      <h3 className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-bold text-yellow-900 leading-tight px-1">
                        {sortedData[0]?.total === 0 ? 'N/A' : sortedData[0]?.region}
                      </h3>
                    </div>
                    {/* Rank at bottom */}
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl mb-0.5">
                        1
                      </div>
                      <div className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-bold text-yellow-900 uppercase tracking-wide flex items-center justify-center gap-1">
                        <Crown className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5" />
                        <span className="hidden md:inline">Champion</span>
                        <span className="md:hidden">1st</span>
                      </div>
                    </div>
                  </div>
                  {/* Stats Card Below Pedestal */}
                  <div className="absolute -bottom-12 sm:-bottom-14 md:-bottom-16 lg:-bottom-18 left-1/2 transform -translate-x-1/2 w-full px-1">
                    <div className="bg-white rounded-md shadow-lg p-1.5 sm:p-2 md:p-2.5 border border-yellow-400">
                      <div className="flex justify-around">
                        <div className="text-center">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-yellow-600">{sortedData[0]?.gold}</p>
                          <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500">Gold</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-600">{sortedData[0]?.silver}</p>
                          <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500">Silver</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-amber-700">{sortedData[0]?.bronze}</p>
                          <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500">Bronze</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-brand-teal">{sortedData[0]?.total}</p>
                          <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500">Total</p>
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
                  <div className="bg-gradient-to-t from-amber-800 to-amber-600 rounded-t-xl md:rounded-t-2xl shadow-xl h-28 sm:h-32 md:h-40 lg:h-44 flex flex-col items-center justify-between p-2 sm:p-2.5 md:p-4 lg:p-5 border-2 md:border-4 border-amber-700">
                    {/* Region Logo and Name at top */}
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-white overflow-hidden shadow-md">
                          <img 
                            src={`/regions/${sortedData[2]?.image}`}
                            alt={`${sortedData[2]?.region} logo`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = '<span class="flex items-center justify-center w-full h-full text-[8px] font-bold text-gray-500">LOGO</span>';
                            }}
                          />
                        </div>
                      </div>
                      <h3 className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-bold text-amber-100 leading-tight px-1">
                        {sortedData[2]?.total === 0 ? 'N/A' : sortedData[2]?.region}
                      </h3>
                    </div>
                    {/* Rank at bottom */}
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-white drop-shadow-2xl mb-0.5">
                        3
                      </div>
                      <div className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-bold text-amber-100 uppercase tracking-wide">
                        3rd Place
                      </div>
                    </div>
                  </div>
                  {/* Stats Card Below Pedestal */}
                  <div className="absolute -bottom-12 sm:-bottom-14 md:-bottom-16 lg:-bottom-18 left-1/2 transform -translate-x-1/2 w-full px-1">
                    <div className="bg-white rounded-md shadow-lg p-1.5 sm:p-2 md:p-2.5 border border-amber-600">
                      <div className="flex justify-around">
                        <div className="text-center">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-yellow-600">{sortedData[2]?.gold}</p>
                          <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500">Gold</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-600">{sortedData[2]?.silver}</p>
                          <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500">Silver</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-amber-700">{sortedData[2]?.bronze}</p>
                          <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500">Bronze</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-brand-teal">{sortedData[2]?.total}</p>
                          <p className="text-[7px] sm:text-[8px] md:text-[9px] text-gray-500">Total</p>
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
              Complete Standings
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
                    className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4">
                      <span className="text-sm sm:text-base md:text-lg font-bold text-gray-600">
                        {index + 1}
                      </span>
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 md:py-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          <img 
                            src={`/regions/${region.image}`}
                            alt={`${region.region} logo`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = '<span class="flex items-center justify-center w-full h-full text-[8px] sm:text-xs font-bold text-gray-500">LOGO</span>';
                            }}
                          />
                        </div>
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
              <span className="font-bold text-brand-teal">Note:</span> Medal counts are updated as competitions conclude.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Leaderboard;