import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'program-info', name: 'About', path: '/' },
    { id: 'topics', name: 'Topics', path: '/' },
    { id: 'faq', name: 'FAQs', path: '/' },
    { id: 'lecture-series', name: 'Lecture Series', path: '/lecture-series' },
    { id: 'guidelines', name: 'Guidelines', path: '/guidelines' },
    { id: 'leaderboard', name: 'Leaderboard', path: '/leaderboard' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/10 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 sm:px-8" itemScope itemType="https://schema.org/SiteNavigationElement">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="cursor-pointer">
              <img src="/journcamp.png" alt="Journcamp+ Logo" className="h-6 sm:h-7" />
            </Link>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm p-2 rounded-full shadow-inner">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="capitalize font-semibold text-brand-dark hover:text-white transition-colors text-sm md:text-base px-5 py-2 rounded-full hover:bg-brand-teal"
                    itemProp="name"
                  >
                    <Link to={item.path} onClick={() => item.path === '/' && handleNavClick(item.id)} itemProp="url">{item.name}</Link>
                  </motion.button>
                ))}
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-brand-dark"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={28} />
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
            className="fixed inset-0 bg-white/80 backdrop-blur-lg z-50 flex flex-col items-center justify-center"
          >
            <div className="absolute top-0 right-0 pt-6 pr-6">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-brand-dark"
                >
                    <X size={28} />
                </Button>
            </div>
            <div className="flex flex-col items-center space-y-10">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="text-3xl sm:text-4xl capitalize font-bold text-brand-dark hover:text-brand-teal transition-colors"
                  itemProp="name"
                >
                  <Link to={item.path} onClick={() => item.path === '/' && handleNavClick(item.id)} itemProp="url">{item.name}</Link>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
