
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

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        key={title} // Added key for list rendering
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
    >
        <div className="flex justify-center mb-4">
            <div className="p-3 bg-brand-light-teal/10 rounded-full">
                <Icon className="w-7 h-7 text-brand-teal" />
            </div>
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-brand-dark mb-3">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600">{description}</p>
    </motion.div>
);

const ProgramInfo = () => {
  return (
    <section id="program-info" className="py-12 px-4 bg-gray-50 overflow-hidden">
        <div className="container mx-auto">
            {/* About Section */}
            <div className="mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-dark-teal">
                        What is Explained PH <span className="text-brand-orange">JournCamp+</span>?
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
                        The Virtual Journalism Camp is an annual initiative of Explained PH, designed to strengthen campus publications through capacity-building sessions that equip young journalists with the skills and knowledge they need to thrive in today’s fast-changing media landscape.
                    </p>
                    <div className="flex justify-center">
                        <p className="max-w-3xl text-sm md:text-base text-gray-700 font-medium leading-relaxed bg-brand-light-teal/20 p-4 rounded-lg border-l-4 border-brand-teal">
                            This year, we proudly launch <span className="font-bold text-brand-dark">JournCamp+: National Campus Press Summit</span> — combining seasoned practitioners with award-winning storytellers to give participants the chance to learn and engage with the best of Explained PH.
                        </p>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {aboutFeatures.map((feature, index) => (
                        <FeatureCard key={feature.title} {...feature} delay={index * 0.1} />
                    ))}
                </div>
            </div>

            {/* What's New Section */}
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-dark-teal">
                        What's New in <span className="text-brand-orange">JournCamp+</span>?
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
                        We're taking everything to the next level with exciting new features and expanded content to make this year's summit the best one yet.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {newFeatures.map((feature, index) => (
                        <FeatureCard key={feature.title} {...feature} delay={index * 0.1} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-brand-dark-teal rounded-2xl p-6 md:p-8 text-white max-w-4xl mx-auto"
                >
                    <div className="flex items-center mb-6 justify-center">
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
        </div>
    </section>
  );
};

export default ProgramInfo;
