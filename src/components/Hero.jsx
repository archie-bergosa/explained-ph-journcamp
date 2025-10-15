import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, PartyPopper } from 'lucide-react';

const Hero = () => {
  const handleRegister = () => {
    window.open('https://go.explained.ph/JourncampPlus2025', '_blank');
  };

  const keyDates = [
    { title: 'Registration', dates: 'Oct 1 - Nov 6' },
    { title: 'Lectures', dates: 'Nov 8, 9, 15, 16' },
    { title: 'Competition', dates: 'Nov 22, 23, 29, 30' },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 to-gray-100">
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
                <img src="https://i.postimg.cc/7Y0rb3Jh/journcamp.png" alt="Journcamp+ Logo" className="h-12 sm:h-14 md:h-20" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-dark-teal tracking-tight mb-4">
              National Campus Press Summit
            </h1>

            <p className="text-base md:text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              A month-long virtual journalism camp combining seasoned practitioners with award-winning storytellers to strengthen campus publications nationwide.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                onClick={handleRegister}
                size="lg"
                className="bg-gradient-to-r from-brand-orange to-brand-yellow text-white font-bold px-8 py-4 rounded-full shadow-xl text-base md:text-lg transition-transform"
              >
                <PartyPopper className="w-6 h-6 mr-3" />
                Register Now
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-white/40 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                  <Calendar className="w-7 h-7 text-brand-dark-teal mr-4" />
                  <h3 className="text-lg font-bold text-brand-dark">Dates to Remember</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                  {keyDates.map((item, index) => (
                    <div key={index} className="text-sm text-gray-800 text-center sm:text-left">
                      <span className="font-bold text-brand-dark">{item.title}:</span>
                      <p className="text-xs">{item.dates}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
