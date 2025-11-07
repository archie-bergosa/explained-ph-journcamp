import React, { useState } from 'react';
import { Calendar, Clock, User, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const nov8Schedule = [
  {
    speaker: 'Mr. Danilo Arao',
    event: 'Editorial Writing',
    time: '9:00AM – 10:00AM',
  },
  {
    speaker: 'Mr. Isaiah Matthew Hilario',
    event: 'Copyreading and Headline Writing',
    time: '10:40 AM – 11:40 AM',
  },
  {
    speaker: 'Ms. Gianela Zapata',
    event: 'Feature Writing',
    time: '1:15PM – 2:15PM',
  },
  {
    speaker: 'Mr. Marco Romas',
    event: 'TV Broadcasting',
    time: '2:55PM – 3:55PM',
  },
];

const nov9Schedule = [
  {
    speaker: 'Mr. Gabriel Ibis',
    event: 'Science and Technology Writing',
    time: '9:00AM – 10:00AM',
  },
  {
    speaker: 'Ms. Jhewen Albis',
    event: 'Column Writing',
    time: '10:40AM – 11:40AM',
  },
  {
    speaker: 'Cartoonist Zach',
    event: 'Political Cartoons',
    time: '1:15PM – 2:15PM',
  },
  {
    speaker: 'Ms. Jascyl Jee Sayson',
    event: 'Editorial Cartooning',
    time: '2:55PM – 3:55PM',
  },
];

const ScheduleCard = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
  >
    <div className="p-6">
      <div className="flex items-center mb-4">
        <User className="h-6 w-6 text-brand-teal mr-3" />
        <h3 className="text-xl font-bold text-brand-dark">{item.speaker}</h3>
      </div>
      <div className="flex items-center text-gray-600 mb-2">
        <Mic className="h-5 w-5 mr-3" />
        <span>{item.event}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <Clock className="h-5 w-5 mr-3" />
        <span>{item.time}</span>
      </div>
    </div>
  </motion.div>
);

const LectureSeries = () => {
  const [activeTab, setActiveTab] = useState('nov8');

  const tabs = [
    { id: 'nov8', label: 'November 8', schedule: nov8Schedule },
    { id: 'nov9', label: 'November 9', schedule: nov9Schedule },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark tracking-tight">Lecture Series</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">The full schedule of our two-day lecture series.</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-gray-200/60 p-2 rounded-full">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
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
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {tabs.find(tab => tab.id === activeTab).schedule.map((item, index) => (
              <ScheduleCard key={index} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
};

export default LectureSeries;
