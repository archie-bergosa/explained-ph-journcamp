import React, { createContext, useContext, useState, useEffect } from 'react';

const LeaderboardContext = createContext();

export const useLeaderboard = () => {
  const context = useContext(LeaderboardContext);
  if (!context) {
    throw new Error('useLeaderboard must be used within a LeaderboardProvider');
  }
  return context;
};

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const LeaderboardProvider = ({ children }) => {
  const [regionData, setRegionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if admin is authenticated
    const authStatus = sessionStorage.getItem('journcamp_admin_auth');
    return authStatus === 'true';
  });

  // Fetch regions from API
  const fetchRegions = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/regions`);
      if (!response.ok) throw new Error('Failed to fetch regions');
      const data = await response.json();
      setRegionData(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching regions:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load data on mount
  useEffect(() => {
    fetchRegions();
  }, []);

  const updateRegionMedals = async (regionId, gold, silver, bronze) => {
    try {
      const response = await fetch(`${API_URL}/admin/regions/${regionId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ gold, silver, bronze }),
      });

      if (!response.ok) throw new Error('Failed to update region');
      
      // Refresh data after update
      await fetchRegions();
      return true;
    } catch (err) {
      console.error('Error updating region:', err);
      setError(err.message);
      return false;
    }
  };

  const updateAllRegions = async (regions) => {
    try {
      const response = await fetch(`${API_URL}/admin/regions`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ regions }),
      });

      if (!response.ok) throw new Error('Failed to update regions');
      
      const data = await response.json();
      setRegionData(data);
      return true;
    } catch (err) {
      console.error('Error updating regions:', err);
      setError(err.message);
      return false;
    }
  };

  const authenticate = async (password) => {
    try {
      const response = await fetch(`${API_URL}/admin/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        sessionStorage.setItem('journcamp_admin_auth', 'true');
        return true;
      }
      return false;
    } catch (err) {
      console.error('Authentication error:', err);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('journcamp_admin_auth');
  };

  const resetAllMedals = async () => {
    try {
      const response = await fetch(`${API_URL}/admin/regions/reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Failed to reset medals');
      
      const data = await response.json();
      setRegionData(data);
      return true;
    } catch (err) {
      console.error('Error resetting medals:', err);
      setError(err.message);
      return false;
    }
  };

  const getSortedData = () => {
    return [...regionData].sort((a, b) => {
      if (b.gold !== a.gold) return b.gold - a.gold;
      if (b.silver !== a.silver) return b.silver - a.silver;
      return b.bronze - a.bronze;
    });
  };

  const getTotalMedals = () => {
    return regionData.reduce((acc, region) => ({
      gold: acc.gold + region.gold,
      silver: acc.silver + region.silver,
      bronze: acc.bronze + region.bronze,
      total: acc.total + region.total
    }), { gold: 0, silver: 0, bronze: 0, total: 0 });
  };

  return (
    <LeaderboardContext.Provider
      value={{
        regionData,
        loading,
        error,
        updateRegionMedals,
        updateAllRegions,
        isAuthenticated,
        authenticate,
        logout,
        resetAllMedals,
        getSortedData,
        getTotalMedals,
        fetchRegions
      }}
    >
      {children}
    </LeaderboardContext.Provider>
  );
};
