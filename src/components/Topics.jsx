import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Edit3, FileText, Star, Microscope, Trophy, Scissors, Camera, Palette, Radio, Tv, Monitor, Globe, Smartphone, Users, Settings, Target, Lightbulb, Heart, Pause as Peace, User, Calendar } from 'lucide-react';

const TopicItem = ({ topic, index, isNew = false }) => {
  const iconColor = isNew ? "text-brand-orange" : "text-brand-teal";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-4 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-md"
    >
      <div className="flex items-start space-x-4">
        <div className={`mt-1 ${iconColor}`}>
          <topic.icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="text-brand-dark font-semibold text-sm sm:text-base leading-tight mb-2">{topic.name}</h4>
          <div className="space-y-1 opacity-70">
            <div className="flex items-center text-xs text-gray-500">
              <User className="w-3 h-3 mr-2" />
              <span>Speaker: Coming Soon</span>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <Calendar className="w-3 h-3 mr-2" />
              <span>Date: Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Topics = () => {
  const coreTopics = [
    { name: 'News Writing', icon: PenTool },
    { name: 'Editorial Writing', icon: Edit3 },
    { name: 'Column Writing', icon: FileText },
    { name: 'Feature Writing', icon: Star },
    { name: 'Science and Technology Writing', icon: Microscope },
    { name: 'Sports Writing', icon: Trophy },
    { name: 'Copyreading and Headline Writing', icon: Scissors },
    { name: 'Photojournalism', icon: Camera },
    { name: 'Editorial Cartooning', icon: Palette },
    { name: 'Radio Broadcasting', icon: Radio },
    { name: 'TV Broadcasting', icon: Tv },
    { name: 'Collaborative Desktop Publishing', icon: Monitor },
    { name: 'Online Publishing', icon: Globe },
    { name: 'Mobile Journalism', icon: Smartphone }
  ];

  const newTopics = [
    { name: 'How to Become an Effective Editor of Your Publication', icon: Users },
    { name: 'School Paper Management', icon: Settings },
    { name: 'Political Cartoons', icon: Target },
    { name: 'MOCJ Tips', icon: Lightbulb },
    { name: 'Advocacy Journalism', icon: Heart },
    { name: 'Peace Journalism', icon: Peace }
  ];

  return (
    <section id="topics" className="py-16 md:py-24 px-4 bg-slate-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-brand-dark-teal">
            Lecture Topics
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive coverage of all campus journalism events with expert-led sessions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200 mb-16"
        >
          <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-8 text-center">Core Lecture Series</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4">
            {coreTopics.map((topic, index) => (
              <TopicItem key={index} topic={topic} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200"
        >
          <div className="text-center mb-8">
            <span className="inline-block bg-brand-yellow text-brand-dark font-bold px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm mb-4">
              NEW LECTURES!
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-brand-dark">Fresh Content for 2025</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 max-w-4xl mx-auto">
            {newTopics.map((topic, index) => (
              <TopicItem key={index} topic={topic} index={index} isNew={true} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Topics;