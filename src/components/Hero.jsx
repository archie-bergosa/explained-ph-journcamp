import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, PartyPopper } from 'lucide-react';

const Hero = () => {
  const keyDates = [
    { title: 'Registration', dates: 'Oct 1 - Nov 6' },
    { title: 'Lectures', dates: 'Nov 8, 9, 15, 16' },
    { title: 'Competition', dates: 'Nov 22, 23, 29, 30' },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 to-gray-100">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.05),_transparent_30%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.05),_transparent_30%)]"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white/50 border border-slate-200 rounded-full px-4 py-1 mb-6 shadow-sm">
                <p className="text-sm sm:text-base md:text-lg text-brand-teal font-semibold">
                    EXPLAINED PH
                </p>
            </div>
            
            <div className="flex justify-center mb-6 items-center space-x-4">
                <img src="https://i.postimg.cc/7Y0rb3Jh/journcamp.png" alt="Journcamp+ Logo" className="w-56 sm:w-80 md:w-96" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-dark-teal tracking-tight mb-4">
              National Campus Press Summit
            </h1>

            <p className="text-base md:text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              A month-long virtual journalism camp combining seasoned practitioners with award-winning storytellers to strengthen campus publications nationwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 p-6 md:p-8">
              <div className="flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-brand-dark-teal mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">Dates to Remember</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center">
                {keyDates.map((item, index) => (
                  <li key={index} className="bg-white/50 rounded-lg p-4 shadow-sm border border-slate-200/80">
                    <p className="text-xs sm:text-sm font-semibold text-brand-dark-teal tracking-wider uppercase">{item.title}</p>
                    <p className="text-base sm:text-lg font-bold text-brand-dark mt-1">{item.dates}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
