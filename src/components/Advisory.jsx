import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

const Advisory = () => {
  return (
    <section id="advisory" className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-slate-50 border border-slate-200 rounded-lg p-8 text-center shadow-sm"
        >
          <h2 className="text-3xl font-bold text-brand-dark-teal mb-4">Official DepEd Advisory</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are grateful for the issuance of an official advisory from the Department of Education for JournCamp+. This helps us bring quality journalism training to students nationwide.
          </p>
          <a
            href="https://www.deped.gov.ph/2025/10/23/october-22-2025-advisory-207-s-2025-journcamp-2025-and-national-campus-press-summit/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-brand-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-dark-teal transition-colors duration-300"
          >
            View Advisory
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Advisory;
