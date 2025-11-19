import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, BookOpen } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/variants';

const ProgramInfo = () => {
  const infoItems = [
    {
      icon: <Calendar className="w-8 h-8 text-brand-orange" />,
      title: 'Duration',
      description: 'A month-long immersive experience with weekend sessions.',
    },
    {
      icon: <Users className="w-8 h-8 text-brand-orange" />,
      title: 'For Whom',
      description: 'Aspiring and current campus journalists and advisers.',
    },
    {
      icon: <Award className="w-8 h-8 text-brand-orange" />,
      title: 'Certification',
      description: 'Receive a certificate of completion after the program.',
    },
     {
      icon: <BookOpen className="w-8 h-8 text-brand-orange" />,
      title: 'Format',
      description: 'Live online lectures, interactive workshops, and Q&A sessions.',
    },
  ];

  return (
    <motion.section 
      id="program-info"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-slate-100 py-16 px-4"
    >
      <div className="container mx-auto">
        <motion.div 
          variants={fadeIn('up', 'tween', 0.2, 0.6)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {infoItems.map((item, index) => (
            <div key={index} className="p-6">
              <div className="flex justify-center items-center mb-4">
                <div className="p-4 bg-brand-orange/10 rounded-full">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProgramInfo;
