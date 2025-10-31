import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Edit3, FileText, Star, Microscope, Trophy, Scissors, Camera, Palette, Radio, Tv, Monitor, Globe, Smartphone, Users, Settings, Target, Lightbulb, Heart, User, Calendar, Pause as Peace } from 'lucide-react';

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
          <div className="space-y-2 opacity-80">
            <div className="flex items-start text-xs text-gray-600">
              <User className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
              {topic.speaker ? (
                <div>
                  <span className="font-semibold text-brand-dark-teal">{topic.speaker}</span>
                  <br />
                  <span className="text-gray-500">{topic.speakerTitle}</span>
                </div>
              ) : (
                <span>Speaker: Coming Soon</span>
              )}
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
    { name: 'News Writing', icon: PenTool, speaker: 'Bonz Magsambol', speakerTitle: 'Multimedia Reporter, Rappler' },
    { name: 'Editorial Writing', icon: Edit3, speaker: 'Danilo Arao', speakerTitle: 'Professor, UP Diliman College of Media and Communication' },
    { name: 'Column Writing', icon: FileText, speaker: 'Prences Jhewen Albis', speakerTitle: 'Associate Editor, Explained PH, NSPC Winner' },
    { name: 'Feature Writing', icon: Star, speaker: 'Gianela Zapata', speakerTitle: 'NSPC Winner, NSPC 2023 Most Outstanding Campus Journalist' },
    { name: 'Science and Technology Writing', icon: Microscope, speaker: 'Gabriel Ibis', speakerTitle: 'Managing Editor, Explained PH, NSPC Winner' },
    { name: 'Sports Writing', icon: Trophy, speaker: 'Christan Salvaña', speakerTitle: '4x NSPC Winner, DSPC/RSPC Judge' },
    { name: 'Copyreading and Headline Writing', icon: Scissors, speaker: 'Isaiah Matthew Hilario', speakerTitle: 'NSPC Champion' },
    { name: 'Photojournalism', icon: Camera, speaker: 'Jhason James Rosel', speakerTitle: 'NSPC Champion' },
    { name: 'Editorial Cartooning', icon: Palette, speaker: 'Jascyl Jee Sayson', speakerTitle: 'Chief Cartoonist, Explained PH, NSPC Champion, NSPC 2025 Most Outstanding Campus Journalist' },
    { name: 'Radio Broadcasting', icon: Radio },
    { name: 'TV Broadcasting', icon: Tv, speaker: 'Marco Romas', speakerTitle: 'Freelance Journalist' },
    { name: 'Collaborative Desktop Publishing', icon: Monitor, speaker: 'James Punsalan', speakerTitle: 'NSPC Winner, DSPC/RSPC Judge' },
    { name: 'Online Publishing', icon: Globe, speaker: 'Archie R. Bergosa', speakerTitle: 'Editor-in-Chief, Explained PH, DSPC/RSPC Judge' },
    { name: 'Mobile Journalism', icon: Smartphone }
  ];

  const newTopics = [
    { name: 'School Paper Management', icon: Settings, speaker: 'Owen Castillo', speakerTitle: 'NSPC 2025 Most Outstanding School Paper Adviser' },
    { name: 'Political Cartoons', icon: Target, speaker: 'Kartunista Zach', speakerTitle: 'Satirist/Cartoonist, PITIK BULAG' },
    { name: 'MOCJ Tips', icon: Lightbulb, speaker: 'Yesha Camile', speakerTitle: 'Staffer, Explained PH, NSPC 2025 Most Outstanding Campus Journalist' },
    { name: 'Community Journalism', icon: Users, speaker: 'Samantha Bagayas', speakerTitle: 'Head of Civic Engagement, Rappler' },
    { name: 'Peace Journalism', icon: Peace, speaker: 'Marion Manalo', speakerTitle: 'Community Head, Explained PH' },
    { name: 'How to Become an Effective Editor of Your Publication', icon: Users },
  ];

  return (
    <section id="topics" className="py-12 px-4 bg-slate-50" itemScope itemType="https://schema.org/WPHeader">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-brand-dark-teal" itemProp="headline">
            Lecture Topics
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
            Comprehensive coverage of all campus journalism events with expert-led sessions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 sm:p-12 shadow-xl border border-slate-200 mb-12"
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
          className="bg-white rounded-2xl p-6 sm:p-12 shadow-xl border border-slate-200"
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
