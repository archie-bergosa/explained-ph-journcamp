import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const Competition = () => {
  return (
    <section id="competition" className="py-12 px-4 bg-slate-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-200"
        >
          <div className="flex flex-col md:flex-row md:items-center text-center md:text-left">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-0 md:mr-8"
            >
              <div className="bg-gradient-to-br from-brand-teal to-brand-dark-teal p-5 rounded-full inline-block shadow-lg">
                <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
            </motion.div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-brand-dark-teal">
                The National Campus Press Summit
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
                The competition side of JournCamp+ — is a virtual press conference that brings together campus journalists from elementary, high school, and college to compete in a wide range of categories. Participants will be tasked to submit outputs online, simulating the real press conference experience in a nationwide setup.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                With your registration, you get access to all lectures and the full competition — no extra fees. Winners will be awarded medals (shipping included), certificates of recognition, and national exposure.
              </p>
              <p className="font-semibold text-brand-orange text-sm sm:text-base">
                Detailed mechanics, categories, and submission guidelines will be released soon.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Competition;