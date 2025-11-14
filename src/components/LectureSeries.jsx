import React, { useState } from 'react';
import { Calendar, Clock, User, Mic, PenTool, Edit3, Star, Tv, Microscope, FileText, Target, Palette, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const logos = {
  Rappler: 'https://i.postimg.cc/xdXJN6sD/Rappler-logo.png',
  'Explained PH': 'https://i.postimg.cc/WbMgnY6f/Explained-PH-1-1.jpg',
  NSPC: 'https://i.postimg.cc/Hk249v4L/NSPC-logo.png',
  UP: 'https://i.postimg.cc/8zDmWgv9/UP-seal.png',
  'PITIK BULAG': 'https://i.postimg.cc/15DKf387/PB-logo.png',
  DepEd: 'https://i.postimg.cc/ryBJVrwt/Deped-logo.png',
  'Cartooning for Peace': 'https://i.postimg.cc/Wp0wW4s9/a-utiliser-LOGO-CARTOONING-MACARON-de-toure-BD.png',
  'GMA': 'https://i.postimg.cc/Bn3Bj1S3/2560px-GMA-Network-Logo-Vector-svg.png',
  'Journcamp': 'https://i.postimg.cc/zHkXz0tv/Copy-of-journcamp.png'
};

const nov8Schedule = [
  {
    speaker: 'Mr. Danilo Arao',
    event: 'Editorial Writing',
    time: '9:00AM – 10:00AM',
    icon: Edit3,
    affiliations: [{ name: 'Professor, UP Diliman', logo: 'UP' }]
  },
  {
    speaker: 'Ms. Jhewen Albis',
    event: 'Column Writing',
    time: '10:40AM – 11:40AM',
    icon: PenTool,
    affiliations: [{ name: 'Associate Editor, Explained PH', logo: 'Explained PH' }, { name: 'NSPC Winner', logo: 'NSPC' }]
  },
  {
    speaker: 'Ms. Gianela Zapata',
    event: 'Feature Writing',
    time: '1:15PM – 2:15PM',
    icon: Star,
    affiliations: [{ name: 'NSPC Winner', logo: 'NSPC' }, { name: 'Most Outstanding Campus Journalist', logo: 'NSPC' }]
  },
  {
    speaker: 'Mr. Gabriel Ibis',
    event: 'Science and Technology Writing',
    time: '2:55PM – 3:55PM',
    icon: Microscope,
    affiliations: [{ name: 'Managing Editor, Explained PH', logo: 'Explained PH' }, { name: 'NSPC Winner', logo: 'NSPC' }]
  },
];

const nov9Schedule = [
  {
    speaker: 'Mr. Marco Romas',
    event: 'TV Broadcasting',
    time: '9:00AM – 10:00AM',
    icon: Tv,
    affiliations: [{ name: 'Freelance Journalist' }]
  },
  {
    speaker: 'Mr. Isaiah Matthew Hillario',
    event: 'Copyreading and Headline Writing',
    time: '10:40AM – 11:40AM',
    icon: Scissors,
    affiliations: [{ name: 'NSPC Champion', logo: 'NSPC' }]
  },
  {
    speaker: 'Cartoonist Zach',
    event: 'Political Cartoons',
    time: '1:15PM – 2:15PM',
    icon: Target,
    affiliations: [{ name: 'Cartoonist, PITIK BULAG', logo: 'PITIK BULAG' }, { name: 'Member, Cartooning for Peace', logo: 'Cartooning for Peace' }]
  },
  {
    speaker: 'Ms. Jascyl Jee Sayson',
    event: 'Editorial Cartooning',
    time: '2:55PM – 3:55PM',
    icon: Palette,
    affiliations: [{ name: 'Chief Cartoonist, Explained PH', logo: 'Explained PH' }, { name: 'NSPC Champion', logo: 'NSPC' }]
  },
];

const nov15Schedule = [
    {
        speaker: 'Owen Castillo',
        event: 'School Paper Management',
        time: '9:00AM-10:00AM',
        icon: FileText,
        affiliations: [{ name: 'Most Outstanding School Paper Adviser', logo: 'NSPC' }]
    },
    {
        speaker: 'Jhason James Rosel',
        event: 'Photojournalism',
        time: '10:40AM-11:40AM',
        icon: PenTool,
        affiliations: [{ name: 'NSPC Champion', logo: 'NSPC' }]
    },
    {
        speaker: 'Christan Salvaña',
        event: 'Sports Writing',
        time: '1:15PM-2:15PM',
        icon: Star,
        affiliations: [ { name: '4x NSPC Winner', logo: 'NSPC' }, { name: 'DSPC/RSPC Judge', logo: 'DepEd' } ]
    },
    {
        speaker: 'James Punsalan',
        event: 'Collaborative Desktop Publishing',
        time: '2:55PM-3:55PM',
        icon: Edit3,
        affiliations: [{ name: 'NSPC Winner', logo: 'NSPC' }]
    },
    {
        speaker: 'Joseph Azil Buena',
        event: 'Radio Broadcasting',
        time: '4:35PM-5:35PM',
        icon: Mic,
        affiliations: [{ name: 'NSPC Winner', logo: 'NSPC' }]
    }
];

const ScheduleCard = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col"
  >
    <div className="p-6 flex-grow">
      <div className="flex items-start mb-4">
        <div className={`p-2 rounded-full bg-brand-teal bg-opacity-10 mr-4`}>
            {item.icon && <item.icon className={`w-6 h-6 text-brand-teal`} />}
        </div>
        <div>
            <h3 className="text-xl font-bold text-brand-dark">{item.event}</h3>
            <div className="flex items-center text-gray-600 text-sm mt-1">
                <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{item.time}</span>
            </div>
        </div>
      </div>
      
      <div className="border-t border-gray-100 my-4"></div>

      {item.speaker ? (
        <div className="flex items-start text-gray-700">
            <User className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-brand-dark-teal" />
            <div>
                <span className="font-semibold text-brand-dark-teal">{item.speaker}</span>
                {item.affiliations && (
                    <div className="mt-2 space-y-1.5">
                    {item.affiliations.map((affiliation, i) => (
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
          <User className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
          <span>Coming Soon</span>
        </div>
      )}
    </div>
  </motion.div>
);

const LectureSeries = () => {
  const [activeTab, setActiveTab] = useState('nov8');

  const tabs = [
    { id: 'nov8', label: 'November 8', schedule: nov8Schedule },
    { id: 'nov9', label: 'November 9', schedule: nov9Schedule },
    { id: 'nov15', label: 'November 15', schedule: nov15Schedule },
    { id: 'nov16', label: 'November 16', schedule: [] },
  ];

  const activeSchedule = tabs.find(tab => tab.id === activeTab)?.schedule || [];

  return (
    <div className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">Lecture Series</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">The full schedule of our multi-day event.</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 bg-gray-200/60 p-2 rounded-full">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'bg-brand-teal text-white shadow'
                    : 'text-gray-600 hover:bg-gray-300/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <AnimatePresence mode="wait">
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
            >
                {activeSchedule.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-8">
                        {activeSchedule.map((item, index) => (
                            <ScheduleCard key={index} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <Calendar className="h-12 w-12 mx-auto text-gray-300" />
                        <h2 className="mt-4 text-2xl font-bold text-gray-400">Coming Soon</h2>
                        <p className="mt-2 text-gray-500">The schedule for this day will be announced shortly.</p>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};

export default LectureSeries;
