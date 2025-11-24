import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Wrapped = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoAdvanceTimer, setAutoAdvanceTimer] = useState(null);

  // Helper function to determine highlight color based on background
  const getHighlightColor = (bgColor) => {
    // If background is teal-dominant, use yellow/orange
    if (bgColor.includes('#006B7D') || bgColor.includes('#0E8FA8') || bgColor.includes('#1AA8C8')) {
      return { bg: 'bg-yellow-300/70', text: 'text-gray-900' };
    }
    // If background is orange/yellow-dominant, use teal
    if (bgColor.includes('#F9A826') || bgColor.includes('#FDB847') || bgColor.includes('#FFCB69')) {
      return { bg: 'bg-[#006B7D]/80', text: 'text-white' };
    }
    // Default to yellow
    return { bg: 'bg-yellow-300/70', text: 'text-gray-900' };
  };

  const slides = [
    {
      id: 0,
      type: 'welcome',
      title: '',
      subtitle: 'JournCamp+',
      highlight: 'Wrapped',
      bgColor: 'from-[#006B7D] via-[#0E8FA8] to-[#1AA8C8]',
    },
    {
      id: 1,
      type: 'intro',
      title: "Here's a look back at",
      subtitle: 'the amazing journey',
      highlight: 'of our event',
      bgColor: 'from-[#1AA8C8] via-[#4DBDD2] to-[#F9A826]',
    },
    {
      id: 2,
      type: 'learning',
      title: 'We learned',
      subtitle: 'together',
      bgColor: 'from-[#0E8FA8] via-[#1AA8C8] to-[#4DBDD2]',
      duration: [
        { label: 'Days', value: '4', icon: '📅' },
        { label: 'Weekends', value: '2', icon: '🗓️' },
      ]
    },
    {
      id: 3,
      type: 'intro-runtime',
      title: 'Let\'s break down',
      subtitle: 'the time we spent',
      highlight: 'learning together',
      bgColor: 'from-[#F9A826] via-[#FDB847] to-[#FFCB69]',
    },
    {
      id: 4,
      type: 'runtime',
      title: 'Total Runtime',
      value: '120',
      unit: 'hours',
      icon: '⏱️',
      bgColor: 'from-[#FDB847] via-[#F9A826] to-[#E89614]',
      breakdown: [
        { label: 'Day 1', value: '30h' },
        { label: 'Day 2', value: '35h' },
        { label: 'Day 3', value: '28h' },
        { label: 'Day 4', value: '27h' },
      ]
    },
    {
      id: 5,
      type: 'intro-lectures',
      title: 'What did you watch?',
      subtitle: 'Here are the lectures',
      highlight: 'everyone loved',
      bgColor: 'from-[#006B7D] via-[#1AA8C8] to-[#4DBDD2]',
    },
    {
      id: 6,
      type: 'top-lectures',
      title: 'Top Most Watched Lectures',
      subtitle: 'your favorites of the event',
      bgColor: 'from-[#1AA8C8] via-[#4DBDD2] to-[#80D4E5]',
      lectures: [
        { rank: 1, title: 'Media Ethics & Responsibility', views: '1,200', speaker: 'Maria Santos', emoji: '🥇' },
        { rank: 2, title: 'Digital Journalism in 2024', views: '1,050', speaker: 'John Cruz', emoji: '🥈' },
        { rank: 3, title: 'Investigative Reporting', views: '980', speaker: 'Ana Reyes', emoji: '🥉' },
      ]
    },
    {
      id: 7,
      type: 'intro-stats',
      title: 'But that’s not all...',
      subtitle: 'Let’s talk about the amazing people',
      highlight: 'who made it happen',
      bgColor: 'from-[#0E8FA8] via-[#1AA8C8] to-[#4DBDD2]',
    },
    {
      id: 8,
      type: 'stat',
      title: 'Meet the Community',
      value: '1,500+',
      unit: 'passionate attendees',
      subtitle: 'joined us to learn and grow',
      intro: 'These are the people',
      icon: '👥',
      bgColor: 'from-[#1AA8C8] via-[#4DBDD2] to-[#80D4E5]',
    },
    {
      id: 9,
      type: 'intro-ncsp',
      title: 'But wait...',
      subtitle: 'Among them were',
      highlight: 'true champions',
      bgColor: 'from-[#F9A826] via-[#FDB847] to-[#FFCB69]',
    },
    {
      id: 10,
      type: 'stat',
      title: 'NCSP Contestants',
      value: '300',
      unit: 'champions ready to compete',
      subtitle: 'showcased their talents',
      intro: 'The champions were',
      icon: '🏆',
      bgColor: 'from-[#006B7D] via-[#0E8FA8] to-[#1AA8C8]',
    },
    {
      id: 11,
      type: 'intro-medals',
      title: 'And the best part?',
      subtitle: 'We celebrated excellence',
      highlight: 'with medals and awards',
      bgColor: 'from-[#FDB847] via-[#F9A826] to-[#E89614]',
    },
    {
      id: 12,
      type: 'medals',
      title: 'Medals Given',
      value: '50',
      unit: 'total awards',
      icon: '🥇',
      bgColor: 'from-[#FFCB69] via-[#FDB847] to-[#F9A826]',
      breakdown: [
        { label: 'Gold', value: '15', emoji: '🥇' },
        { label: 'Silver', value: '18', emoji: '🥈' },
        { label: 'Bronze', value: '17', emoji: '🥉' },
        { label: 'Acrylic', value: '10', emoji: '💎' },
      ]
    },
    {
      id: 13,
      type: 'intro-trophies',
      title: 'But there\'s more...',
      subtitle: 'We also honored the best',
      highlight: 'with trophies',
      bgColor: 'from-[#F9A826] via-[#E89614] to-[#D68310]',
    },
    {
      id: 14,
      type: 'trophies',
      title: 'Trophies Awarded',
      value: '25',
      unit: 'trophies',
      subtitle: 'for outstanding achievements',
      icon: '🏆',
      bgColor: 'from-[#FDB847] via-[#F9A826] to-[#E89614]',
    },
    {
      id: 15,
      type: 'intro-regions-participated',
      title: 'From north to south,',
      subtitle: 'campus journalists gathered',
      highlight: 'from across the nation',
      bgColor: 'from-[#0E8FA8] via-[#1AA8C8] to-[#4DBDD2]',
    },
    {
      id: 16,
      type: 'regions-participated',
      title: 'Regions Participated',
      value: '18',
      unit: 'regions across the Philippines',
      subtitle: 'from all corners of the nation',
      icon: '🗺️',
      bgColor: 'from-[#1AA8C8] via-[#4DBDD2] to-[#80D4E5]',
      regionsList: [
        'NCR', 'CAR', 'CALABARZON', 'MIMAROPA', 'BICOL',
        'WESTERN VISAYAS', 'CENTRAL VISAYAS', 'EASTERN VISAYAS',
        'ZAMBOANGA PENINSULA', 'NORTHERN MINDANAO', 'DAVAO REGION',
        'SOCCSKSARGEN', 'CARAGA', 'ILOCOS', 'CAGAYAN VALLEY',
        'CENTRAL LUZON', 'ARMM', 'BARMM'
      ]
    },
    {
      id: 17,
      type: 'intro-regions',
      title: 'And the standouts?',
      subtitle: 'These regions showed',
      highlight: 'exceptional participation',
      bgColor: 'from-[#006B7D] via-[#1AA8C8] to-[#4DBDD2]',
    },
    {
      id: 18,
      type: 'regions',
      title: 'Top Regions in NCSP',
      subtitle: 'Most active participants by region',
      bgColor: 'from-[#1AA8C8] via-[#4DBDD2] to-[#F9A826]',
      regions: [
        { rank: 1, name: 'NCR', emoji: '🏆' },
        { rank: 2, name: 'CAR', emoji: '🥈' },
        { rank: 3, name: 'CALABARZON', emoji: '🥉' },
      ]
    },
    {
      id: 19,
      type: 'intro-thankyou',
      title: 'To every single one of you',
      subtitle: 'who made this journey meaningful',
      highlight: 'thank you from the bottom of our hearts',
      bgColor: 'from-[#F9A826] via-[#FDB847] to-[#FFCB69]',
    },
    {
      id: 20,
      type: 'message',
      title: 'Your presence made all the difference',
      message: 'Every question you asked, every story you shared, every moment of curiosity—it all contributed to making JournCamp+ 2025 truly special.',
      subtitle: 'This journey was possible because of you.',
      bgColor: 'from-[#1AA8C8] via-[#4DBDD2] to-[#F9A826]',
    },
    {
      id: 21,
      type: 'thankyou',
      title: 'Thank You!',
      subtitle: 'See you next year!',
      message: 'You made this event unforgettable',
      icon: '👋',
      bgColor: 'from-[#006B7D] via-[#1AA8C8] to-[#F9A826]',
    }
  ];

  // Auto-advance to next slide after 5 seconds
  useEffect(() => {
    if (showIntro) return;
    
    const timer = setTimeout(() => {
      if (currentSlide < slides.length - 1) {
        nextSlide();
      }
    }, 5000);
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentSlide, showIntro]);

  const nextSlide = () => {
    if (!isAnimating && currentSlide < slides.length - 1) {
      setIsAnimating(true);
      setCurrentSlide(prev => prev + 1);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (!isAnimating && currentSlide > 0) {
      setIsAnimating(true);
      setCurrentSlide(prev => prev - 1);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handleTapZone = (zone) => {
    if (zone === 'left') {
      prevSlide();
    } else if (zone === 'right') {
      nextSlide();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showIntro) return;
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isAnimating, showIntro]);

  // Enhanced Background Graphics
  const BackgroundGraphics = ({ type }) => {
    const graphics = {
      ribbons: (
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle gradient circles instead of ribbons */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`circle-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${200 + i * 80}px`,
                height: `${200 + i * 80}px`,
                background: `radial-gradient(circle, rgba(255, 255, 255, ${0.15 - i * 0.03}), transparent)`,
                left: `${10 + i * 20}%`,
                top: `${20 + i * 15}%`,
                filter: 'blur(40px)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.7 }}
            />
          ))}
          {/* Corner accents */}
          <motion.div
            className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
      ),
      tunnel: (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {/* 3D Tunnel effect */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`tunnel-${i}`}
              className="absolute"
              style={{
                width: `${95 - i * 9}%`,
                height: `${65 - i * 6}%`,
                background: i % 2 === 0 
                  ? `linear-gradient(135deg, rgba(255, 255, 255, ${0.18 - i * 0.015}), rgba(255, 255, 255, ${0.08 - i * 0.007}))` 
                  : `rgba(255, 255, 255, ${0.12 - i * 0.01})`,
                borderRadius: `${15 + i * 2}%`,
                border: `${3 - i * 0.2}px solid rgba(255, 255, 255, ${0.15 - i * 0.012})`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.04, duration: 0.6 }}
            />
          ))}
          {/* Animated dots */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                left: `${20 + (i % 3) * 30}%`,
                top: `${20 + Math.floor(i / 3) * 60}%`,
              }}
              animate={{ 
                scale: [1, 1.5, 1], 
                opacity: [0.4, 0.8, 0.4] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.3 
              }}
            />
          ))}
        </div>
      ),
      waves: (
        <div className="absolute inset-0 overflow-hidden">
          {/* Layered waves */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute"
              style={{
                width: '160%',
                height: '250px',
                background: `linear-gradient(180deg, transparent, rgba(255, 255, 255, ${0.12 - i * 0.02}))`,
                borderRadius: '50%',
                left: '-30%',
                bottom: `${-120 + i * 60}px`,
                transform: `rotate(${i * 4}deg)`,
              }}
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            />
          ))}
          {/* Floating circles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`circle-${i}`}
              className="absolute rounded-full border-2 border-white/20"
              style={{
                width: `${40 + Math.random() * 60}px`,
                height: `${40 + Math.random() * 60}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      ),
      pixelated: (
        <div className="absolute inset-0 overflow-hidden">
          {/* Pixelated/blocky design */}
          {[...Array(20)].map((_, i) => {
            const size = Math.random() * 80 + 40;
            return (
              <motion.div
                key={`pixel-${i}`}
                className="absolute"
                style={{
                  width: size,
                  height: size,
                  background: `rgba(255, 255, 255, ${0.08 + Math.random() * 0.1})`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  borderRadius: '8px',
                }}
                initial={{ scale: 0, rotate: 0 }}
                animate={{ 
                  scale: [0, 1, 1],
                  rotate: [0, 180, 180],
                }}
                transition={{ 
                  delay: i * 0.05, 
                  duration: 0.5 
                }}
              />
            );
          })}
        </div>
      ),
      glitch: (
        <div className="absolute inset-0 overflow-hidden">
          {/* Glitch-style bars */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`glitch-${i}`}
              className="absolute w-full"
              style={{
                height: `${30 + Math.random() * 40}px`,
                background: `rgba(255, 255, 255, ${0.05 + Math.random() * 0.08})`,
                top: `${i * 16}%`,
                backdropFilter: 'blur(1px)',
              }}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ 
                x: ['100%', '-100%'],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                delay: i * 0.3,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          ))}
        </div>
      ),
    };
    return graphics[type] || graphics.ribbons;
  };

  // Slide transition overlays
  const SlideTransition = () => (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.div>
  );

  const RegionsParticipatedSlide = ({ slide }) => {
    return (
      <motion.div
        className="relative h-full flex flex-col items-center justify-center px-6 py-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BackgroundGraphics type="waves" />

        {/* Floating map pins */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`pin-${i}`}
            className="absolute text-3xl"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              opacity: 0.15,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            📍
          </motion.div>
        ))}

        {/* Main content container */}
        <motion.div
          className="relative z-10 text-center w-full max-w-4xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Header section */}
          <motion.div
            className="mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {slide.icon}
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)]">
              {slide.title}
            </h2>

            {/* Big value showcase */}
            <motion.div
              className="inline-block bg-white rounded-2xl px-8 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] border-[4px] border-black"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            >
              <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#006B7D] to-[#F9A826]">
                {slide.value}
              </div>
              <div className="text-base font-bold text-gray-900 mt-1">
                {slide.unit}
              </div>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl text-white font-bold mt-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {slide.subtitle}
          </motion.p>
        </motion.div>
      </motion.div>
    );
  };

  const WelcomeSlide = ({ slide }) => {
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-center justify-center text-center px-6"
    >
      <BackgroundGraphics type="ribbons" />

      {/* Neobrutalism corner brackets */}
      <motion.div
        className="absolute top-4 left-4 w-10 h-10 border-l-[3px] border-t-[3px] border-black/60"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
      />
      <motion.div
        className="absolute top-4 right-4 w-10 h-10 border-r-[3px] border-t-[3px] border-black/60"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
      />
      <motion.div
        className="absolute bottom-4 left-4 w-10 h-10 border-l-[3px] border-b-[3px] border-black/60"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: 'spring' }}
      />
      <motion.div
        className="absolute bottom-4 right-4 w-10 h-10 border-r-[3px] border-b-[3px] border-black/60"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
      />

      <motion.div
        className="relative z-10 max-w-full"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-black text-white mb-2 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)]"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {slide.title}
        </motion.h2>
        <motion.h1
          className="text-4xl sm:text-5xl font-black text-white mb-2 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {slide.subtitle}
        </motion.h1>
        <motion.div
          className="relative inline-block"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white relative z-10 px-2 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
            {slide.highlight}
          </h1>
          <motion.div
            className="absolute -inset-3 bg-black/30 rounded-2xl -z-10 border-[3px] border-black/40 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
    );
  };

  const IntroSlide = ({ slide }) => {
    const highlightColor = getHighlightColor(slide.bgColor);
    
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-start justify-center px-8 overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />

      {/* Simple geometric accent - corner */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-[3px] border-t-[3px] border-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />

      <motion.div
        className="relative z-10 max-w-md"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Paragraph text - left aligned */}
        <div className="space-y-1">
          {[
            "Here's a look back at",
            'the amazing journey',
            'of our event'
          ].map((line, i) => (
            <motion.p
              key={i}
              className={`text-left font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] ${
                i === 2 
                  ? 'text-4xl sm:text-5xl mt-2 relative' 
                  : 'text-2xl sm:text-3xl text-white'
              }`}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 0.6 + i * 0.15,
                duration: 0.6,
                ease: 'easeOut'
              }}
              style={i === 2 ? {
                WebkitTextStroke: '2px rgba(0,0,0,0.2)',
                paintOrder: 'stroke fill',
              } : {}}
            >
              {i === 2 ? (
                <span className="relative inline-block">
                  {/* Highlighter background with swipe animation */}
                  <motion.span
                    className={`absolute inset-0 ${highlightColor.bg} -z-10`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                  />
                  <span className={`relative z-10 ${highlightColor.text}`}>{line}</span>
                </span>
              ) : (
                line
              )}
            </motion.p>
          ))}
        </div>

        {/* Simple accent line under text */}
        <motion.div
          className="mt-6 w-24 h-1 bg-white/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </motion.div>
    );
  };

  const LearningSlide = ({ slide }) => {
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Unique animated grid background */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, row) => (
          [...Array(4)].map((_, col) => (
            <motion.div
              key={`grid-${row}-${col}`}
              className="absolute border border-white/10"
              style={{
                width: '25%',
                height: '16.66%',
                left: `${col * 25}%`,
                top: `${row * 16.66}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: (row + col) * 0.05,
                duration: 0.4,
              }}
            />
          ))
        ))}
      </div>

      {/* Orbiting circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute rounded-full border-2 border-white/20"
          style={{
            width: `${200 + i * 80}px`,
            height: `${200 + i * 80}px`,
            left: '50%',
            top: '50%',
            marginLeft: `${-(100 + i * 40)}px`,
            marginTop: `${-(100 + i * 40)}px`,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      <motion.div
        className="relative z-10 max-w-full"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
      >
        {/* Main title with typewriter effect simulation */}
        <motion.div className="mb-6">
          <motion.h2
            className="text-4xl sm:text-5xl font-black text-white mb-2 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {slide.title}
          </motion.h2>
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-white/90 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {slide.subtitle}
          </motion.h3>
        </motion.div>

        {/* Duration cards with flip animation */}
        <div className="flex justify-center items-center gap-4">
          {slide.duration.map((item, i) => (
            <motion.div
              key={item.label}
              className="relative"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{
                delay: 0.9 + i * 0.2,
                duration: 0.6,
                type: 'spring',
              }}
              style={{ perspective: 1000 }}
            >
              {/* Card with 3D effect */}
              <motion.div
                className="relative bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-md rounded-2xl p-6 border-[4px] border-black/30 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] min-w-[120px]"
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 },
                }}
              >
                {/* Icon with bounce animation */}
                <motion.div
                  className="text-4xl mb-2 filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  {item.icon}
                </motion.div>
                
                {/* Value with counting animation effect */}
                <motion.div
                  className="text-5xl sm:text-6xl font-black text-gray-900 mb-1 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.15)]"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 1.1 + i * 0.2, duration: 0.5 }}
                  style={{
                    WebkitTextStroke: '2px rgba(0,0,0,0.1)',
                    paintOrder: 'stroke fill',
                  }}
                >
                  {item.value}
                </motion.div>
                
                <div className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  {item.label}
                </div>

                {/* Animated corner accents */}
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-1 w-4 h-4 bg-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5 + i * 0.4,
                  }}
                />

                {/* Shimmer effect overlay */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/40 to-transparent"
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: '200%', opacity: [0, 1, 0] }}
                  transition={{
                    delay: 1.5 + i * 0.3,
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating text particles */}
        {['Learn', 'Grow', 'Excel', 'Inspire'].map((word, i) => (
          <motion.div
            key={`word-${i}`}
            className="absolute text-white/20 font-bold text-lg"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {word}
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom wave accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </motion.div>
    );
  };

  const RuntimeSlide = ({ slide }) => {
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-center justify-center text-center px-6"
    >
      <BackgroundGraphics type="waves" />

      {/* Decorative lines with neobrutalism */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-white/80 shadow-[0_2px_0px_0px_rgba(0,0,0,0.3)]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />

      <motion.div
        className="relative z-10 w-full max-w-sm px-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="text-4xl sm:text-5xl mb-3 filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
        >
          {slide.icon}
        </motion.div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)]">{slide.title}</h2>

        <motion.div
          className="relative inline-block mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
        >
          <div className="text-5xl sm:text-6xl font-black text-white mb-1 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.5)]" style={{
            WebkitTextStroke: '2px rgba(0,0,0,0.3)',
            paintOrder: 'stroke fill',
          }}>{slide.value}</div>
          <div className="text-lg sm:text-xl font-semibold text-white/90 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">{slide.unit}</div>
          
          {/* Glowing effect with neobrutalism box */}
          <motion.div
            className="absolute -inset-3 bg-black/30 blur-lg -z-10 rounded-2xl border-[3px] border-black/40"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Daily Breakdown */}
        <motion.div
          className="grid grid-cols-2 gap-2.5 max-w-xs mx-auto mt-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {slide.breakdown.map((day, i) => (
            <motion.div
              key={i}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border-[3px] border-black/20 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.25)] relative overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              {/* Card shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%', y: '-100%' }}
                animate={{ x: '100%', y: '100%' }}
                transition={{ delay: 1 + i * 0.1, duration: 1 }}
              />
              <div className="text-xs font-bold text-gray-700 mb-0.5">{day.label}</div>
              <div className="text-2xl sm:text-2xl font-black text-gray-900 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">{day.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
    );
  };

  const TopLecturesSlide = ({ slide }) => {
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-center justify-center px-8 overflow-hidden"
    >
      <BackgroundGraphics type="waves" />

      {/* Title */}
      <motion.div
        className="text-center mb-6 z-10"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold text-white mb-1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {slide.title}
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-white/80 font-semibold"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {slide.subtitle}
        </motion.p>
      </motion.div>

      {/* Top 3 Lectures */}
      <div className="relative z-10 w-full max-w-[340px] space-y-3">
        {slide.lectures.map((lecture, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] border-[3px] border-black"
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.5 + index * 0.15,
              duration: 0.6,
              type: 'spring',
              damping: 15
            }}
            whileHover={{ scale: 1.03, y: -3 }}
          >
            <div className="flex items-start gap-3">
              {/* Rank badge */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div 
                  className="text-4xl sm:text-5xl font-black"
                  style={{
                    background: index === 0 
                      ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
                      : index === 1
                      ? 'linear-gradient(135deg, #C0C0C0 0%, #808080 100%)'
                      : 'linear-gradient(135deg, #CD7F32 0%, #8B4513 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    WebkitTextStroke: '1px rgba(0,0,0,0.2)',
                    filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.2))'
                  }}
                >
                  #{lecture.rank}
                </div>
              </div>

              {/* Lecture info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-black text-gray-900 leading-tight mb-1 line-clamp-2">
                  {lecture.title}
                </h3>
                <p className="text-xs font-bold text-gray-600 mb-1">
                  by {lecture.speaker}
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-purple-600">
                    👁️ {lecture.views} views
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
    );
  };

  const IntroToStatsSlide = ({ slide }) => {
    const highlightColor = getHighlightColor(slide.bgColor);
    
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-start justify-center px-8 overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />

      {/* Simple geometric accent - corner */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-[3px] border-t-[3px] border-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />

      <motion.div
        className="relative z-10 max-w-md"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Paragraph text - left aligned */}
        <div className="space-y-1">
          {[
            "But that's not all...",
            "Let's talk about",
            'the amazing people',
            'who made it happen'
          ].map((line, i) => (
            <motion.p
              key={i}
              className={`text-left font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] ${
                i === 3 
                  ? 'text-4xl sm:text-5xl mt-2 relative' 
                  : 'text-2xl sm:text-3xl text-white'
              }`}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 0.6 + i * 0.15,
                duration: 0.6,
                ease: 'easeOut'
              }}
              style={i === 3 ? {
                WebkitTextStroke: '2px rgba(0,0,0,0.2)',
                paintOrder: 'stroke fill',
              } : {}}
            >
              {i === 3 ? (
                <span className="relative inline-block">
                  <motion.span
                    className={`absolute inset-0 ${highlightColor.bg} -z-10`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.15, duration: 0.6, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                  />
                  <span className={`relative z-10 ${highlightColor.text}`}>{line}</span>
                </span>
              ) : (
                line
              )}
            </motion.p>
          ))}
        </div>

        {/* Simple accent line under text */}
        <motion.div
          className="mt-6 w-24 h-1 bg-white/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.3, duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </motion.div>
    );
  };

  const IntroToNCSPSlide = ({ slide }) => {
    const highlightColor = getHighlightColor(slide.bgColor);
    
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-start justify-center px-8 overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />

      {/* Simple geometric accent - corner */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-[3px] border-t-[3px] border-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />

      <motion.div
        className="relative z-10 max-w-md"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Paragraph text - left aligned */}
        <div className="space-y-1">
          {[
            'Among these participants',
            'are courageous campus journalists',
            'that tried to prove that they are',
            'true champions'
          ].map((line, i) => (
            <motion.p
              key={i}
              className={`text-left font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] ${
                i === 3 
                  ? 'text-4xl sm:text-5xl mt-2 relative' 
                  : 'text-2xl sm:text-3xl text-white'
              }`}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 0.6 + i * 0.15,
                duration: 0.6,
                ease: 'easeOut'
              }}
              style={i === 3 ? {
                WebkitTextStroke: '2px rgba(0,0,0,0.2)',
                paintOrder: 'stroke fill',
              } : {}}
            >
              {i === 3 ? (
                <span className="relative inline-block">
                  <motion.span
                    className={`absolute inset-0 ${highlightColor.bg} -z-10`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.15, duration: 0.6, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                  />
                  <span className={`relative z-10 ${highlightColor.text}`}>{line}</span>
                </span>
              ) : (
                line
              )}
            </motion.p>
          ))}
        </div>

        {/* Simple accent line under text */}
        <motion.div
          className="mt-6 w-24 h-1 bg-white/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.3, duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </motion.div>
    );
  };

  const IntroToMedalsSlide = ({ slide }) => {
    const highlightColor = getHighlightColor(slide.bgColor);
    
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-start justify-center px-8 overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />

      {/* Simple geometric accent - corner */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-[3px] border-t-[3px] border-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />

      <motion.div
        className="relative z-10 max-w-md"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Paragraph text - left aligned */}
        <div className="space-y-1">
          {[
            'And the best part?',
            'We celebrated excellence',
            'with medals and awards'
          ].map((line, i) => (
            <motion.p
              key={i}
              className={`text-left font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] ${
                i === 2 
                  ? 'text-4xl sm:text-5xl mt-2 relative' 
                  : 'text-2xl sm:text-3xl text-white'
              }`}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 0.6 + i * 0.15,
                duration: 0.6,
                ease: 'easeOut'
              }}
              style={i === 2 ? {
                WebkitTextStroke: '2px rgba(0,0,0,0.2)',
                paintOrder: 'stroke fill',
              } : {}}
            >
              {i === 2 ? (
                <span className="relative inline-block">
                  <motion.span
                    className={`absolute inset-0 ${highlightColor.bg} -z-10`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                  />
                  <span className={`relative z-10 ${highlightColor.text}`}>{line}</span>
                </span>
              ) : (
                line
              )}
            </motion.p>
          ))}
        </div>

        {/* Simple accent line under text */}
        <motion.div
          className="mt-6 w-24 h-1 bg-white/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </motion.div>
    );
  };

  const IntroToRuntimeSlide = ({ slide }) => {
    const highlightColor = getHighlightColor(slide.bgColor);
    
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-start justify-center px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-[3px] border-t-[3px] border-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />
      <motion.div
        className="relative z-10 max-w-md"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="space-y-1">
          {["Let's break down", 'the time we spent', 'learning together'].map((line, i) => (
            <motion.p
              key={i}
              className={`text-left font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] ${
                i === 2 ? 'text-4xl sm:text-5xl mt-2 relative' : 'text-2xl sm:text-3xl text-white'
              }`}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
              style={i === 2 ? { WebkitTextStroke: '2px rgba(0,0,0,0.2)', paintOrder: 'stroke fill' } : {}}
            >
              {i === 2 ? (
                <span className="relative inline-block">
                  <motion.span
                    className={`absolute inset-0 ${highlightColor.bg} -z-10`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                  />
                  <span className={`relative z-10 ${highlightColor.text}`}>{line}</span>
                </span>
              ) : (
                line
              )}
            </motion.p>
          ))}
        </div>
        <motion.div
          className="mt-6 w-24 h-1 bg-white/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </motion.div>
    );
  };

  const IntroToLecturesSlide = ({ slide }) => {
    const highlightColor = getHighlightColor(slide.bgColor);
    
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-start justify-center px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-[3px] border-t-[3px] border-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />
      <motion.div
        className="relative z-10 max-w-md"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="space-y-1">
          {['What did you watch?', 'Here are the lectures', 'everyone loved'].map((line, i) => (
            <motion.p
              key={i}
              className={`text-left font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] ${
                i === 2 ? 'text-4xl sm:text-5xl mt-2 relative' : 'text-2xl sm:text-3xl text-white'
              }`}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
              style={i === 2 ? { WebkitTextStroke: '2px rgba(0,0,0,0.2)', paintOrder: 'stroke fill' } : {}}
            >
              {i === 2 ? (
                <span className="relative inline-block">
                  <motion.span
                    className={`absolute inset-0 ${highlightColor.bg} -z-10`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                  />
                  <span className={`relative z-10 ${highlightColor.text}`}>{line}</span>
                </span>
              ) : (
                line
              )}
            </motion.p>
          ))}
        </div>
        <motion.div
          className="mt-6 w-24 h-1 bg-white/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </motion.div>
    );
  };

  const IntroToTrophiesSlide = ({ slide }) => {
    const highlightColor = getHighlightColor(slide.bgColor);
    
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-start justify-center px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-[3px] border-t-[3px] border-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />
      <motion.div
        className="relative z-10 max-w-md"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="space-y-1">
          {["But there's more...", 'We also honored the best', 'with championship trophies'].map((line, i) => (
            <motion.p
              key={i}
              className={`text-left font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] ${
                i === 2 ? 'text-4xl sm:text-5xl mt-2 relative' : 'text-2xl sm:text-3xl text-white'
              }`}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
              style={i === 2 ? { WebkitTextStroke: '2px rgba(0,0,0,0.2)', paintOrder: 'stroke fill' } : {}}
            >
              {i === 2 ? (
                <span className="relative inline-block">
                  <motion.span
                    className={`absolute inset-0 ${highlightColor.bg} -z-10`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                  />
                  <span className={`relative z-10 ${highlightColor.text}`}>{line}</span>
                </span>
              ) : (
                line
              )}
            </motion.p>
          ))}
        </div>
        <motion.div
          className="mt-6 w-24 h-1 bg-white/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </motion.div>
    );
  };

  const IntroToRegionsParticipatedSlide = ({ slide }) => {
    const highlightColor = getHighlightColor(slide.bgColor);
    
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-start justify-center px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-[3px] border-t-[3px] border-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />
      <motion.div
        className="relative z-10 max-w-md"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="space-y-1">
          {['From north to south', 'campus journalists gathered', 'from across the nation'].map((line, i) => (
            <motion.p
              key={i}
              className={`text-left font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] ${
                i === 2 ? 'text-4xl sm:text-5xl mt-2 relative' : 'text-2xl sm:text-3xl text-white'
              }`}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
              style={i === 2 ? { WebkitTextStroke: '2px rgba(0,0,0,0.2)', paintOrder: 'stroke fill' } : {}}
            >
              {i === 2 ? (
                <span className="relative inline-block">
                  <motion.span
                    className={`absolute inset-0 ${highlightColor.bg} -z-10`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                  />
                  <span className={`relative z-10 ${highlightColor.text}`}>{line}</span>
                </span>
              ) : (
                line
              )}
            </motion.p>
          ))}
        </div>
        <motion.div
          className="mt-6 w-24 h-1 bg-white/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </motion.div>
    );
  };

  const IntroToRegionsSlide = ({ slide }) => {
    const highlightColor = getHighlightColor(slide.bgColor);
    
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-start justify-center px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-[3px] border-t-[3px] border-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />
      <motion.div
        className="relative z-10 max-w-md"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="space-y-1">
          {['And the standouts?', 'These regions showed', 'exceptional participation'].map((line, i) => (
            <motion.p
              key={i}
              className={`text-left font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] ${
                i === 2 ? 'text-4xl sm:text-5xl mt-2 relative' : 'text-2xl sm:text-3xl text-white'
              }`}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
              style={i === 2 ? { WebkitTextStroke: '2px rgba(0,0,0,0.2)', paintOrder: 'stroke fill' } : {}}
            >
              {i === 2 ? (
                <span className="relative inline-block">
                  <motion.span
                    className={`absolute inset-0 ${highlightColor.bg} -z-10`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                  />
                  <span className={`relative z-10 ${highlightColor.text}`}>{line}</span>
                </span>
              ) : (
                line
              )}
            </motion.p>
          ))}
        </div>
        <motion.div
          className="mt-6 w-24 h-1 bg-white/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </motion.div>
    );
  };

  const IntroToThankYouSlide = ({ slide }) => {
    const highlightColor = getHighlightColor(slide.bgColor);
    
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-start justify-center px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-[3px] border-t-[3px] border-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />
      <motion.div
        className="relative z-10 max-w-md"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="space-y-1">
          {['To every single one of you', 'who made this journey meaningful', 'thank you from the bottom of our hearts'].map((line, i) => (
            <motion.p
              key={i}
              className={`text-left font-bold drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] ${
                i === 2 ? 'text-3xl sm:text-4xl mt-2 relative' : 'text-2xl sm:text-3xl text-white'
              }`}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.6, ease: 'easeOut' }}
              style={i === 2 ? { WebkitTextStroke: '2px rgba(0,0,0,0.2)', paintOrder: 'stroke fill' } : {}}
            >
              {i === 2 ? (
                <span className="relative inline-block">
                  <motion.span
                    className={`absolute inset-0 ${highlightColor.bg} -z-10`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.6, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                  />
                  <span className={`relative z-10 ${highlightColor.text}`}>{line}</span>
                </span>
              ) : (
                line
              )}
            </motion.p>
          ))}
        </div>
        <motion.div
          className="mt-6 w-24 h-1 bg-white/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </motion.div>
    );
  };

  const StatSlide = ({ slide }) => {
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-center justify-center text-center px-6"
    >
      <BackgroundGraphics type="ribbons" />
      
      {/* Animated border pulse with neobrutalism */}
      <motion.div
        className="absolute inset-6 border-[3px] border-white/30 rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]"
        animate={{ 
          scale: [1, 1.01, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        className="relative z-10 max-w-full"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Intro text if present */}
        {slide.intro && (
          <motion.p
            className="text-lg sm:text-xl font-semibold text-white/80 mb-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {slide.intro}
          </motion.p>
        )}

        <motion.div
          className="text-5xl sm:text-6xl mb-4 relative filter drop-shadow-[3px_3px_0px_rgba(0,0,0,0.3)]"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
        >
          {slide.icon}
          {/* Icon glow */}
          <motion.div
            className="absolute inset-0 blur-xl opacity-40"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {slide.icon}
          </motion.div>
        </motion.div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)]">{slide.title}</h2>

        <motion.div
          className="relative inline-block"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 150 }}
        >
          <motion.div
            className="text-6xl sm:text-7xl font-black text-white mb-1 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]"
            style={{
              WebkitTextStroke: '2px rgba(0,0,0,0.3)',
              paintOrder: 'stroke fill',
            }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {slide.value}
          </motion.div>
          {/* Background box with neobrutalism */}
          <motion.div
            className="absolute -inset-4 bg-black/30 rounded-2xl -z-10 border-[3px] border-black/40 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
            initial={{ scale: 0, rotate: -3 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5 }}
          />
        </motion.div>

        <p className="text-lg sm:text-xl font-semibold text-white/90 mt-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">{slide.unit}</p>
        <p className="text-sm sm:text-base font-medium text-white/70 mt-2 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.2)]">{slide.subtitle}</p>
      </motion.div>
    </motion.div>
    );
  };

  const MedalsSlide = ({ slide }) => {
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-center justify-center text-center px-8"
    >
      <BackgroundGraphics type="pixelated" />

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      />

      <motion.div
        className="relative z-10 w-full"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="text-4xl sm:text-5xl mb-3 filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
        >
          {slide.icon}
        </motion.div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.4)]">{slide.title}</h2>

        <motion.div
          className="relative inline-block mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
        >
          <div className="text-6xl sm:text-7xl font-black text-white mb-1 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.5)]" style={{
            WebkitTextStroke: '2px rgba(0,0,0,0.3)',
            paintOrder: 'stroke fill',
          }}>{slide.value}</div>
          <div className="text-lg sm:text-xl font-semibold text-white/90 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">{slide.unit}</div>
        </motion.div>

        {/* Medal Breakdown */}
        <motion.div
          className="flex justify-center gap-2.5 max-w-sm mx-auto mt-4 px-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {slide.breakdown.map((medal, i) => (
            <motion.div
              key={i}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-3 border-[3px] border-black/20 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.25)] flex-1 relative overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all"
              initial={{ scale: 0, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Ranking badge with neobrutalism */}
              <motion.div
                className="absolute -top-1 -right-1 w-5 h-5 bg-black/80 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                {i + 1}
              </motion.div>
              <div className="text-2xl sm:text-3xl mb-1">{medal.emoji}</div>
              <div className="text-2xl sm:text-3xl font-black text-gray-900 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">{medal.value}</div>
              <div className="text-xs font-bold text-gray-700 mt-0.5">{medal.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
    );
  };

  const RegionsSlide = ({ slide }) => {
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-center justify-center text-center px-6 py-6"
    >
      <BackgroundGraphics type="glitch" />

      {/* Decorative top bar with neobrutalism */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/50 to-transparent border-b-[3px] border-black/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
      />

      <motion.div
        className="relative z-10 w-full max-w-sm"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className="mb-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.1 }}
        >
          <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border-2 border-white/40 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
            <span className="text-xs font-bold text-white uppercase tracking-wider drop-shadow-[1px_1px_0px_rgba(0,0,0,0.3)]">Regional Insights</span>
          </div>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-black text-white mb-1 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)]">{slide.title}</h2>
        <p className="text-sm sm:text-base font-medium text-white/80 mb-6 drop-shadow-[1px_1px_0px_rgba(0,0,0,0.2)]">{slide.subtitle}</p>

        <div className="space-y-3 max-w-sm mx-auto px-2">
          {slide.regions.map((region, i) => (
            <motion.div
              key={i}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border-[3px] border-black/20 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.25)] flex items-center justify-between relative overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ delay: 1 + i * 0.2, duration: 1.5 }}
              />

              <div className="flex items-center gap-3 z-10">
                <motion.div
                  className="text-3xl sm:text-4xl filter drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                >
                  {region.emoji}
                </motion.div>
                <div className="text-left">
                  <div className="text-xs font-bold text-gray-700">Rank {region.rank}</div>
                  <div className="text-xl sm:text-2xl font-black text-gray-900 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">{region.name}</div>
                </div>
              </div>
              <motion.div
                className="text-4xl sm:text-5xl font-black text-black/20 z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                {region.rank}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
    );
  };

  const MessageSlide = ({ slide }) => {
    const highlightColor = getHighlightColor(slide.bgColor);
    
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full flex flex-col items-start justify-center px-8 overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />

      {/* Simple geometric accent - corner */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-[3px] border-t-[3px] border-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />

      <motion.div
        className="relative z-10 max-w-2xl"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Paragraph text - left aligned */}
        <div className="space-y-4">
          <motion.h1
            className="text-3xl sm:text-4xl font-black text-white text-left drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)]"
            style={{
              WebkitTextStroke: '2px rgba(0,0,0,0.2)',
              paintOrder: 'stroke fill',
            }}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {slide.title}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl font-medium text-white/95 text-left leading-relaxed drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {slide.message}
          </motion.p>

          <motion.p
            className="text-2xl sm:text-3xl font-bold text-left drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)] pt-2 relative inline-block"
            style={{
              WebkitTextStroke: '1px rgba(0,0,0,0.2)',
              paintOrder: 'stroke fill',
            }}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.span
              className={`absolute inset-0 ${highlightColor.bg} -z-10 rounded`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              style={{ transformOrigin: 'left' }}
            />
            <span className={`relative z-10 ${highlightColor.text}`}>{slide.subtitle}</span>
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
    );
  };

  const ThankYouSlide = ({ slide }) => {
    const generateShareImage = async () => {
      try {
        // Create a hidden container for the share image
        const shareContainer = document.createElement('div');
        shareContainer.style.position = 'fixed';
        shareContainer.style.left = '-9999px';
        shareContainer.style.width = '1080px';
        shareContainer.style.height = '1920px';
        shareContainer.style.background = 'linear-gradient(135deg, #006B7D 0%, #1AA8C8 50%, #F9A826 100%)';
        shareContainer.style.fontFamily = "'Montserrat', sans-serif";
        shareContainer.style.padding = '80px 60px';
        shareContainer.style.display = 'flex';
        shareContainer.style.flexDirection = 'column';
        shareContainer.style.justifyContent = 'space-between';
        shareContainer.style.position = 'relative';
        shareContainer.style.overflow = 'hidden';

        shareContainer.innerHTML = `
          <!-- Colorful gradient blobs in background (Brand colors) -->
          <div style="position: absolute; width: 600px; height: 600px; background: linear-gradient(135deg, #006B7D 0%, #0E8FA8 100%); border-radius: 50%; top: -200px; left: -150px; opacity: 0.4; filter: blur(80px);"></div>
          <div style="position: absolute; width: 500px; height: 500px; background: linear-gradient(135deg, #1AA8C8 0%, #4DBDD2 100%); border-radius: 50%; top: 200px; right: -100px; opacity: 0.3; filter: blur(100px);"></div>
          <div style="position: absolute; width: 450px; height: 450px; background: linear-gradient(135deg, #F9A826 0%, #FFCB69 100%); border-radius: 50%; bottom: -100px; left: 100px; opacity: 0.3; filter: blur(90px);"></div>

          <!-- Decorative shapes -->
          <div style="position: absolute; width: 300px; height: 300px; border: 8px solid rgba(0,0,0,0.15); border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; top: 100px; right: 50px; transform: rotate(45deg);"></div>
          <div style="position: absolute; width: 200px; height: 200px; background: rgba(255,255,255,0.1); border-radius: 50%; bottom: 300px; left: -50px;"></div>
          <div style="position: absolute; width: 0; height: 0; border-left: 150px solid transparent; border-right: 150px solid transparent; border-bottom: 200px solid rgba(0,0,0,0.08); top: 50%; right: -80px; transform: rotate(25deg);"></div>

          <div style="position: relative; z-index: 1;">
            <!-- Header -->
            <div style="margin-bottom: 50px;">
              <h1 style="font-size: 110px; font-weight: 900; color: #000; margin: 0; line-height: 0.9; letter-spacing: -3px;">Your</h1>
              <h1 style="font-size: 110px; font-weight: 900; color: #000; margin: 0; line-height: 0.9; letter-spacing: -3px;">JournCamp</h1>
              <h1 style="font-size: 110px; font-weight: 900; color: #000; margin: 0; line-height: 0.9; letter-spacing: -3px;">Wrapped</h1>
              <p style="font-size: 42px; font-weight: 700; color: #000; margin: 20px 0 0 0; opacity: 0.8;">2025</p>
            </div>

            <!-- Personal message -->
            <div style="background: rgba(0,0,0,0.18); backdrop-filter: blur(10px); padding: 28px 32px; border-radius: 12px; margin-bottom: 40px; text-align: center;">
              <p style="font-size: 24px; font-weight: 700; color: #000; margin: 0; line-height: 1.5; opacity: 0.9;">I am one of the <span style="font-weight: 900; font-size: 28px;">1,500+</span> attendees who joined this year's JournCamp+</p>
            </div>

            <!-- Stats in Spotify-style layout -->
            <div style="margin-bottom: 35px;">
              <!-- Top Stats -->
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 18px;">
                <div style="background: rgba(0,0,0,0.15); backdrop-filter: blur(10px); padding: 30px 28px; border-radius: 12px;">
                  <p style="font-size: 24px; font-weight: 700; color: #000; margin: 0 0 6px 0; opacity: 0.9;">Total Hours</p>
                  <h2 style="font-size: 80px; font-weight: 900; color: #000; margin: 0; line-height: 0.9;">120</h2>
                </div>
                <div style="background: rgba(0,0,0,0.15); backdrop-filter: blur(10px); padding: 30px 28px; border-radius: 12px;">
                  <p style="font-size: 24px; font-weight: 700; color: #000; margin: 0 0 6px 0; opacity: 0.9;">NCPS Participants</p>
                  <h2 style="font-size: 80px; font-weight: 900; color: #000; margin: 0; line-height: 0.9;">300</h2>
                </div>
              </div>

              <!-- Middle Stats Grid -->
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 18px;">
                <div style="background: rgba(0,0,0,0.12); backdrop-filter: blur(8px); padding: 26px 16px 30px 16px; border-radius: 10px; text-align: center;">
                  <p style="font-size: 17px; font-weight: 700; color: #000; margin: 0 0 6px 0; opacity: 0.85;">Medals</p>
                  <h3 style="font-size: 56px; font-weight: 900; color: #000; margin: 0; line-height: 1;">50</h3>
                </div>
                <div style="background: rgba(0,0,0,0.12); backdrop-filter: blur(8px); padding: 26px 16px 30px 16px; border-radius: 10px; text-align: center;">
                  <p style="font-size: 17px; font-weight: 700; color: #000; margin: 0 0 6px 0; opacity: 0.85;">Trophies</p>
                  <h3 style="font-size: 56px; font-weight: 900; color: #000; margin: 0; line-height: 1;">25</h3>
                </div>
                <div style="background: rgba(0,0,0,0.12); backdrop-filter: blur(8px); padding: 26px 16px 30px 16px; border-radius: 10px; text-align: center;">
                  <p style="font-size: 17px; font-weight: 700; color: #000; margin: 0 0 6px 0; opacity: 0.85;">Regions</p>
                  <h3 style="font-size: 56px; font-weight: 900; color: #000; margin: 0; line-height: 1;">18</h3>
                </div>
                <div style="background: rgba(0,0,0,0.12); backdrop-filter: blur(8px); padding: 26px 16px 30px 16px; border-radius: 10px; text-align: center;">
                  <p style="font-size: 17px; font-weight: 700; color: #000; margin: 0 0 6px 0; opacity: 0.85;">Days</p>
                  <h3 style="font-size: 56px; font-weight: 900; color: #000; margin: 0; line-height: 1;">4</h3>
                </div>
              </div>

              <!-- Top Lectures -->
              <div style="background: rgba(0,0,0,0.15); backdrop-filter: blur(10px); padding: 30px 32px 34px 32px; border-radius: 12px; margin-bottom: 18px;">
                <p style="font-size: 24px; font-weight: 700; color: #000; margin: 0 0 18px 0; opacity: 0.9;">Top Watched Lectures</p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="font-size: 28px; font-weight: 900; color: #000; opacity: 0.6; min-width: 30px;">1</div>
                    <div style="flex: 1;">
                      <div style="font-size: 20px; font-weight: 900; color: #000; line-height: 1.3;">Media Ethics & Responsibility</div>
                      <div style="font-size: 15px; font-weight: 600; color: #000; opacity: 0.7; margin-top: 3px;">Maria Santos</div>
                    </div>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="font-size: 28px; font-weight: 900; color: #000; opacity: 0.6; min-width: 30px;">2</div>
                    <div style="flex: 1;">
                      <div style="font-size: 20px; font-weight: 900; color: #000; line-height: 1.3;">Digital Journalism in 2024</div>
                      <div style="font-size: 15px; font-weight: 600; color: #000; opacity: 0.7; margin-top: 3px;">John Cruz</div>
                    </div>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="font-size: 28px; font-weight: 900; color: #000; opacity: 0.6; min-width: 30px;">3</div>
                    <div style="flex: 1;">
                      <div style="font-size: 20px; font-weight: 900; color: #000; line-height: 1.3;">Investigative Reporting</div>
                      <div style="font-size: 15px; font-weight: 600; color: #000; opacity: 0.7; margin-top: 3px;">Ana Reyes</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Top Regions -->
              <div style="background: rgba(0,0,0,0.15); backdrop-filter: blur(10px); padding: 30px 32px 34px 32px; border-radius: 12px;">
                <p style="font-size: 24px; font-weight: 700; color: #000; margin: 0 0 18px 0; opacity: 0.9;">Top Regions</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
                  <div style="text-align: center;">
                    <div style="font-size: 30px; font-weight: 900; color: #000; margin-bottom: 6px; opacity: 0.6;">1</div>
                    <div style="font-size: 24px; font-weight: 900; color: #000; line-height: 1.3;">NCR</div>
                  </div>
                  <div style="text-align: center;">
                    <div style="font-size: 30px; font-weight: 900; color: #000; margin-bottom: 6px; opacity: 0.6;">2</div>
                    <div style="font-size: 24px; font-weight: 900; color: #000; line-height: 1.3;">CAR</div>
                  </div>
                  <div style="text-align: center;">
                    <div style="font-size: 30px; font-weight: 900; color: #000; margin-bottom: 6px; opacity: 0.6;">3</div>
                    <div style="font-size: 24px; font-weight: 900; color: #000; line-height: 1.3;">CALABARZON</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer with branding (Spotify style) -->
          <div style="display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 1;">
            <div style="display: flex; align-items: center;">
              <img src="/journcamp.png" alt="JournCamp+" style="height: 48px; object-fit: contain;" />
            </div>
            <div style="text-align: right;">
              <p style="font-size: 28px; font-weight: 700; color: #000; margin: 0; opacity: 0.9; letter-spacing: 1px;">#JourncampWrapped</p>
            </div>
          </div>
        `;

        document.body.appendChild(shareContainer);

        // Wait a bit for fonts and rendering
        await new Promise(resolve => setTimeout(resolve, 100));

        // Use html2canvas to capture the share container
        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(shareContainer, {
          backgroundColor: null,
          scale: 2,
          logging: false,
          useCORS: true,
          width: 1080,
          height: 1920,
          windowWidth: 1080,
          windowHeight: 1920,
        });

        // Remove the temporary container
        document.body.removeChild(shareContainer);

        // Convert to blob and download
        canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'journcamp-wrapped-2024.png';
          link.click();
          URL.revokeObjectURL(url);
        });
      } catch (error) {
        console.error('Error generating share image:', error);
        alert('Unable to generate image. Please try again.');
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative h-full flex flex-col items-center justify-center text-center px-6"
      >
      <BackgroundGraphics type="ribbons" />

      {/* Sparkle particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            fontSize: `${12 + Math.random() * 12}px`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        >
          ✨
        </motion.div>
      ))}

      <motion.div
        className="relative z-10 max-w-md flex flex-col items-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Large emoji */}
        <motion.div
          className="text-8xl mb-8 filter drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
        >
          {slide.icon}
        </motion.div>

        {/* Thank You text with beautiful glow */}
        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-8 relative"
          style={{
            WebkitTextStroke: '3px rgba(0,0,0,0.3)',
            paintOrder: 'stroke fill',
            filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.5))'
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
        >
          Thank You!
          {/* Animated glow */}
          <motion.span
            className="absolute inset-0 blur-2xl opacity-40"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Thank You!
          </motion.span>
        </motion.h1>

        {/* Share Button */}
        <motion.button
          onClick={generateShareImage}
          className="mb-6 px-10 py-5 bg-white text-gray-900 font-black text-xl rounded-2xl border-[5px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all active:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-1"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center gap-3">
            <span className="text-2xl">📸</span>
            <span>Share Your Wrapped</span>
          </span>
        </motion.button>

        {/* Link below */}
        <motion.a
          href="https://journcamp.explained.ph/wrapped"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-bold text-white/90 hover:text-white underline decoration-2 underline-offset-4 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)] transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          journcamp.explained.ph/wrapped
        </motion.a>
      </motion.div>
    </motion.div>
    );
  };

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'welcome':
        return <WelcomeSlide slide={slide} />;
      case 'intro':
        return <IntroSlide slide={slide} />;
      case 'learning':
        return <LearningSlide slide={slide} />;
      case 'intro-runtime':
        return <IntroToRuntimeSlide slide={slide} />;
      case 'runtime':
        return <RuntimeSlide slide={slide} />;
      case 'intro-lectures':
        return <IntroToLecturesSlide slide={slide} />;
      case 'top-lectures':
        return <TopLecturesSlide slide={slide} />;
      case 'intro-stats':
        return <IntroToStatsSlide slide={slide} />;
      case 'intro-ncsp':
        return <IntroToNCSPSlide slide={slide} />;
      case 'intro-medals':
        return <IntroToMedalsSlide slide={slide} />;
      case 'stat':
        return <StatSlide slide={slide} />;
      case 'medals':
        return <MedalsSlide slide={slide} />;
      case 'intro-trophies':
        return <IntroToTrophiesSlide slide={slide} />;
      case 'trophies':
        return <StatSlide slide={slide} />;
      case 'intro-regions-participated':
        return <IntroToRegionsParticipatedSlide slide={slide} />;
      case 'regions-participated':
        return <RegionsParticipatedSlide slide={slide} />;
      case 'intro-regions':
        return <IntroToRegionsSlide slide={slide} />;
      case 'regions':
        return <RegionsSlide slide={slide} />;
      case 'intro-thankyou':
        return <IntroToThankYouSlide slide={slide} />;
      case 'message':
        return <MessageSlide slide={slide} />;
      case 'thankyou':
        return <ThankYouSlide slide={slide} />;
      default:
        return null;
    }
  };

  // Intro Page
  if (showIntro) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#006B7D] via-[#1AA8C8] to-[#F9A826] px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <motion.div
          className="text-center max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl font-black text-white mb-6 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.4)]"
            style={{
              WebkitTextStroke: '2px rgba(0,0,0,0.3)',
              paintOrder: 'stroke fill',
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            JournCamp+ 2025
          </motion.h1>
          
          <motion.p
            className="text-2xl sm:text-3xl font-bold text-white mb-8 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Do you want to know what happened during the event?
          </motion.p>
          
          <motion.button
            onClick={() => setShowIntro(false)}
            className="bg-white text-gray-900 px-8 py-4 rounded-full text-xl font-black uppercase tracking-wider border-[4px] border-black/30 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.4)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See Your Wrapped
          </motion.button>
          
          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`intro-particle-${i}`}
              className="absolute w-2 h-2 bg-white/60 rounded-full"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-6 px-4 min-h-screen bg-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] border-[4px] border-gray-800"
        style={{
          boxShadow: '8px 8px 0px 0px rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgColor}`}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {renderSlide(slides[currentSlide])}
          </motion.div>
        </AnimatePresence>

        {/* Tap zones for navigation - invisible but clickable */}
        {currentSlide > 0 && (
          <div
            onClick={() => handleTapZone('left')}
            className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer z-20"
            style={{ touchAction: 'manipulation' }}
          />
        )}
        
        {currentSlide < slides.length - 1 && (
          <div
            onClick={() => handleTapZone('right')}
            className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer z-20"
            style={{ touchAction: 'manipulation' }}
          />
        )}

        {/* Slide indicators with neobrutalism */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentSlide(index);
                  setTimeout(() => setIsAnimating(false), 600);
                }
              }}
              className={`h-1.5 rounded-full transition-all border-2 ${
                index === currentSlide
                  ? 'w-6 bg-white border-black/30 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]'
                  : 'w-1.5 bg-white/60 border-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      <p className="mt-4 text-white/60 text-xs sm:text-sm text-center max-w-md px-4">
        Tap left/right to navigate • Auto-advances in 5s • {currentSlide + 1} / {slides.length}
      </p>
    </div>
  );
};

export default Wrapped;
