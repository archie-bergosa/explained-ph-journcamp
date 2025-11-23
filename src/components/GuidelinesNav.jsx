import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  FileText, 
  MessageSquare, 
  BookOpen, 
  Edit3, 
  Microscope, 
  Trophy, 
  Camera, 
  PenTool, 
  Video, 
  Users, 
  Globe,
  Home,
  ChevronRight,
  Radio,
  Tv
} from 'lucide-react';

const GuidelinesNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categoryPages = [
    {
      title: "Main Guidelines",
      path: "/guidelines",
      icon: Home,
      color: "brand-teal"
    },
    {
      title: "News Writing",
      path: "/guidelines/news",
      icon: FileText,
      color: "brand-teal"
    },
    {
      title: "Editorial Writing",
      path: "/guidelines/editorial",
      icon: MessageSquare,
      color: "brand-orange"
    },
    {
      title: "Column Writing",
      path: "/guidelines/column",
      icon: FileText,
      color: "blue-600"
    },
    {
      title: "Feature Writing",
      path: "/guidelines/feature",
      icon: BookOpen,
      color: "purple-600"
    },
    {
      title: "Copyreading & Headline Writing",
      path: "/guidelines/crhw",
      icon: Edit3,
      color: "green-600"
    },
    {
      title: "Science & Technology Writing",
      path: "/guidelines/scitech",
      icon: Microscope,
      color: "indigo-600"
    },
    {
      title: "Sports Writing",
      path: "/guidelines/sports",
      icon: Trophy,
      color: "amber-600"
    },
    {
      title: "Photojournalism",
      path: "/guidelines/photojournalism",
      icon: Camera,
      color: "pink-600"
    },
    {
      title: "Editorial Cartooning",
      path: "/guidelines/editorial-cartooning",
      icon: PenTool,
      color: "red-600"
    },
    {
      title: "Mobile Journalism",
      path: "/guidelines/mobile-journalism",
      icon: Video,
      color: "cyan-600"
    },
    {
      title: "Collaborative Desktop Publishing",
      path: "/guidelines/cdp",
      icon: Users,
      color: "teal-600"
    },
    {
      title: "Online Publishing",
      path: "/guidelines/online-publishing",
      icon: Globe,
      color: "orange-600"
    },
    {
      title: "Radio Broadcasting",
      path: "/guidelines/radio-broadcasting",
      icon: Radio,
      color: "red-600"
    },
    {
      title: "TV Broadcasting",
      path: "/guidelines/tv-broadcasting",
      icon: Tv,
      color: "purple-600"
    }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Toggle Button - Fixed Left Side */}
      <motion.button
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-gradient-to-r from-brand-teal to-brand-dark-teal text-white shadow-lg rounded-r-lg"
        aria-label="Open guidelines menu"
      >
        <div className="px-2 py-6 flex flex-col items-center gap-2">
          <Menu className="w-5 h-5" />
          <span className="font-semibold text-xs [writing-mode:vertical-rl] rotate-180">Guidelines</span>
        </div>
      </motion.button>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Drawer Content - Slides from Left */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 w-full sm:w-96 md:w-[28rem] bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-brand-teal to-brand-dark-teal text-white p-6 shadow-md z-10">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold">Guidelines Menu</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-white/80">Browse all category guidelines</p>
              </div>

              {/* Navigation Links */}
              <nav className="p-4 grid grid-cols-1 gap-3 pb-6">
                {categoryPages.map((category, index) => {
                  const IconComponent = category.icon;
                  const isActive = location.pathname === category.path;
                  
                  return (
                    <Link
                      key={index}
                      to={category.path}
                      onClick={handleLinkClick}
                      className={`group flex items-center gap-3 p-4 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-brand-teal to-brand-dark-teal text-white shadow-md'
                          : 'hover:bg-slate-100 text-gray-700 border border-slate-200'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                        isActive
                          ? 'bg-white/20'
                          : `bg-${category.color}/10`
                      }`}>
                        <IconComponent className={`w-5 h-5 ${
                          isActive
                            ? 'text-white'
                            : `text-${category.color}`
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-semibold ${
                          isActive ? 'text-white' : 'text-gray-800'
                        } line-clamp-2`}>
                          {category.title}
                        </p>
                      </div>
                      <ChevronRight className={`w-4 h-4 flex-shrink-0 ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-400 group-hover:text-brand-teal'
                      } transition-colors`} />
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default GuidelinesNav;
