
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Target, Sparkles, Clock, MessageCircle, Trophy, Video } from 'lucide-react';

const aboutFeatures = [
  {
    icon: BookOpen,
    title: 'Capacity Building',
    description: 'Strengthen campus publications through comprehensive skill development sessions'
  },
  {
    icon: Users,
    title: 'Community Network',
    description: 'Connect with young journalists and student publications nationwide'
  },
  {
    icon: Target,
    title: 'Expert Training',
    description: 'Learn from seasoned practitioners and award-winning storytellers'
  },
  {
    icon: Sparkles,
    title: 'Modern Approach',
    description: 'Explore impactful storytelling methods for today\'s media landscape'
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

const FeatureCard = ({ icon: Icon, title, description, delay, isNew }) => (
    <motion.div
        key={title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className={`bg-white/90 backdrop-blur-sm rounded-xl p-6 border ${isNew ? 'border-brand-accent/30' : 'border-brand-light-gray'} shadow-urban-shadow hover:shadow-urban-shadow-lg transition-all duration-300 text-center h-full`}
    >
        <div className="flex justify-center mb-4">
            <div className={`p-3 rounded-full ${isNew ? 'bg-brand-accent/10' : 'bg-brand-blue/10'}`}>
                <Icon className={`w-7 h-7 ${isNew ? 'text-brand-accent' : 'text-brand-blue'}`} />
            </div>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-brand-primary mb-3">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600">{description}</p>
    </motion.div>
);

const ProgramInfo = () => {
  return (
    <section id="program-info" className="relative py-20 px-4 bg-brand-secondary/30 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary via-transparent to-brand-accent/20 opacity-30"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
          {/* Hero Section */}
          <motion.div 
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
              <h1 className="text-4xl md:text-6xl font-extrabold text-brand-primary mb-6">
                  What is <span className="text-brand-accent">JournCamp+</span>?
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  The Virtual Journalism Camp is an annual initiative by Explained PH, designed to empower the next generation of journalists. We provide the tools, knowledge, and network to thrive in today's dynamic media landscape.
              </p>
          </motion.div>

          {/* About Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {aboutFeatures.map((feature, index) => (
                  <FeatureCard key={feature.title} {...feature} delay={index * 0.15} isNew={false} />
              ))}
          </div>

          {/* What's New Section */}
          <div className="relative">
              <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-urban-shadow-lg border border-brand-light-gray"
              >
                  <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4">
                          What's New in <span className="text-brand-accent">JournCamp+</span>?
                      </h2>
                      <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
                          This year, we're introducing a suite of new features and content to make the summit more impactful than ever.
                      </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                      {newFeatures.map((feature, index) => (
                          <FeatureCard key={feature.title} {...feature} delay={index * 0.15} isNew={true} />
                      ))}
                  </div>

                  <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-brand-primary rounded-2xl p-6 md:p-10 text-white max-w-5xl mx-auto"
                  >
                      <div className="flex items-center mb-6 justify-center">
                          <Sparkles className="w-8 h-8 text-brand-accent mr-4" />
                          <h3 className="text-2xl md:text-3xl font-bold">Five New Lectures!</h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-center">
                          {newLectures.map((lecture, index) => (
                              <motion.div
                                  key={index}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                  viewport={{ once: true }}
                                  className="bg-white/10 rounded-lg p-4"
                              >
                                  <span className="font-semibold text-md">{lecture}</span>
                              </motion.div>
                          ))}
                      </div>
                  </motion.div>
              </motion.div>
          </div>
      </div>
    </section>
  );
};

export default ProgramInfo;
