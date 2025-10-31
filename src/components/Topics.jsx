import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Edit3, FileText, Star, Microscope, Trophy, Scissors, Camera, Palette, Radio, Tv, Monitor, Globe, Smartphone, Users, Settings, Target, Lightbulb, Heart, User, Calendar, Pause as Peace } from 'lucide-react';

const logos = {
  Rappler: 'https://i.postimg.cc/xdXJN6sD/Rappler-logo.png',
  'Explained PH': 'https://i.postimg.cc/WbMgnY6f/Explained-PH-1-1.jpg',
  NSPC: 'https://i.postimg.cc/Hk249v4L/NSPC-logo.png',
  UP: 'https://i.postimg.cc/8zDmWgv9/UP-seal.png',
  'PITIK BULAG': 'https://i.postimg.cc/15DKf387/PB-logo.png',
  DepEd: 'https://i.postimg.cc/ryBJVrwt/Deped-logo.png',
};

const TopicItem = ({ topic, index, isNew = false }) => {
  const iconColor = isNew ? "text-brand-orange" : "text-brand-teal";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Top Section */}
      <div>
        <div className="flex items-center mb-4">
          <div className={`p-2 rounded-full bg-opacity-10 ${isNew ? 'bg-brand-orange' : 'bg-brand-teal'}`}>
            <topic.icon className={`w-6 h-6 ${iconColor}`} />
          </div>
        </div>
        <h4 className="text-brand-dark font-bold text-lg leading-tight mb-3 h-14 line-clamp-2">{topic.name}</h4>
      </div>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Bottom Section */}
      <div className="space-y-4 text-sm">
        <div className="min-h-[80px]">
          {topic.speaker ? (
            <div className="flex items-start text-gray-700">
              <User className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-brand-dark-teal" />
              <div>
                <span className="font-semibold text-brand-dark-teal">{topic.speaker}</span>
                {topic.affiliations && (
                  <div className="mt-2 space-y-1.5">
                    {topic.affiliations.map((affiliation, i) => (
                      <div key={i} className="flex items-center">
                        {affiliation.logo && <img src={logos[affiliation.logo]} alt={affiliation.name} className="w-4 h-4 mr-2 object-contain" />}
                        <span className="text-gray-500 text-xs">{affiliation.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-start text-gray-400">
                <User className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <span>Coming Soon</span>
            </div>
          )}
        </div>
        <div className="flex items-center text-gray-400">
          <Calendar className="w-4 h-4 mr-3 flex-shrink-0" />
          <span>Coming Soon</span>
        </div>
      </div>
    </motion.div>
  );
};

const Topics = () => {
  const coreTopics = [
    { name: 'News Writing', icon: PenTool, speaker: 'Bonz Magsambol', affiliations: [{ name: 'Multimedia Reporter, Rappler', logo: 'Rappler' }] },
    { name: 'Editorial Writing', icon: Edit3, speaker: 'Danilo Arao', affiliations: [{ name: 'Professor, UP Diliman', logo: 'UP' }] },
    { name: 'Column Writing', icon: FileText, speaker: 'Prences Jhewen Albis', affiliations: [{ name: 'Associate Editor, Explained PH', logo: 'Explained PH' }, { name: 'NSPC Winner', logo: 'NSPC' }] },
    { name: 'Feature Writing', icon: Star, speaker: 'Gianela Zapata', affiliations: [{ name: 'NSPC Winner', logo: 'NSPC' }, { name: 'Most Outstanding Campus Journalist', logo: 'NSPC' }] },
    { name: 'Science and Technology Writing', icon: Microscope, speaker: 'Gabriel Ibis', affiliations: [{ name: 'Managing Editor, Explained PH', logo: 'Explained PH' }, { name: 'NSPC Winner', logo: 'NSPC' }] },
    { name: 'Sports Writing', icon: Trophy, speaker: 'Christan Salvaña', affiliations: [{ name: '4x NSPC Winner', logo: 'NSPC' }, { name: 'DSPC/RSPC Judge', logo: 'DepEd' }] },
    { name: 'Copyreading and Headline Writing', icon: Scissors, speaker: 'Isaiah Matthew Hilario', affiliations: [{ name: 'NSPC Champion', logo: 'NSPC' }] },
    { name: 'Photojournalism', icon: Camera, speaker: 'Jhason James Rosel', affiliations: [{ name: 'NSPC Champion', logo: 'NSPC' }] },
    { name: 'Editorial Cartooning', icon: Palette, speaker: 'Jascyl Jee Sayson', affiliations: [{ name: 'Chief Cartoonist, Explained PH', logo: 'Explained PH' }, { name: 'NSPC Champion', logo: 'NSPC' }, { name: 'Most Outstanding Campus Journalist', logo: 'NSPC' }] },
    { name: 'Radio Broadcasting', icon: Radio },
    { name: 'TV Broadcasting', icon: Tv, speaker: 'Marco Romas', affiliations: [{ name: 'Freelance Journalist' }] },
    { name: 'Collaborative Desktop Publishing', icon: Monitor, speaker: 'James Punsalan', affiliations: [{ name: 'NSPC Winner', logo: 'NSPC' }, { name: 'DSPC/RSPC Judge', logo: 'DepEd' }] },
    { name: 'Online Publishing', icon: Globe, speaker: 'Archie R. Bergosa', affiliations: [{ name: 'Editor-in-Chief, Explained PH', logo: 'Explained PH' }, { name: 'DSPC/RSPC Judge', logo: 'DepEd' }] },
    { name: 'Mobile Journalism', icon: Smartphone }
  ];

  const newTopics = [
    { name: 'School Paper Management', icon: Settings, speaker: 'Owen Castillo', affiliations: [{ name: 'Most Outstanding School Paper Adviser', logo: 'NSPC' }] },
    { name: 'Political Cartoons', icon: Target, speaker: 'Kartunista Zach', affiliations: [{ name: 'Satirist/Cartoonist, PITIK BULAG', logo: 'PITIK BULAG' }] },
    { name: 'MOCJ Tips', icon: Lightbulb, speaker: 'Yesha Camile', affiliations: [{ name: 'Staffer, Explained PH', logo: 'Explained PH' }, { name: 'Most Outstanding Campus Journalist', logo: 'NSPC' }] },
    { name: 'Community Journalism', icon: Users, speaker: 'Samantha Bagayas', affiliations: [{ name: 'Head of Civic Engagement, Rappler', logo: 'Rappler' }] },
    { name: 'Peace Journalism', icon: Peace, speaker: 'Marion Manalo', affiliations: [{ name: 'Community Head, Explained PH', logo: 'Explained PH' }] },
    { name: 'Becoming an Effective Student Editor', icon: Users },
  ];

  return (
    <section id="topics" className="py-16 px-4 bg-slate-50" itemScope itemType="https://schema.org/WPHeader">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-brand-dark-teal" itemProp="headline">
            Lecture Topics
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
            Comprehensive coverage of all campus journalism events with expert-led sessions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-brand-dark mb-8 text-center">Core Lecture Series</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
        >
          <div className="text-center mb-10">
            <span className="inline-block bg-brand-yellow text-brand-dark font-bold px-4 py-2 rounded-full text-sm mb-4">
              NEW LECTURES!
            </span>
            <h3 className="text-2xl font-bold text-brand-dark">Fresh Content for 2025</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
