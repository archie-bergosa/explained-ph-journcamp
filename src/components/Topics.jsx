import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, PenTool, Mic, Camera, TrendingUp } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/variants';

const topics = [
  { icon: <Newspaper />, title: 'News Writing', description: 'Master the art of crafting compelling news stories.' },
  { icon: <PenTool />, title: 'Feature Writing', description: 'Learn to write in-depth and engaging feature articles.' },
  { icon: <Mic />, title: 'Editorial & Opinion', description: 'Develop your voice and write powerful opinion pieces.' },
  { icon: <Camera />, title: 'Photojournalism', description: 'Capture impactful moments through the lens of a camera.' },
  { icon: <TrendingUp />, title: 'Digital Media Trends', description: 'Explore the latest trends in online journalism.' },
];

const Topics = () => {
  return (
    <motion.section 
      id="topics"
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white py-16 px-4"
    >
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 0.6)}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-brand-dark-teal">
            Topics and Inclusions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Covering a wide range of topics to equip you with the essential skills for modern journalism.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 'tween', 0.4, 0.8)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-full mr-4">
                  {React.cloneElement(topic.icon, { className: 'w-6 h-6' })}
                </div>
                <h3 className="text-xl font-bold text-brand-dark">{topic.title}</h3>
              </div>
              <p className="text-gray-700">{topic.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Topics;
