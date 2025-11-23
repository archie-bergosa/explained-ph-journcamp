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
              Points Leaderboard
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
          <div className="max-w-4xl mx-auto mt-16 md:mt-24 lg:mt-28">
            {/* Podium Style - All Screens */}
            <div className="relative pb-20 sm:pb-24 md:pb-28 lg:pb-32 pt-12 sm:pt-14 md:pt-20 lg:pt-24">
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
                  {/* Logo Above Pedestal */}
                  <div className="absolute -top-8 sm:-top-10 md:-top-14 lg:-top-16 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white overflow-hidden shadow-2xl border-4 border-gray-400 flex items-center justify-center p-1">
                      {sortedData[1]?.image ? (
                        <img 
                          src={sortedData[1]?.total === 0 ? '/regions/none.png' : `/regions/${sortedData[1].image}`}
                          alt={sortedData[1]?.total === 0 ? 'DepEd logo' : `${sortedData[1]?.region} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            console.error('Image failed to load:', sortedData[1]?.image);
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<span class="flex items-center justify-center w-full h-full text-xs font-bold text-gray-500">LOGO</span>';
                          }}
                        />
                      ) : (
                        <span className="flex items-center justify-center w-full h-full text-xs font-bold text-gray-500">LOGO</span>
                      )}
                    </div>
                  </div>
                  <div className="bg-gradient-to-t from-gray-400 to-gray-300 rounded-t-xl md:rounded-t-2xl shadow-xl h-32 sm:h-36 md:h-48 lg:h-56 flex flex-col items-center justify-between p-2 sm:p-3 md:p-5 lg:p-6 border-2 md:border-4 border-gray-500">
                    {/* Region Name at top */}
                    <div className="text-center mt-2 sm:mt-3 md:mt-4">
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
                    <div className="bg-white rounded-md shadow-lg p-2 sm:p-3 md:p-4 border border-gray-300">
                      <div className="text-center">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-teal">{sortedData[1]?.gold}</p>
                        <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-600 font-medium">Points</p>
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
                  {/* Logo Above Pedestal */}
                  <div className="absolute -top-10 sm:-top-12 md:-top-16 lg:-top-20 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white overflow-hidden shadow-2xl border-4 md:border-6 border-yellow-500 flex items-center justify-center p-1.5">
                      {sortedData[0]?.image ? (
                        <img 
                          src={sortedData[0]?.total === 0 ? '/regions/none.png' : `/regions/${sortedData[0].image}`}
                          alt={sortedData[0]?.total === 0 ? 'DepEd logo' : `${sortedData[0]?.region} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            console.error('Image failed to load:', sortedData[0]?.image);
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<span class="flex items-center justify-center w-full h-full text-sm font-bold text-gray-500">LOGO</span>';
                          }}
                        />
                      ) : (
                        <span className="flex items-center justify-center w-full h-full text-sm font-bold text-gray-500">LOGO</span>
                      )}
                    </div>
                  </div>
                  <div className="bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-t-xl md:rounded-t-2xl shadow-2xl h-40 sm:h-44 md:h-56 lg:h-64 flex flex-col items-center justify-between p-3 sm:p-4 md:p-5 lg:p-7 border-2 md:border-4 border-yellow-500">
                    {/* Region Name at top */}
                    <div className="text-center mt-3 sm:mt-4 md:mt-5">
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
                    <div className="bg-white rounded-md shadow-lg p-2 sm:p-3 md:p-4 border border-yellow-400">
                      <div className="text-center">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-teal">{sortedData[0]?.gold}</p>
                        <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-600 font-medium">Points</p>
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
                  {/* Logo Above Pedestal */}
                  <div className="absolute -top-7 sm:-top-9 md:-top-12 lg:-top-14 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-white overflow-hidden shadow-2xl border-4 border-amber-700 flex items-center justify-center p-1">
                      {sortedData[2]?.image ? (
                        <img 
                          src={sortedData[2]?.total === 0 ? '/regions/none.png' : `/regions/${sortedData[2].image}`}
                          alt={sortedData[2]?.total === 0 ? 'DepEd logo' : `${sortedData[2]?.region} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            console.error('Image failed to load:', sortedData[2]?.image);
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<span class="flex items-center justify-center w-full h-full text-xs font-bold text-gray-500">LOGO</span>';
                          }}
                        />
                      ) : (
                        <span className="flex items-center justify-center w-full h-full text-xs font-bold text-gray-500">LOGO</span>
                      )}
                    </div>
                  </div>
                  <div className="bg-gradient-to-t from-amber-800 to-amber-600 rounded-t-xl md:rounded-t-2xl shadow-xl h-28 sm:h-32 md:h-40 lg:h-44 flex flex-col items-center justify-between p-2 sm:p-2.5 md:p-4 lg:p-5 border-2 md:border-4 border-amber-700">
                    {/* Region Name at top */}
                    <div className="text-center mt-1 sm:mt-2 md:mt-3">
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
                    <div className="bg-white rounded-md shadow-lg p-2 sm:p-3 md:p-4 border border-amber-600">
                      <div className="text-center">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-teal">{sortedData[2]?.gold}</p>
                        <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-600 font-medium">Points</p>
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
                    <div className="flex items-center justify-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>Points</span>
                    </div>
                  </th>
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
                      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-teal">{region.gold}</span>
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
              <span className="font-bold text-brand-teal">Note:</span> Points are updated as competitions conclude.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Leaderboard;