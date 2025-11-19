import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/variants';
import { FileText } from 'lucide-react';

const Guidelines = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="bg-slate-50 py-16 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 0.6)}
          className="text-center mb-12"
        >
          <FileText className="w-16 h-16 mx-auto mb-6 text-brand-teal" />
          <h1 className="text-4xl font-bold text-brand-dark-teal mb-4">
            National Campus Press Summit Guidelines
          </h1>
          <p className="text-lg text-gray-600">
            Please find the mechanics, guidelines, and other important information for the competition below.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 0.6)}
          className="bg-white rounded-lg shadow-lg border border-slate-200 p-8"
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-6">General Mechanics</h2>
          <div className="prose max-w-none">
            <p>The content for the guidelines is not yet available. Could you please provide the text for the mechanics and guidelines of the National Campus Press Summit? I will add it here.</p>
            {/* I will add the detailed guidelines here once you provide them. */}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Guidelines;
