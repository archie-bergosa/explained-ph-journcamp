import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, Shield, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeIn } from '@/lib/variants';
import PortalHome from './PortalHome';

const Portal = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Check if already authenticated on mount
  useEffect(() => {
    const auth = sessionStorage.getItem('portalAuth');
    if (auth === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Check password
    if (password === 'JournCamp+') {
      sessionStorage.setItem('portalAuth', 'authenticated');
      setIsAuthenticated(true);
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <PortalHome />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-teal via-brand-dark-teal to-brand-teal flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Logo/Header */}
        <motion.div
          variants={fadeIn('down', 'tween', 0.2, 0.6)}
          initial="hidden"
          animate="show"
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            User Portal
          </h1>
          <p className="text-white/90 text-lg">
            JournCamp+ National Campus Press Summit
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 0.6)}
          initial="hidden"
          animate="show"
          className="bg-white rounded-2xl shadow-2xl p-8"
        >
          <div className="text-center mb-6">
            <Lock className="w-12 h-12 mx-auto mb-3 text-brand-teal" />
            <h2 className="text-2xl font-bold text-brand-dark-teal mb-2">
              Access Required
            </h2>
            <p className="text-gray-600">
              Enter the password to access the portal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-all outline-none"
                  placeholder="Enter portal password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-brand-teal transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{error}</span>
              </motion.div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-teal to-brand-dark-teal text-white py-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Enter Portal
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong className="font-semibold">Note:</strong> This portal is exclusively for registered JournCamp+ competitors. 
                If you don't have the password, please contact the organizers.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 0.6)}
          initial="hidden"
          animate="show"
          className="text-center mt-6"
        >
          <p className="text-white/80 text-sm">
            Need help? Contact us at{' '}
            <a 
              href="mailto:journcamp@explained.ph" 
              className="font-semibold text-white hover:underline"
            >
              journcamp@explained.ph
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portal;
