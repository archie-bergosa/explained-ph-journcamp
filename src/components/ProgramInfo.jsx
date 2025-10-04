
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Target, Sparkles, Clock, MessageCircle, Trophy, Video } from 'lucide-react';

const aboutFeatures = [
  {
    icon: BookOpen,
    title: 'Capacity Building',
    description: 'Comprehensive skill development sessions'
  },
  {
    icon: Users,
    title: 'Community Network',
    description: 'Connect with journalists nationwide'
  },
  {
    icon: Target,
    title: 'Expert Training',
    description: 'Learn from seasoned practitioners'
  },
  {
    icon: Sparkles,
    title: 'Modern Approach',
    description: 'Explore impactful storytelling methods'
  }
];

const newFeatures = [
    {
      icon: Clock,
      title: 'Month-long Event',
      description: 'Spread across multiple weekends for deeper learning',
    },
    {
      icon: MessageCircle,
      title: 'Extended Q&A',
      description: 'Longer Q&A portions to maximize engagement',
    },
    {
      icon: Trophy,
      title: 'Press Summit',
      description: 'Put skills into practice in a competition',
    },
    {
      icon: Video,
      title: 'Live Awarding',
      description: 'Facebook livestream of the awarding ceremony',
    }
  ];

const newLectures = [
    'MOCJ Tips',
    'How to Become an Effective Editor',
    'School Paper Management',
    'Political Cartoons',
    'Advocacy Journalism',
    'Peace Journalism'
];

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-5 border border-gray-200/80 text-center h-full flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow"
    >
        <div className="p-3 bg-brand-light-teal/10 rounded-full mb-3">
            <Icon className="w-6 h-6 text-brand-teal" />
        </div>
        <h3 className="text-base font-semibold text-brand-dark mb-2">{title}</h3>
        <p className="text-xs text-gray-600">{description}</p>
    </motion.div>
);

const ProgramInfo = () => {
  return (
    <section id="program-info" className="py-16 md:py-24 px-4 bg-gray-50 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">

          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* About Section */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-lg"
            >
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-brand-dark-teal">
                    What is <span className="text-brand-orange">JournCamp+</span>?
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                    The Virtual Journalism Camp is an annual Explained PH initiative to strengthen campus publications through sessions that equip young journalists for today’s media landscape.
                </p>
                <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed bg-brand-light-teal/20 p-4 rounded-lg border-l-4 border-brand-teal">
                    This year, we launch <span className="font-bold text-brand-dark">JournCamp+: National Campus Press Summit</span> — a chance to learn and engage with the best of Explained PH.
                </p>
            </motion.div>

            {/* What's New Section */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-lg"
            >
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-brand-dark-teal">
                    What's New in <span className="text-brand-orange">JournCamp+</span>?
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                    We're taking everything to the next level with exciting new features and expanded content.
                </p>
                <div className="bg-brand-dark-teal rounded-xl p-5 text-white">
                    <div className="flex items-center mb-4">
                        <Sparkles className="w-6 h-6 text-brand-yellow mr-3" />
                        <h3 className="text-lg sm:text-xl font-bold">Five New Lectures Added!</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        {newLectures.map((lecture, index) => (
                            <div key={index} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full mr-2.5 flex-shrink-0"></div>
                                <span className="font-medium text-sm">{lecture}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
              <h3 className="col-span-full text-xl md:text-2xl font-bold mb-0 text-brand-dark-teal text-center">Core Pillars</h3>
              {aboutFeatures.map((feature, index) => (
                  <FeatureCard key={index} {...feature} delay={index * 0.1} />
              ))}
              <h3 className="col-span-full text-xl md:text-2xl font-bold mt-6 mb-0 text-brand-dark-teal text-center">New Features</h3>
              {newFeatures.map((feature, index) => (
                  <FeatureCard key={index} {...feature} delay={0.4 + index * 0.1} />
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramInfo;
