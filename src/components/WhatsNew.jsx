import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageCircle, Trophy, Video, Sparkles } from 'lucide-react';

const WhatsNew = () => {
  const newFeatures = [
    {
      icon: Clock,
      title: 'Month-long Event',
      description: 'Spread across multiple weekends for deeper learning',
    },
    {
      icon: MessageCircle,
      title: 'Extended Q&A',
      description: 'Longer Question and Answer portions to maximize engagement',
    },
    {
      icon: Trophy,
      title: 'Press Summit Competition',
      description: 'National Campus Press Summit to put skills into practice',
    },
    {
      icon: Video,
      title: 'Live Awarding',
      description: 'Facebook livestream of the awarding ceremony',
    }
  ];

  const newLectures = [
    'MOCJ Tips',
    'How to Become an Effective Editor of Your Publication',
    'School Paper Management',
    'Political Cartoons',
    'Advocacy Journalism',
    'Peace Journalism'
  ];

  return (
    <section id="whats-new" className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-brand-dark-teal">
            What's New in <span className="text-brand-orange">JournCamp+</span>?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            We're taking everything to the next level with exciting new features and expanded content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-3 bg-brand-teal/10 rounded-full w-fit mb-4">
                <feature.icon className="w-6 h-6 text-brand-teal" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-brand-dark mb-2">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-brand-dark-teal rounded-2xl p-6 md:p-8 text-white"
        >
          <div className="flex items-center mb-6">
            <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-brand-yellow mr-3" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Five New Lectures Added!</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {newLectures.map((lecture, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 rounded-lg p-4"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div>
                  <span className="font-medium text-sm md:text-base">{lecture}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsNew;