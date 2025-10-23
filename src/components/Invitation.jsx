
import React from 'react';
import { motion } from 'framer-motion';

const Invitation = () => {
  return (
    <motion.div
      className="mt-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.0 }}
    >
      <p className="text-lg text-brand-dark-teal mb-4">
        Need an invitation letter for your school?
      </p>
      <a
        href="https://bit.ly/JournCampPlusInvite"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-brand-dark-teal font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors"
      >
        Request Invitation
      </a>
    </motion.div>
  );
};

export default Invitation;
