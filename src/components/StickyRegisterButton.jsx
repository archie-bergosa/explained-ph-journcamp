import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';

const StickyRegisterButton = () => {
  const handleRegister = () => {
    window.open('https://go.explained.ph/JourncampPlus2025', '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        onClick={handleRegister}
        className="bg-brand-orange hover:bg-yellow-600 text-white font-bold rounded-full shadow-lg flex items-center space-x-2 px-4 py-6 sm:px-6 sm:py-8"
      >
        <Edit className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="hidden sm:inline text-base">Register</span>
      </Button>
    </motion.div>
  );
};

export default StickyRegisterButton;