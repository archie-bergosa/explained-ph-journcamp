import { useState, useEffect } from 'react';

/**
 * Custom hook for contest countdown logic
 * @param {string} startDate - Competition start date (YYYY-MM-DD format)
 * @param {string} endDate - Competition end date (YYYY-MM-DD format)
 * @returns {object} Countdown state and status
 */
export const useContestCountdown = (startDate, endDate) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [status, setStatus] = useState('before'); // 'before', 'ongoing', 'ended'

  useEffect(() => {
    const startDateTime = new Date(`${startDate} 07:00:00 GMT+0800`);
    const endDateTime = new Date(`${endDate} 23:59:59 GMT+0800`);

    const updateCountdown = () => {
      const now = new Date();

      // Check if contest has ended
      if (now >= endDateTime) {
        setStatus('ended');
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Check if contest is ongoing
      if (now >= startDateTime && now < endDateTime) {
        setStatus('ongoing');
        const difference = endDateTime - now;
        const totalHours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ hours: totalHours, minutes, seconds });
        return;
      }

      // Contest hasn't started yet
      setStatus('before');
      const difference = startDateTime - now;
      const totalHours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeLeft({ hours: totalHours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [startDate, endDate]);

  return { timeLeft, status };
};
