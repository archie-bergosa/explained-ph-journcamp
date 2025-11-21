import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { useLeaderboard } from '@/contexts/LeaderboardContext';
import { useNavigate } from 'react-router-dom';
import { 
  Shield,
  Lock,
  Save,
  LogOut,
  Trophy,
  Medal,
  Award,
  RotateCcw,
  Eye,
  AlertCircle,
  CheckCircle,
  MapPin
} from 'lucide-react';

const AdminUpdate = () => {
  const { 
    regionData, 
    loading,
    updateAllRegions,
    isAuthenticated, 
    authenticate, 
    logout,
    resetAllMedals,
    getSortedData
  } = useLeaderboard();
  
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [editedData, setEditedData] = useState([]);

  useEffect(() => {
    setEditedData(regionData.map(region => ({ ...region })));
  }, [regionData]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    const success = await authenticate(password);
    if (success) {
      setSuccessMessage('Successfully authenticated!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      setError('Invalid password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleMedalChange = (index, medalType, value) => {
    // Allow empty string, otherwise parse as number
    const numValue = value === '' ? 0 : parseInt(value) || 0;
    setEditedData(prev => {
      const newData = [...prev];
      newData[index] = { ...newData[index], [medalType]: Math.max(0, numValue) };
      return newData;
    });
  };

  const handleSaveAll = async () => {
    const success = await updateAllRegions(editedData);
    if (success) {
      setSuccessMessage('All changes saved successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      setError('Failed to save changes. Please try again.');
    }
  };

  const handleReset = async () => {
    if (window.confirm('Are you sure you want to reset all medals to 0? This action cannot be undone.')) {
      const success = await resetAllMedals();
      if (success) {
        setSuccessMessage('All medals have been reset to 0.');
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        setError('Failed to reset medals. Please try again.');
      }
    }
  };

  const handleViewLeaderboard = () => {
    navigate('/leaderboard');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-teal via-brand-dark-teal to-brand-teal flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-brand-teal to-brand-dark-teal rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Access</h1>
            <p className="text-gray-600">Enter password to update leaderboard</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-teal focus:outline-none transition-colors"
                  placeholder="Enter admin password"
                  required
                />
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm text-red-700">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-teal to-brand-dark-teal text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-sm text-gray-600 hover:text-brand-teal transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const sortedForDisplay = getSortedData();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-teal via-brand-dark-teal to-brand-teal flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-brand-teal to-brand-dark-teal text-white py-6 px-4 shadow-lg sticky top-0 z-10"
      >
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-white/80">Leaderboard Management</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleViewLeaderboard}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
            >
              <Eye className="w-4 h-4" />
              <span className="hidden sm:inline">View Leaderboard</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500/90 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Success Message */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">{successMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="py-6 px-4 bg-white border-b border-slate-200"
      >
        <div className="container mx-auto max-w-7xl flex flex-wrap gap-4 justify-center">
          <button
            onClick={handleSaveAll}
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Save className="w-5 h-5" />
            Save All Changes
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <RotateCcw className="w-5 h-5" />
            Reset All to 0
          </button>
        </div>
      </motion.section>

      {/* Current Rankings Preview */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="py-6 px-4 bg-gradient-to-br from-yellow-50 to-amber-50"
      >
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Current Top 3</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {sortedForDisplay.slice(0, 3).map((region, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-4 border-4 ${
                  index === 0 ? 'border-yellow-400' :
                  index === 1 ? 'border-gray-300' :
                  'border-amber-600'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold">
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                  </span>
                  <span className="text-sm font-semibold text-gray-500">#{index + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2">{region.region}</h3>
                <div className="flex items-center justify-between text-xs">
                  <span>🏆 {region.gold}</span>
                  <span>🥈 {region.silver}</span>
                  <span>🥉 {region.bronze}</span>
                  <span className="font-bold">Total: {region.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Update Form */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="py-8 px-4"
      >
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Update Regional Medals
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-brand-teal to-brand-dark-teal text-white">
                    <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-left text-[10px] sm:text-xs md:text-sm font-bold">Region</th>
                    <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-center text-[10px] sm:text-xs md:text-sm font-bold">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2">
                        <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden xs:inline">Gold</span>
                        <span className="xs:hidden">G</span>
                      </div>
                    </th>
                    <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-center text-[10px] sm:text-xs md:text-sm font-bold">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2">
                        <Medal className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden xs:inline">Silver</span>
                        <span className="xs:hidden">S</span>
                      </div>
                    </th>
                    <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-center text-[10px] sm:text-xs md:text-sm font-bold">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden xs:inline">Bronze</span>
                        <span className="xs:hidden">B</span>
                      </div>
                    </th>
                    <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-center text-[10px] sm:text-xs md:text-sm font-bold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {editedData.map((region, index) => {
                    const total = region.gold + region.silver + region.bronze;
                    return (
                      <tr
                        key={index}
                        className="border-b border-slate-200 hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-brand-teal flex-shrink-0" />
                            <span className="font-semibold text-gray-800 text-[10px] sm:text-xs md:text-sm leading-tight">
                              {region.region}
                            </span>
                          </div>
                        </td>
                        <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-center">
                          <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={region.gold}
                            onChange={(e) => handleMedalChange(index, 'gold', e.target.value)}
                            className="w-12 sm:w-16 md:w-20 px-1 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 border-2 border-yellow-200 rounded-md sm:rounded-lg text-center font-bold focus:border-yellow-400 focus:outline-none bg-yellow-50 text-xs sm:text-sm md:text-base"
                          />
                        </td>
                        <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-center">
                          <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={region.silver}
                            onChange={(e) => handleMedalChange(index, 'silver', e.target.value)}
                            className="w-12 sm:w-16 md:w-20 px-1 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 border-2 border-gray-200 rounded-md sm:rounded-lg text-center font-bold focus:border-gray-400 focus:outline-none bg-gray-50 text-xs sm:text-sm md:text-base"
                          />
                        </td>
                        <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-center">
                          <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={region.bronze}
                            onChange={(e) => handleMedalChange(index, 'bronze', e.target.value)}
                            className="w-12 sm:w-16 md:w-20 px-1 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 border-2 border-amber-200 rounded-md sm:rounded-lg text-center font-bold focus:border-amber-400 focus:outline-none bg-amber-50 text-xs sm:text-sm md:text-base"
                          />
                        </td>
                        <td className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-center">
                          <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-brand-teal">{total}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-6 py-3 rounded-lg">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              <p className="text-sm text-gray-700">
                Changes are saved locally. Click "Save All Changes" to apply updates to the leaderboard.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AdminUpdate;
