import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, BookOpen, Trophy } from 'lucide-react';

const History = () => {
  const timeline = [
    {
      year: '2022',
      date: 'February 18–21',
      title: 'First JournCamp',
      description: 'The pioneering camp featured six lectures: Headline Writing, News Writing, Opinion Writing, Sports Writing, Feature Writing, and Science and Technology Writing.',
      icon: BookOpen,
      color: 'text-brand-light-teal',
      bgColor: 'bg-brand-light-teal/10'
    },
    {
      year: '2023',
      date: 'November 25–26',
      title: 'Second JournCamp',
      description: 'Expanded with new lectures like Radio Broadcasting, Scriptwriting, Online Publishing, and Photojournalism to reflect growing demands.',
      icon: Users,
      color: 'text-brand-teal',
      bgColor: 'bg-brand-teal/10'
    },
    {
      year: '2024',
      date: 'November 23–24',
      title: 'Third JournCamp',
      description: 'Showcased our largest lineup with 15 lectures, bringing together NSPC winners and seasoned industry veterans as speakers.',
      icon: Trophy,
      color: 'text-brand-dark-teal',
      bgColor: 'bg-brand-dark-teal/10'
    },
    {
      year: '2025',
      date: 'Month-long',
      title: 'JournCamp+ Summit',
      description: 'Introduces a month-long program, expanded sessions, and the National Campus Press Summit competition for all student levels.',
      icon: Calendar,
      color: 'text-brand-orange',
      bgColor: 'bg-brand-orange/10'
    }
  ];

  return (
    <section id="history" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-brand-dark-teal">
            JournCamp Through the Years
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            From a simple 6-lecture camp to a comprehensive month-long summit, see how JournCamp has evolved.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 transform -translate-y-1/2 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 relative">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center md:relative"
              >
                <div className="relative mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 border-gray-200 bg-white z-10 relative">
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${event.bgColor}`}>
                      <event.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${event.color}`} />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">{event.year}</h3>
                <p className="text-xs sm:text-sm font-medium text-gray-500 mb-2">{event.date}</p>
                <h4 className="text-sm sm:text-base font-semibold text-brand-teal mb-2">{event.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 px-2 sm:px-4">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;