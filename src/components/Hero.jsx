import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Lock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-gray-100">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_rgba(20,184,166,0.05),_transparent_30%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.05),_transparent_30%)]"></div>
      
      <div className="container mx-auto px-4 z-10 relative py-20">
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
                <img src="/journcamp.png" alt="Journcamp+ Logo" className="w-56 sm:w-80 md:w-96" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-dark-teal tracking-tight mb-4">
              National Campus Press Summit
            </h1>

            <p className="text-base md:text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              A month-long virtual journalism camp combining seasoned practitioners with award-winning storytellers to strengthen campus publications nationwide.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/guidelines">
                <Button className="bg-gradient-to-r from-brand-teal to-brand-dark-teal hover:from-brand-dark-teal hover:to-brand-teal text-white font-semibold px-8 py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <FileText className="w-5 h-5 mr-2" />
                  View NCPS Guidelines
                </Button>
              </Link>
              <Link to="/portal">
                <Button className="bg-gradient-to-r from-brand-orange to-amber-600 hover:from-amber-600 hover:to-brand-orange text-white font-semibold px-8 py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Lock className="w-5 h-5 mr-2" />
                  User Portal
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
