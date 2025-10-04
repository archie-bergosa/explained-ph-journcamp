import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

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
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm sm:text-base md:text-lg text-brand-teal font-semibold mb-4">EXPLAINED PH</p>
            <div className="flex justify-center mb-4">
                <img src="https://i.postimg.cc/7Y0rb3Jh/journcamp.png" alt="Journcamp+ Logo" className="h-10 sm:h-12 md:h-16" />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-brand-dark mt-2 mb-6">
              National Campus Press Summit
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
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
                className="bg-brand-orange hover:bg-yellow-600 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg text-base md:text-lg"
              >
                Register Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Dates to Remember Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-lg border border-gray-200/80 p-4">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                  <Calendar className="w-6 h-6 text-brand-teal mr-3" />
                  <h3 className="text-base font-bold text-brand-dark">Dates to Remember:</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                  {keyDates.map((item, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      <span className="font-semibold">{item.title}:</span> {item.dates}
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
