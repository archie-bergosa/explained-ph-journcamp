import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleRegister = () => {
    window.open('https://go.explained.ph/JourncampPlus2025', '_blank');
  };

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
        </div>
      </div>
    </section>
  );
};

export default Hero;