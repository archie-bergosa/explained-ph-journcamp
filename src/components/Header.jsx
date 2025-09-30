import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    if (sectionId === 'register') {
      window.open('https://go.explained.ph/JourncampPlus2025', '_blank');
      setIsMenuOpen(false);
      return;
    }
    
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = ['about', 'topics', 'FAQ'];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="https://i.postimg.cc/7Y0rb3Jh/journcamp.png" alt="Journcamp+ Logo" className="h-6 sm:h-7 md:h-8" />
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(item)}
                  className="capitalize font-medium text-brand-dark hover:text-brand-teal transition-colors text-sm md:text-base"
                >
                  {item}
                </motion.button>
              ))}
              <Button
                onClick={() => handleNavClick('register')}
                className="bg-brand-teal hover:bg-brand-dark-teal text-white font-semibold px-4 py-2 rounded-lg text-sm md:text-base"
              >
                REGISTER
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-brand-dark z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => handleNavClick(item)}
                  className="text-2xl sm:text-3xl capitalize font-semibold text-brand-dark hover:text-brand-teal transition-colors"
                >
                  {item}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  onClick={() => handleNavClick('register')}
                  size="lg"
                  className="w-full mt-4 bg-brand-teal hover:bg-brand-dark-teal text-white font-semibold text-lg sm:text-xl px-8 py-5"
                >
                  REGISTER
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;