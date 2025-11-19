import React from 'react';
import { motion } from 'framer-motion';

const modules = [
  { title: 'Module 1: Introduction to Campus Journalism', description: 'Learn the fundamentals of journalism and its role in a democratic society.' },
  { title: 'Module 2: News Writing and Reporting', description: 'Master the art of writing compelling news articles and conducting effective interviews.' },
  { title: 'Module 3: Feature Writing', description: 'Explore the world of feature writing and learn how to craft engaging stories.' },
  { title: 'Module 4: Editorial and Opinion Writing', description: 'Develop your skills in writing persuasive editorials and opinion pieces.' },
];

const Modules = () => {
  return (
    <section id="modules" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-brand-dark-teal">
            Summit Modules
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive learning experience for aspiring campus journalists.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-bold text-brand-dark-teal mb-2">{module.title}</h3>
              <p className="text-gray-700">{module.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
