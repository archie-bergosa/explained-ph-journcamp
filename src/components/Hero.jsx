import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import HeroImage from '@/components/HeroImage';
import { fadeIn, staggerContainer } from '@/lib/variants';

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="relative bg-brand-dark-teal text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 py-24 md:py-32 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={fadeIn('up', 'tween', 0.2, 1.1)} className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              Explained PH <span className="text-brand-orange">JournCamp+</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl mx-auto md:mx-0">
              Join the Virtual Journalism Camp by Explained PH - a month-long program combining seasoned practitioners with award-winning storytellers to strengthen campus publications nationwide.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
               <a href="https://forms.gle/your-registration-link" target="_blank" rel="noopener noreferrer">
                 <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold">
                  Register Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
               </a>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('down', 'tween', 0.2, 1.1)} className="relative hidden md:block">
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
