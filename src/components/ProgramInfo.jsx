
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
    description: "Explore impactful storytelling methods for today's media landscape"
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
        key={title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-gray-50/50 rounded-xl p-6 md:p-7 border border-gray-200/80 hover:shadow-lg transition-all duration-300 text-center h-full"
    >
        <div className="flex justify-center mb-5">
            <div className="p-4 bg-brand-light-teal/10 rounded-full">
                <Icon className="w-8 h-8 md:w-9 md:h-9 text-brand-teal" />
            </div>
        </div>
        <h3 className="text-lg md:text-xl font-semibold text-brand-dark mb-3">{title}</h3>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
);

const ProgramInfo = () => {
  return (
    <section id="program-info" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-100" itemScope itemType="https://schema.org/WPHeader">
        <div className="container mx-auto max-w-7xl py-16 sm:py-20">
            {/* About Section Box */}
            <div className="bg-white p-8 sm:p-10 lg:p-14 rounded-2xl shadow-xl mb-12 border border-gray-200/80">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-brand-dark-teal" itemProp="headline">
                        What is Explained PH <span className="text-brand-orange">JournCamp+</span>?
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed mb-8" itemProp="description">
                        The Virtual Journalism Camp is an annual initiative of Explained PH, designed to strengthen campus publications through capacity-building sessions that equip young journalists with the skills and knowledge they need to thrive in today’s fast-changing media landscape.
                    </p>
                    <div className="flex justify-center">
                        <p className="max-w-4xl text-base md:text-lg lg:text-xl text-gray-700 font-medium leading-relaxed bg-brand-light-teal/20 p-5 md:p-6 rounded-lg border-l-4 border-brand-teal">
                            This year, we proudly launch <span className="font-bold text-brand-dark">JournCamp+: National Campus Press Summit</span> — combining seasoned practitioners with award-winning storytellers to give participants the chance to learn and engage with the best of Explained PH.
                        </p>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {aboutFeatures.map((feature, index) => (
                        <FeatureCard key={feature.title} {...feature} delay={index * 0.1} />
                    ))}
                </div>
            </div>

            {/* What's New Section Box */}
            <div className="bg-white p-8 sm:p-10 lg:p-14 rounded-2xl shadow-xl border border-gray-200/80">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-brand-dark-teal" itemProp="headline">
                        What's New in <span className="text-brand-orange">JournCamp+</span>?
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-5xl mx-auto" itemProp="description">
                        We're taking everything to the next level with exciting new features and expanded content to make this year's summit the best one yet.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
                    {newFeatures.map((feature, index) => (
                        <FeatureCard key={feature.title} {...feature} delay={index * 0.1} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-brand-dark-teal rounded-2xl p-7 sm:p-9 lg:p-10 text-white max-w-5xl mx-auto"
                >
                    <div className="flex items-center mb-7 justify-center">
                        <Sparkles className="w-8 h-8 sm:w-9 sm:h-9 text-brand-yellow mr-3" />
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Six New Lectures Added!</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {newLectures.map((lecture, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/10 rounded-lg p-4 md:p-5"
                            >
                                <div className="flex items-center">
                                    <div className="w-2.5 h-2.5 bg-brand-yellow rounded-full mr-3 flex-shrink-0"></div>
                                    <span className="font-medium text-base md:text-lg">{lecture}</span>
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
